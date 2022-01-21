const pivotData = [
  {
    id: 1,
    des_th: 'ฟหกฟห',
    des_en: 'abc',
    peo: 1,
    po_group: [4, 5],
  },
  {
    id: 2,
    des_th: 'asd',
    des_en: 'asddsad',
    peo: 2,
    po_group: [10],
  },
  {
    id: 3,
    des_th: 'asdsad',
    des_en: 'asdsad',
    peo: 3,
    po_group: null,
  },
];

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

console.log(dataMap);
