import logo from './logo.svg';
import './App.css';
import supabase from './db'
import { React, useEffect, useState, Fragment } from 'react';
import Readonly from './Readonly'
import Edittablerow from './Edittablerow'

function App() {

  const [peopoMapping, setMappingpeopo] = useState([])

  const [peoNumber, setpeoNumber] = useState('')
  const [poNumber, setpoNumber] = useState('')
  const [editIdpeopo, setEditidpeopo] = useState('')
  const [editNumpeo, setEditpeonum] = useState('')
  const [editNumpo, setEditponum] = useState('')


  async function loadData() {
    let { data } = await supabase.from('peo_po_mapping').select('*')
    setMappingpeopo(data);
  }

  useEffect(() => {
    loadData()
  }, []);

  function handlePeo(event) {
    setpeoNumber(event.target.value)
  }

  function handlePo(event) {
    setpoNumber(event.target.value)
  }

  function handleeditPeo(event) {
    setEditpeonum(event.target.value)
  }

  function handleeditPo(event) {
    setEditponum(event.target.value)
  }

  async function submitNumberpeopo(event) {
    event.preventDefault();
    if (peoNumber !== '' && poNumber !== '') {
      const dataRow = {
        peo_number: peoNumber,
        po_number: poNumber
      };

      const { data, error } = await supabase.from('peo_po_mapping').insert([dataRow]);
      loadData();

      setpeoNumber('');
      setpoNumber('')
    }
  }

  const handleEditclick = (event, peopoMapping) => {
    event.preventDefault();

    setEditidpeopo(peopoMapping.id)
    setEditpeonum(peopoMapping.peo_number)
    setEditponum(peopoMapping.po_number)

  }

  async function summitEditnumber() {
    const { data, error } = await supabase
      .from('peo_po_mapping')
      .update({ peo_number: editNumpeo, po_number: editNumpo })
      .eq('id', editIdpeopo)

    await loadData();

    setpeoNumber('');
    setpoNumber('')

  }

  async function handleRemove() {
    const { data, error } = await supabase
      .from('peo_po_mapping')
      .delete(editIdpeopo)

    await loadData()
  }


  return (
    <div className='App'>
      <table>
        <thead>
          <tr>
            <th>PEO Number</th>
            <th>PO Number</th>
            <th>Edit/Remove</th>
          </tr>
        </thead>

        <tbody>
          {peopoMapping.map((peopoMapping) => (
            <Fragment>
              {editIdpeopo === peopoMapping.id ? (
                <Edittablerow
                  peopoMapping={peopoMapping}
                  editNumpeo={editNumpeo}
                  editNumpo={editNumpo}
                  handleeditPeo={handleeditPeo}
                  handleeditPo={handleeditPo}
                  summitEditnumber={summitEditnumber}
                />
              ) : (
                <Readonly
                  peopoMapping={peopoMapping}
                  handleEditclick={handleEditclick}
                  handleRemove={handleRemove} />
              )}
            </Fragment>
          ))}
        </tbody>

      </table>
      <h2>Add PEO-PO Number</h2>
      <select htmlFor='peo_number'
        id='peo_number'
        value={peoNumber}
        onChange={handlePeo}>
        <option disable select value=""></option>
        <option value='peo1'>peo1</option>
        <option value='peo2'>peo2</option>
        <option value='peo3'>peo3</option>
        <option value='peo4'>peo4</option>
      </select>


      <select htmlFor='po_number'
        id='po_number'
        value={poNumber}
        onChange={handlePo}>
        <option disable select value=""></option>
        <option value='po1'>po1</option>
        <option value='po2'>po2</option>
        <option value='po3'>po3</option>
        <option value='po4'>po4</option>
        <option value='po5'>po5</option>
        <option value='po6'>po6</option>
        <option value='po7'>po7</option>
        <option value='po8'>po8</option>
        <option value='po9'>po9</option>
        <option value='po10'>po10</option>
        <option value='po11'>po11</option>
      </select>

      <button type='submit' onClick={submitNumberpeopo} >Add PEO-PO</button>


    </div >
  );
}

export default App;
