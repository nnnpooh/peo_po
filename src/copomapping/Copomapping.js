import { useState, useEffect } from 'react';
import supabase from '../db';
export default function Copomapping() {
  const [data, setData] = useState([]);

  async function loadData() {
    let { data, error } = await supabase.from('nr_co_po_pivot').select('*');

    setData(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  console.log(data);
  return <div>here</div>;
}
