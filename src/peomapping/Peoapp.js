import './Peoapp.css';
import supabase from '../db'
import { React, useEffect, useState, Fragment } from 'react';
import Edittablerow from './Edittablerow'
import Peoaddmodal from './Addpeodetail'
import Peointmodal from './Peointmodal';

function Peoapp() {

  const [peoMapping, setMappingpeo] = useState([])

  const [peoNumber, setpeoNumber] = useState('')
  const [peoDesthai, setpeoDesthai] = useState('')
  const [peoDeseng, setpeoDeseng] = useState('')

  const [editIdpeo, seteditIdpeo] = useState('')
  const [editpeoNumber, setEditpeonum] = useState('')
  const [editDesthai, setEditdesthai] = useState('')
  const [editDeseng, setEditdeseng] = useState('')

  const [openpeoModal, setOpenpeomodal] = useState(false)
  const [openintModal, setOpenintmodal] = useState(false)

  const [editMode, setEditmode] = useState(false)

  async function loadData() {
    let { data } = await supabase.from('peo').select('*')
    setMappingpeo(data);
  }

  useEffect(() => {
    loadData()
  }, []);

  function handlepeoNumber(event) {
    setpeoNumber(event.target.value)
  }

  function handleDesthai(event) {
    setpeoDesthai(event.target.value)
  }

  function handleDeseng(event) {
    setpeoDeseng(event.target.value)
  }

  function handleEditpeoNumber(event) {
    setEditpeonum(event.target.value)
  }

  function handleeditDesthai(event) {
    setEditdesthai(event.target.value)
  }

  function handleeditDeseng(event) {
    setEditdeseng(event.target.value)
  }

  async function submitNumberpeo(event) {
    event.preventDefault();
    if (peoNumber !== '' && peoDesthai !== '' && peoDeseng !== '') {
      const dataRow = {
        peo: peoNumber,
        des_th: peoDesthai,
        des_en: peoDeseng
      };

      const { data, error } = await supabase.from('peo').insert([dataRow]);
      loadData();

      setpeoNumber('')
      setpeoDesthai('');
      setpeoDeseng('')
    }
  }

  async function handleEditclick(id) {
    setEditmode(true);
    let { data: peoMapping, error } = await supabase
      .from('peo')
      .select('*')
      .eq('id', id)

    const peoData = peoMapping[0]

    seteditIdpeo(peoData.id)

    setEditpeonum(peoData.peo)
    setEditdesthai(peoData.des_th)
    setEditdeseng(peoData.des_en)

  }

  async function summitEditnumber() {
    const { data, error } = await supabase
      .from('peo')
      .update({ peo: editpeoNumber, des_th: editDesthai, des_en: editDeseng })
      .eq('id', editIdpeo)

    await loadData();

    seteditIdpeo('')
    setEditpeonum('')
    setEditdesthai('');
    setEditdeseng('')

    setEditmode(false)
  }

  async function handleRemove(id) {
    const { data, error } = await supabase
      .from('peo')
      .delete()
      .eq('id', id)

    await loadData()
  }


  return (

    <div className='peoapp-container'>

      <div className='title'>
        <h1>Program Education Objective Detail</h1>
      </div>

      <div className='peointapp'>

        <button
          onClick={() => {
            setOpenintmodal(true)
          }} > Instruction </button>
        {openintModal && <Peointmodal
          closeintModal={setOpenintmodal} />}



        <br />

        <div className='peoapp' >
          <button className='openModalBtn'
            onClick={() => {
              setOpenpeomodal(true)
            }} >Add PEO Detail</button>
          {openpeoModal && <Peoaddmodal
            closepeoModal={setOpenpeomodal}
            peoMapping={peoMapping}
            peoNumber={peoNumber}
            peoDesthai={peoDesthai}
            peoDeseng={peoDeseng}
            handlepeoNumber={handlepeoNumber}
            handleDesthai={handleDesthai}
            handleDeseng={handleDeseng}
            submitNumberpeo={submitNumberpeo}

          />}

          <br />

          <table>
            <thead>
              <tr>
                <th>PEO Number</th>
                <th>PEO Description Thai</th>
                <th>PEO Description English</th>
                <th>Edit/Remove</th>
              </tr>
            </thead>

            <tbody>
              {peoMapping.map((peoMapping) => (
                <Fragment>
                  {editIdpeo === peoMapping.id ? (
                    <Edittablerow
                      peoMapping={peoMapping}
                      editpeoNumber={editpeoNumber}
                      editDesthai={editDesthai}
                      editDeseng={editDeseng}
                      handleEditpeoNumber={handleEditpeoNumber}
                      handleeditDesthai={handleeditDesthai}
                      handleeditDeseng={handleeditDeseng}
                      summitEditnumber={summitEditnumber}
                    />
                  ) : (
                    <tr>
                      <td>
                        {peoMapping.peo}
                      </td>
                      <td>
                        {peoMapping.des_th}
                      </td>
                      <td>
                        {peoMapping.des_en}
                      </td>
                      <td>
                        <button type="button" onClick={() => handleEditclick(peoMapping.id)} >
                          Edit
                        </button>

                        <button type="button" onClick={() => { handleRemove(peoMapping.id) }} >
                          Remove
                        </button>

                      </td>
                    </tr >
                  )}
                </Fragment>
              ))}
            </tbody>

          </table>

        </div>
      </div >
    </div >
  );
}

export default Peoapp;
