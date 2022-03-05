import './Coapp.css';
import supabase from '../db';
import { React, useEffect, useState, Fragment } from 'react';
import Edittablerow from './Edittablerow';
import Coaddmodal from './Addcodetail';
import Cointmodal from './Cointmodal';
import { processRowData, getHeaderData } from './utilities';

function Coapp() {
  const [coMapping, setMappingco] = useState([]);

  const [courseId, setcourseId] = useState('');
  const [coNumber, setcoNumber] = useState('');
  const [coDesthai, setcoDesthai] = useState('');
  const [coDeseng, setcoDeseng] = useState('');
  const [colearnMethod, setcolearnMethod] = useState('')
  const [coevalMethod, setcoevalMethod] = useState('')

  const [editIdco, seteditIdco] = useState('');
  const [editcourseId, setEditcourseid] = useState('');
  const [editcoNumber, setEditconum] = useState('');
  const [editDesthai, setEditdesthai] = useState('');
  const [editDeseng, setEditdeseng] = useState('');
  const [editlearnMethod, setEditlearnmethod] = useState('')
  const [editevalMethod, setEditevalmethod] = useState('')

  const [opencoModal, setopencoModal] = useState(false);
  const [opencointModal, setopencointModal] = useState(false);

  const [editMode, setEditmode] = useState(false);

  const [coPoPivot, setCoPoPivot] = useState([]);
  const [currentCourse, setCurrentCourse] = useState('');
  const [courseDetails, setCourseDetails] = useState([]);

  async function loadData() {
    let { data } = await supabase.from('co').select('*');
    setMappingco(data);

    let { data: co_po_pivot, error } = await supabase
      .from('nr_co_po_pivot_single')
      .select('*');
    if (co_po_pivot) setCoPoPivot(co_po_pivot);

    let { data: course_details, error: error2 } = await supabase
      .from('course_details')
      .select('*');
    if (course_details) setCourseDetails(course_details);
  }

  async function toggleMap(el) {
    if (el.isMap) {
      //Remove row in peo_po_map table
      const { data, error } = await supabase
        .from('co_po_map')
        .delete()
        .match({ course_id: el.course_id, co: el.co, po: el.po });
    } else {
      //Add row in peo_po_map table
      const { data, error } = await supabase
        .from('co_po_map')
        .insert([{ course_id: el.course_id, co: el.co, po: el.po }]);
    }
    loadData();
  }

  useEffect(() => {
    loadData();
  }, []);

  let coList = coMapping.filter((el) => el.course_id === currentCourse);
  coList.sort((a, b) => (b.co < a.co ? 1 : -1));
  const coListTrans = coList.map((el) => ({
    co: el.co,
    course_id: el.course_id,
    po_group: [],
  }));

  const dataMapCoList = processRowData(coListTrans);
  const coPoPivotFilter = coPoPivot.filter(
    (el) => el.course_id === currentCourse
  );

  const dataMap = processRowData(coPoPivotFilter);
  const headers = getHeaderData();

  let dataMapCombined = [];
  if (dataMap.length === 0) {
    dataMapCombined = dataMapCoList.slice(0);
  } else {
    dataMapCombined = dataMap.slice(0);
    dataMapCoList.forEach((el1) => {
      const list = dataMap.map((el2) => el2.co);
      console.log({ list, co: el1.co, bool: !list.includes(el1.co) });
      if (!list.includes(el1.co)) dataMapCombined.push(el1);
    });
  }

  dataMapCombined = dataMapCombined.sort((a, b) => (a.co > b.co ? 1 : -1));
  console.log({
    dataMapCoList,
    dataMap,
    dataMapCombined,
  });

  function handlecourseId(event) {
    setcourseId(event.target.value);
  }

  function handlecoNumber(event) {
    setcoNumber(event.target.value);
  }

  function handleDesthai(event) {
    setcoDesthai(event.target.value);
  }

  function handleDeseng(event) {
    setcoDeseng(event.target.value);
  }

  function handleLearnmethod(event) {
    setcolearnMethod(event.target.value)
  }

  function handleEvalmethod(event) {
    setcoevalMethod(event.target.value)
  }

  function handleEditcoNumber(event) {
    setEditconum(event.target.value);
  }

  function handleeditDesthai(event) {
    setEditdesthai(event.target.value);
  }

  function handleeditDeseng(event) {
    setEditdeseng(event.target.value);
  }

  function handleEditlearnmethod(event) {
    setEditlearnmethod(event.target.value)
  }

  function handleEditevalmethod(event) {
    setEditevalmethod(event.target.value)
  }

  async function submitNumberco(event) {
    event.preventDefault();
    if (coNumber !== '' && coDesthai !== '' && coDeseng !== '') {
      const dataRow = {
        co: coNumber,
        course_id: currentCourse,
        des_thai: coDesthai,
        des_eng: coDeseng,
        learning_method: colearnMethod,
        eval_method: coevalMethod
      };

      const { data, error } = await supabase.from('co').insert([dataRow]);
      loadData();

      setcoNumber('');
      setcourseId('');
      setcoDesthai('');
      setcoDeseng('');
      setcolearnMethod('')
      setcoevalMethod('')

      loadData();
    }
  }

  async function handleEditclick(id) {
    setEditmode(true);
    let { data: coMapping, error } = await supabase
      .from('co')
      .select('*')
      .eq('id', id);

    const coData = coMapping[0];

    seteditIdco(coData.id);

    setEditcourseid(coData.course_id);
    setEditconum(coData.co);
    setEditdesthai(coData.des_thai);
    setEditdeseng(coData.des_eng);
    setEditlearnmethod(coData.learning_method)
    setEditevalmethod(coData.eval_method)
  }

  async function summitEditnumber() {
    const { data, error } = await supabase
      .from('co')
      .update({
        course_id: editcourseId,
        co: editcoNumber,
        des_thai: editDesthai,
        des_eng: editDeseng,
        learning_method: editlearnMethod,
        eval_method: editevalMethod
      })
      .eq('id', editIdco);

    await loadData();

    seteditIdco('');
    setEditcourseid('');
    setEditconum('');
    setEditdesthai('');
    setEditdeseng('');

    setEditmode(false);
  }

  async function handleRemove(id) {
    const { data, error } = await supabase.from('co').delete().eq('id', id);

    await loadData();
  }

  return (
    <div className='coapp-container'>
      <div className='title'>
        <h1> Course Outcome Detail</h1>
      </div>

      <div className='cointapp'>
        <button
          onClick={() => {
            setopencointModal(true);
          }}
        >
          {' '}
          Instruction{' '}
        </button>
        {opencointModal && <Cointmodal closeintModal={setopencointModal} />}

        <br />

        <div className='coapp'>
          <p>Select Course</p>
          <select
            onChange={(e) => setCurrentCourse(e.target.value)}
            style={{ marginBottom: '1rem' }}
          >
            <option disable select value=""> </option>
            {courseDetails.map((el) => (
              <option value={el.course_id}>{el.course_id}</option>
            ))}
          </select>
          <button
            className='openModalBtn'
            onClick={() => {
              setopencoModal(true);
            }}
          >
            Add CO Detail
          </button>
          {opencoModal && (
            <Coaddmodal
              closecoModal={setopencoModal}
              coMapping={coMapping}
              courseId={currentCourse}
              coNumber={coNumber}
              coDesthai={coDesthai}
              coDeseng={coDeseng}
              colearnMethod={colearnMethod}
              coevalMethod={coevalMethod}
              handlecourseId={handlecourseId}
              handlecoNumber={handlecoNumber}
              handleDesthai={handleDesthai}
              handleDeseng={handleDeseng}
              handleLearnmethod={handleLearnmethod}
              handleEvalmethod={handleEvalmethod}
              submitNumberco={submitNumberco}
            />
          )}

          <br />

          {coList.length !== 0 && (
            <div className='table'>
              <table>
                <thead>
                  <tr>
                    <th>Course ID</th>
                    <th>CO Number</th>
                    <th>CO Description Thai</th>
                    <th>CO Description English</th>
                    <th>CO Learning Method</th>
                    <th>CO Evaluation Method</th>
                    <th>Edit/Remove</th>
                  </tr>
                </thead>

                <tbody>
                  {coList.map((coMapping) => (
                    <Fragment>
                      {editIdco === coMapping.id ? (
                        <Edittablerow
                          coMapping={coMapping}
                          editcoNumber={editcoNumber}
                          editDesthai={editDesthai}
                          editDeseng={editDeseng}
                          editlearnMethod={editlearnMethod}
                          editevalMethod={editevalMethod}
                          handleEditcoNumber={handleEditcoNumber}
                          handleeditDesthai={handleeditDesthai}
                          handleeditDeseng={handleeditDeseng}
                          handleEditlearnmethod={handleEditlearnmethod}
                          handleEditevalmethod={handleEditevalmethod}
                          summitEditnumber={summitEditnumber}
                        />
                      ) : (
                        <tr>
                          <td>{coMapping.course_id}</td>
                          <td>{coMapping.co}</td>
                          <td>{coMapping.des_thai}</td>
                          <td>{coMapping.des_eng}</td>
                          <td>{coMapping.learning_method}</td>
                          <td>{coMapping.eval_method}</td>
                          <td>
                            <button
                              type='button'
                              onClick={() => handleEditclick(coMapping.id)}
                            >
                              Edit
                            </button>

                            <button
                              type='button'
                              onClick={() => {
                                handleRemove(coMapping.id);
                              }}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {dataMapCombined.length !== 0 && (
            <table style={{ marginTop: '1.5rem' }}>
              <thead>
                <tr>
                  {headers.map((el) => (
                    <th key={el.key}>{el.text}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {dataMapCombined.map((el) => (
                  <tr key={el.key}>
                    <td>{el.text}</td>
                    {el.rows.map((row) => (
                      <td
                        key={row.key}
                        className='map'
                        onClick={() => toggleMap(row)}
                      >
                        {row.text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coapp;