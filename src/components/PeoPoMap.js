import '../App.css';
import supabase from '../db';
import { useEffect, useState } from 'react';

export default function PeoPoMap() {
  const [peoPivot, setPeoPivot] = useState([]);

  async function loadPivotData() {
    let { data: peo_po_pivot, error } = await supabase
      .from('peo_po_pivot')
      .select('*');
    if (peo_po_pivot) setPeoPivot(peo_po_pivot);
  }

  useEffect(() => {
    loadPivotData();
  }, []);

  const dataMap = processRowData(peoPivot);
  const headers = getHeaderData();
  console.log({ dataMap, headers });

  async function toggleMap(el) {
    if (el.isMap) {
      //Remove row in peo_po_map table
      const { data, error } = await supabase
        .from('peo_po_map')
        .delete()
        .match({ peo: el.peo, po: el.po });
    } else {
      //Add row in peo_po_map table
      const { data, error } = await supabase
        .from('peo_po_map')
        .insert([{ peo: el.peo, po: el.po }]);
    }
    loadPivotData();
  }

  return (
    <div className='App'>
      <table>
        <thead>
          <tr>
            {headers.map((el) => (
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
                  key={row.key}
                  className='map'
                  onClick={() => toggleMap(row)}
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

function processRowData(pivotData) {
  const data = pivotData.map((el) => {
    return {
      ...el,
      po_group: el.po_group || [],
    };
  });

  const allPo = [...Array(11).keys()].map((el) => el + 1);

  const rowsTemplate = allPo.map((po) => {
    return {
      key: '',
      text: '',
      peo: null,
      po: po,
      isMap: false,
    };
  });

  const dataMap = data.map((el) => {
    let rows = JSON.parse(JSON.stringify(rowsTemplate));

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
  let headers = allPo.map((po) => {
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
