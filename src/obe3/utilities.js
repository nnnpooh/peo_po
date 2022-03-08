export function processRowData(pivotData, numCo, poList) {
  const data = pivotData.map((el) => {
    return {
      ...el,
      co_group: el.co_group || [],
    };
  });

  const allCo = [...Array(numCo).keys()].map((el) => (el + 1).toString());
  const rowsTemplate = allCo.map((co) => {
    return {
      key: '',
      text: '',
      po: null,
      co: co,
      isMap: false,
      course_id: '',
    };
  });

  const dataMap = data.map((el) => {
    let rows = JSON.parse(JSON.stringify(rowsTemplate));
    const poFilt = poList.find((po) => po.po.toString() == el.po);

    rows = rows.map((row) => {
      const isMap = el.co_group.includes(row.co) ? true : false;
      return {
        ...row,
        key: `po-${el.po}_co-${row.co}`,
        po: el.po,
        text: isMap ? '✓' : '',
        isMap,
        course_id: el.course_id,
      };
    });

    return {
      ...el,
      key: `po-${el.po}`,
      text: `PO-${el.po}`,
      rows,
      des_th: poFilt?.des_th || '',
      des_en: poFilt?.des_en || '',
    };
  });

  return dataMap;
}

export function fillAllPO(dataIn, currentCourse) {
  let data = JSON.parse(JSON.stringify(dataIn));
  const poArray = data.map((el) => el.po);
  const allPoArray = [...Array(11).keys()].map((el) => (el + 1).toString());
  const filtArray = allPoArray.filter((el) => !poArray.includes(el));
  filtArray.forEach((po) => {
    data.push({
      course_id: currentCourse,
      po: po,
      co_group: [],
    });
  });
  return data.sort((a, b) => (parseInt(b.po) < parseInt(a.po) ? 1 : -1));
}

export function getHeaderData(numCo) {
  let allCo = [...Array(numCo).keys()].map((el) => el + 1);
  let headers = allCo.map((co) => {
    return {
      text: `CO-${co}`,
      key: `co-${co}`,
    };
  });
  headers.unshift({
    text: 'PO',
    key: 'po',
  });
  return headers;
}
