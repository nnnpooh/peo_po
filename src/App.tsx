import supabase from './db';
import { useEffect, useState } from 'react';

interface peoPivotProperty {
  peo: number;
  po_group: number[];
}

function App() {
  const [peoPivot, setPeoPivot] = useState<peoPivotProperty[]>([]);

  useEffect(() => {
    async function loadData() {
      let { data: peo_po_pivot, error } = await supabase
        .from('peo_po_pivot')
        .select('*');

      if (peo_po_pivot) setPeoPivot(peo_po_pivot);
    }
    loadData();
  }, []);

  console.log(peoPivot);

  return <div className='App'></div>;
}

export default App;

function processData(data: peoPivotProperty[]) {
  return data;
}
