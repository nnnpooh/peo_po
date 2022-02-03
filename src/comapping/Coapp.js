import './Coapp.css';
import supabase from '../db'
import { React, useEffect, useState, Fragment } from 'react';
import Edittablerow from './Edittablerow'
import Coaddmodal from './Addcodetail'
import Cointmodal from './Cointmodal';


function Coapp() {

  const [coMapping, setMappingco] = useState([])

  const [courseId, setcourseId] = useState('')
  const [coNumber, setcoNumber] = useState('')
  const [coDesthai, setcoDesthai] = useState('')
  const [coDeseng, setcoDeseng] = useState('')

  const [editIdco, seteditIdco] = useState('')
  const [editcourseId, setEditcourseid] = useState('')
  const [editcoNumber, setEditconum] = useState('')
  const [editDesthai, setEditdesthai] = useState('')
  const [editDeseng, setEditdeseng] = useState('')

  const [opencoModal, setopencoModal] = useState(false)
  const [opencointModal, setopencointModal] = useState(false)

  const [editMode, setEditmode] = useState(false)

  async function loadData() {
    let { data } = await supabase.from('co').select('*')
    setMappingco(data);
  }

  useEffect(() => {
    loadData()
  }, []);

  function handlecourseId(event) {
    setcourseId(event.target.value)
  }


  function handlecoNumber(event) {
    setcoNumber(event.target.value)
  }

  function handleDesthai(event) {
    setcoDesthai(event.target.value)
  }

  function handleDeseng(event) {
    setcoDeseng(event.target.value)
  }



  function handleEditcoNumber(event) {
    setEditconum(event.target.value)
  }

  function handleeditDesthai(event) {
    setEditdesthai(event.target.value)
  }

  function handleeditDeseng(event) {
    setEditdeseng(event.target.value)
  }

  async function submitNumberco(event) {
    event.preventDefault();
    if (coNumber !== '' && coDesthai !== '' && coDeseng !== '') {
      const dataRow = {
        co: coNumber,
        course_id: courseId,
        des_thai: coDesthai,
        des_eng: coDeseng
      };

      const { data, error } = await supabase.from('co').insert([dataRow]);
      loadData();

      setcoNumber('')
      setcourseId('')
      setcoDesthai('');
      setcoDeseng('')
    }
  }

  async function handleEditclick(id) {
    setEditmode(true);
    let { data: coMapping, error } = await supabase
      .from('co')
      .select('*')
      .eq('id', id)

    const coData = coMapping[0]

    seteditIdco(coData.id)

    setEditcourseid(coData.course_id)
    setEditconum(coData.co)
    setEditdesthai(coData.des_thai)
    setEditdeseng(coData.des_eng)

  }

  async function summitEditnumber() {
    const { data, error } = await supabase
      .from('co')
      .update({ course_id: editcourseId, co: editcoNumber, des_thai: editDesthai, des_eng: editDeseng })
      .eq('id', editIdco)

    await loadData();

    seteditIdco('')
    setEditcourseid('')
    setEditconum('')
    setEditdesthai('');
    setEditdeseng('')

    setEditmode(false)
  }

  async function handleRemove(id) {
    const { data, error } = await supabase
      .from('co')
      .delete()
      .eq('id', id)

    await loadData()
  }


  return (

    <div className='coapp-container'>

      <div className='title'>
        <h1> Course Outcome Detail</h1>
      </div>

      <div className='cointapp'>
        <button
          onClick={() => {
            setopencointModal(true)
          }} > Instruction </button>
        {opencointModal && <Cointmodal
          closeintModal={setopencointModal} />}



        <br />

        <div className='coapp'>
          <button className='openModalBtn'
            onClick={() => {
              setopencoModal(true)
            }} >Add CO Detail</button>
          {opencoModal && <Coaddmodal
            closecoModal={setopencoModal}
            coMapping={coMapping}
            courseId={courseId}
            coNumber={coNumber}
            coDesthai={coDesthai}
            coDeseng={coDeseng}
            handlecourseId={handlecourseId}
            handlecoNumber={handlecoNumber}
            handleDesthai={handleDesthai}
            handleDeseng={handleDeseng}
            submitNumberco={submitNumberco}

          />}

          <br />

          <div className='table'>

            <table>
              <thead>

                <tr>
                  <th>Course ID</th>
                  <th>CO Number</th>
                  <th>CO Description Thai</th>
                  <th>CO Description English</th>
                  <th>Edit/Remove</th>
                </tr>
              </thead>

              <tbody>
                {coMapping.map((coMapping) => (
                  <Fragment>
                    {editIdco === coMapping.id ? (
                      <Edittablerow
                        coMapping={coMapping}
                        editcoNumber={editcoNumber}
                        editDesthai={editDesthai}
                        editDeseng={editDeseng}
                        handleEditcoNumber={handleEditcoNumber}
                        handleeditDesthai={handleeditDesthai}
                        handleeditDeseng={handleeditDeseng}
                        summitEditnumber={summitEditnumber}
                      />
                    ) : (

                      <tr>
                        <td>
                          {coMapping.course_id}
                        </td>
                        <td>
                          {coMapping.co}
                        </td>
                        <td>
                          {coMapping.des_thai}
                        </td>
                        <td>
                          {coMapping.des_eng}
                        </td>
                        <td>
                          <button type="button" onClick={() => handleEditclick(coMapping.id)} >
                            Edit
                          </button>

                          <button type="button" onClick={() => { handleRemove(coMapping.id) }} >
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
      </div >
    </div >
  );
}

export default Coapp;
