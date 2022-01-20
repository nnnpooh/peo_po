const data = [
  {
    id: 60,
    peo_number: 'peo3',
    po_number: 'po6',
  },
  {
    id: 61,
    peo_number: 'peo1',
    po_number: 'po5',
  },
  {
    id: 62,
    peo_number: 'peo3',
    po_number: 'po11',
  },
  {
    id: 63,
    peo_number: 'peo3',
    po_number: 'po11',
  },
];

const dataPEO = data.map((el) => el.peo_number);
console.log(dataPEO);
let dataPEOUnique = [...new Set(dataPEO)];
console.log(dataPEOUnique);

dataPEOUnique.forEach((PEO) => {
  let row = [];
});
