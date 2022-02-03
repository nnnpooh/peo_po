import './Poapp.css';
import supabase from '../db'
import { React, useEffect, useState, Fragment } from 'react';
import Edittablerow from './Edittablerow'
import Poaddmodal from './Addpodetail'
import Pointmodal from './Pointmodal';




function Poapp() {

  const [poMapping, setMappingpo] = useState([])

  const [poNumber, setpoNumber] = useState('')
  const [poTitle, setpoTitle] = useState('')
  const [poDesthai, setpoDesthai] = useState('')
  const [poDeseng, setpoDeseng] = useState('')

  const [editIdpo, seteditIdpo] = useState('')
  const [editpoNumber, setEditponum] = useState('')
  const [editpoTitle, seteditpoTitle] = useState('')
  const [editDesthai, setEditdesthai] = useState('')
  const [editDeseng, setEditdeseng] = useState('')

  const [openpoModal, setopenpoModal] = useState(false)
  const [openpointModal, setopenpointModal] = useState(false)


  const [editMode, setEditmode] = useState(false)

  async function loadData() {
    let { data } = await supabase.from('po').select('*')
    setMappingpo(data);
  }

  useEffect(() => {
    loadData()
  }, []);

  function handlepoNumber(event) {
    setpoNumber(event.target.value)
  }

  function handlepoTitle(event) {
    setpoTitle(event.target.value)
  }

  function handleDesthai(event) {
    setpoDesthai(event.target.value)
  }

  function handleDeseng(event) {
    setpoDeseng(event.target.value)
  }

  function handleEditpoNumber(event) {
    setEditponum(event.target.value)
  }

  function handleeditpoTitle(event) {
    seteditpoTitle(event.target.value)
  }

  function handleeditDesthai(event) {
    setEditdesthai(event.target.value)
  }

  function handleeditDeseng(event) {
    setEditdeseng(event.target.value)
  }

  async function submitNumberpo(event) {
    event.preventDefault();
    if (poNumber !== '' && poTitle !== '' && poDesthai !== '' && poDeseng !== '') {
      const dataRow = {
        po: poNumber,
        po_title: poTitle,
        des_th: poDesthai,
        des_en: poDeseng
      };

      const { data, error } = await supabase.from('po').insert([dataRow]);
      loadData();

      setpoNumber('')
      setpoDesthai('');
      setpoDeseng('')
    }
  }

  async function handleEditclick(id) {
    setEditmode(true);
    let { data: poMapping, error } = await supabase
      .from('po')
      .select('*')
      .eq('id', id)

    const poData = poMapping[0]

    seteditIdpo(poData.id)

    setEditponum(poData.po)
    seteditpoTitle(poData.po_title)
    setEditdesthai(poData.des_th)
    setEditdeseng(poData.des_en)

  }

  async function summitEditnumber() {
    const { data, error } = await supabase
      .from('po')
      .update({ po: editpoNumber, po_title: editpoTitle, des_th: editDesthai, des_en: editDeseng })
      .eq('id', editIdpo)

    await loadData();

    seteditIdpo('')
    setEditponum('')
    seteditpoTitle('')
    setEditdesthai('');
    setEditdeseng('')

    setEditmode(false)
  }

  async function handleRemove(id) {
    const { data, error } = await supabase
      .from('po')
      .delete()
      .eq('id', id)

    await loadData()
  }


  return (

    <div className='poapp-container'>

      <div className='title'>
        <h1> Program Outcome Detail</h1>
      </div>

      <div className='pointapp'>
        <button
          onClick={() => {
            setopenpointModal(true)
          }} > Instruction </button>
        {openpointModal && <Pointmodal
          closeintModal={setopenpointModal} />}


        <br />

        <div className='poapp'>
          <button className='openModalBtn'
            onClick={() => {
              setopenpoModal(true)
            }} >Add PO Detail</button>
          {openpoModal && <Poaddmodal
            closepoModal={setopenpoModal}
            poMapping={poMapping}
            poNumber={poNumber}
            poTitle={poTitle}
            poDesthai={poDesthai}
            poDeseng={poDeseng}
            handlepoNumber={handlepoNumber}
            handlepoTitle={handlepoTitle}
            handleDesthai={handleDesthai}
            handleDeseng={handleDeseng}
            submitNumberpo={submitNumberpo}

          />}

          <br />

          <table>
            <thead>
              <tr>
                <th>PO Number</th>
                <th>PO Title</th>
                <th>PO Description Thai</th>
                <th>PO Description English</th>
                <th>Edit/Remove</th>
              </tr>
            </thead>

            <tbody>
              {poMapping.map((poMapping) => (
                <Fragment>
                  {editIdpo === poMapping.id ? (
                    <Edittablerow
                      poMapping={poMapping}
                      editpoNumber={editpoNumber}
                      editpoTitle={editpoTitle}
                      editDesthai={editDesthai}
                      editDeseng={editDeseng}
                      handleEditpoNumber={handleEditpoNumber}
                      handleeditpoTitle={handleeditpoTitle}
                      handleeditDesthai={handleeditDesthai}
                      handleeditDeseng={handleeditDeseng}
                      summitEditnumber={summitEditnumber}
                    />
                  ) : (
                    <tr>
                      <td>
                        {poMapping.po}
                      </td>
                      <td>
                        {poMapping.po_title}
                      </td>
                      <td>
                        <text>{poMapping.des_th}</text>
                      </td>
                      <td>
                        <text>{poMapping.des_en}</text>
                      </td>
                      <td>
                        <button type="button" onClick={() => handleEditclick(poMapping.id)} >
                          Edit
                        </button>

                        <button type="button" onClick={() => { handleRemove(poMapping.id) }} >
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
      </div>
    </div>




  );
}

export default Poapp;
