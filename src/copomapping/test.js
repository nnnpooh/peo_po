const pivotData = [
  {
    course_id: '255210',
    json_object_agg: {
      1: ['5'],
    },
  },
  {
    course_id: '255337',
    json_object_agg: {
      7: ['1'],
    },
  },
  {
    course_id: '255427',
    json_object_agg: {
      2: ['2'],
      3: ['2'],
      4: ['3'],
      7: ['3'],
    },
  },
  {
    course_id: '255499',
    json_object_agg: {
      1: ['3', '4'],
    },
  },
];

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

  rows.map((row) => {
    const json = el.json;
    const po = row.po;
    const co = json[po] || [];
    const isMap = co.length !== 0 ? true : false;
    const co2 = co.map((el) => `CO-${el}`);
    const text = co2.join(', ');

    // console.log({ json, po, co, text });

    return {
      ...row,
      key: `co-${text}_po-${po}`,
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

// console.log(data);
console.log(dataMap);
