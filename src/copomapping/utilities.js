export function processRowData(pivotData) {
  const data = pivotData.map((el) => {
    return {
      ...el,
      json: el.json_object_agg || [],
    };
  });

  const allPo = [...Array(11).keys()].map((el) => el + 1);
  const rowsTemplate = allPo.map((po) => {
    return {
      key: '',
      text: '',
      co: null,
      po: po,
      isMap: false,
      course_id: '',
    };
  });

  const dataMap = data.map((el) => {
    let rows = JSON.parse(JSON.stringify(rowsTemplate));

    rows = rows.map((row) => {
      const json = el.json;
      const po = row.po;
      const co = json[po] || [];
      const isMap = co.length !== 0 ? true : false;
      const co2 = co.map((el) => `CO-${el}`);
      const text = co2.join(', ');

      // console.log({ json, po, co, text });

      return {
        ...row,
        key: `${text}_po-${po}`,
        text,
        co,
        isMap,
        course_id: el.course_id,
      };
    });

    return {
      ...el,
      key: `${el.course_id}`,
      text: `${el.course_id}`,
      rows,
    };
  });

  return dataMap;
}

export function getHeaderData() {
  let allPo = [...Array(11).keys()].map((el) => el + 1);
  let headers = allPo.map((po) => {
    return {
      text: `PO-${po}`,
      key: `po-${po}`,
    };
  });
  headers.unshift({
    text: 'CO',
    key: 'co',
  });
  return headers;
}
