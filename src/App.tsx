import supabase from './db';
import { useEffect, useState } from 'react';
import './App.css';
interface peoPivot {
  peo: number;
  po_group: number[];
  des_en: string;
  des_th: string;
}

interface peo {
  id: number;
  peo: number;
  des_en: string;
  des_th: string;
}

interface rowsTemplate {
  key: string;
  text: string;
  peo: number | null;
  po: number;
  isMap: boolean;
}
interface dataMap extends peoPivot {
  key: string;
  text: string;
  rows: rowsTemplate[];
}

interface headerMap {
  key: string;
  text: string;
}
function App() {
  const [peoPivot, setPeoPivot] = useState<peoPivot[]>([]);
  const [peo, setPeo] = useState<peo[]>([]);

  async function loadPivotData() {
    let { data: peo_po_pivot, error } = await supabase
      .from('peo_po_pivot')
      .select('*');

    if (peo_po_pivot) setPeoPivot(peo_po_pivot);
  }

  async function loadPeoData() {
    let { data: peoData, error } = await supabase
      .from('peo_sorted')
      .select('*');
    if (peoData) setPeo(peoData);
  }

  useEffect(() => {
    loadPivotData();
    loadPeoData();
  }, []);

  const dataMap = processRowData(peoPivot, peo);
  const headerMap = getHeaderData();

  async function toggleMap(el: rowsTemplate) {
    if (el.isMap) {
      //Remove
      const { data, error } = await supabase
        .from('peo_po_map')
        .delete()
        .match({ peo: el.peo, po: el.po });
    } else {
      //Add
      const { data, error } = await supabase
        .from('peo_po_map')
        .insert([{ peo: el.peo, po: el.po }]);
    }
    loadPivotData();
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headerMap.map((el) => (
              <th key={el.key}>{el.text}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {dataMap.map((el) => (
            <tr key={el.key}>
              <td>{el.text}</td>
              {el.rows.map((row) => (
                <td
                  className='map'
                  key={row.key}
                  onClick={() => {
                    toggleMap(row);
                  }}
                >
                  {row.text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

function processRowData(pivotData: peoPivot[], peo: peo[]): dataMap[] {
  const data: peoPivot[] = peo.map((el) => {
    const match = pivotData.find((pd) => pd.peo === el.peo);
    return {
      peo: el.peo,
      po_group: match ? match.po_group : [],
      des_en: el.des_en,
      des_th: el.des_th,
    };
  });

  const allPo = [...Array(11).keys()].map((el) => el + 1);

  const rowsTemplate: rowsTemplate[] = allPo.map((po) => {
    return {
      key: '',
      text: '',
      peo: null,
      po: po,
      isMap: false,
    };
  });

  const dataMap: dataMap[] = data.map((el) => {
    let rows: rowsTemplate[] = JSON.parse(JSON.stringify(rowsTemplate));
    rows = rows.map((row) => {
      const isMap = el.po_group.includes(row.po) ? true : false;
      return {
        ...row,
        key: `peo-${el.peo}_po-${row.po}`,
        peo: el.peo,
        text: isMap ? '✅' : '',
        isMap,
      };
    });

    return {
      ...el,
      key: `peo-${el.peo}`,
      text: `PEO-${el.peo}`,
      rows,
    };
  });

  return dataMap;
}

function getHeaderData() {
  let allPo = [...Array(11).keys()].map((el) => el + 1);
  let headers: headerMap[] = allPo.map((po) => {
    return {
      text: `PO-${po}`,
      key: `po-${po}`,
    };
  });
  headers.unshift({
    text: 'PEO',
    key: 'peo',
  });
  return headers;
}
