import supabase from './db';
import { useEffect, useState } from 'react';
import 'App.css';
interface peoPivot {
  peo: number;
  po_group: number[];
  des_en: string;
  des_th: string;
}

interface rowsTemplate {
  peo: number | null;
  po: number;
  isMap: boolean;
}

interface dataMap extends peoPivot {
  rows: rowsTemplate[];
}

function App() {
  const [peoPivot, setPeoPivot] = useState<peoPivot[]>([]);

  useEffect(() => {
    async function loadData() {
      let { data: peo_po_pivot, error } = await supabase
        .from('peo_po_pivot')
        .select('*');

      if (peo_po_pivot) setPeoPivot(peo_po_pivot);
    }
    loadData();
  }, []);

  const dataMap = processData(peoPivot);

  console.log(dataMap);

  return (
    <div className='row'>
      <div>
        {dataMap.map((el) => (
          <div>
            <div>{el.peo}</div>
            <div>{el.des_th}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

function processData(data: peoPivot[]): dataMap[] {
  const allPo = [...Array(11).keys()].map((el) => el + 1);
  const rowsTemplate: rowsTemplate[] = allPo.map((po) => {
    return {
      peo: null,
      po: po,
      isMap: false,
    };
  });

  const dataMap: dataMap[] = data.map((el) => {
    let rows: rowsTemplate[] = JSON.parse(JSON.stringify(rowsTemplate));
    rows = rows.map((row) => {
      return {
        ...row,
        peo: el.peo,
        isMap: el.po_group.includes(row.po) ? true : false,
      };
    });

    return {
      ...el,
      rows,
    };
  });

  return dataMap;
}
