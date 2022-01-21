const data = [
  {
    peo: 1,
    po_group: [11, 3],
    des_en: 'AAA',
    des_th: 'BBBB',
  },
  {
    peo: 2,
    po_group: [6, 7],
    des_en: 'AAAA',
    des_th: 'BBBB',
  },
  {
    peo: 3,
    po_group: [1, 2],
    des_en: 'AAAAA',
    des_th: 'BBBBBB',
  },
];

interface rowsTemplate {
  key: string;
  peo: number | null;
  po: number;
  isMap: boolean;
}

interface dataMap {
  key: string;
  peo: number;
  po_group: number[];
  des_en: string;
  des_th: string;
  rows: rowsTemplate[];
}
// Create array of 1 to 11
const allPo = [...Array(11).keys()].map((el) => el + 1);
const rowsTemplate: rowsTemplate[] = allPo.map((po) => {
  return {
    key: '',
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
      key: `peo-${el.peo}_po-${row.po}`,
      peo: el.peo,
      isMap: el.po_group.includes(row.po) ? true : false,
    };
  });

  console.log(rows);
  return {
    ...el,
    key: `peo-${el.peo}`,
    rows,
  };
});

// console.log(dataMap);

export {};
