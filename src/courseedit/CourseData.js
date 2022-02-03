import './Coursedata.css';
import { React, useState, useEffect, Fragment } from 'react';
import Courseintmodal from './Courseint';
import supabase from '../db';
import Edittablerow from './Edittablerow';
import Modal2 from './Addcoursebutton'


function Coursedata() {

  const [courseDetail, setcourseDetail] = useState([])

  const [addCourseid, setAddcourseid] = useState('')
  const [addCoursenamethai, setAddcoursenamethai] = useState('')
  const [addCoursenameeng, setAddcoursenameeng] = useState('')
  const [addCourseyear, setAddcourseyear] = useState('')
  const [addCoursesems, setAddcoursesems] = useState('')
  const [addCoursetype, setAddcoursetype] = useState('')
  const [addCoursecre, setAddcoursecre] = useState('')
  const [addCoursecredes, setAddcoursecredes] = useState('')
  const [addCoursepre, setAddcoursepre] = useState('')
  const [addCoursedesthai, setAddcoursedesthai] = useState('')
  const [addCoursedeseng, setAddcoursedeseng] = useState('')

  const [editCourse, setEditcourseid] = useState('')
  const [editCourseid, setCourseid] = useState('')
  const [editCoursenamethai, setCoursenamethai] = useState('')
  const [editCoursenameeng, setCoursenameeng] = useState('')
  const [editCourseyear, setCourseyear] = useState('')
  const [editCoursesems, setCoursesems] = useState('')
  const [editCoursetype, setCoursetype] = useState('')
  const [editCoursecre, setCoursecre] = useState('')
  const [editCoursecredes, setCoursecredes] = useState('')
  const [editCoursepre, setCoursepre] = useState('')
  const [editCoursedesthai, setCoursedesthai] = useState('')
  const [editCoursedeseng, setCoursedeseng] = useState('')

  const [openModal, setOpenmodal] = useState(false)
  const [openCourseintmodal, setopenCourseintmodal] = useState(false)
  const [editMode, setEditmode] = useState(false)

  async function handleEditclick(id) {
    setEditmode(true);
    let { data: courseDetail, error } = await supabase
      .from('course_details')
      .select('*')
      .eq('id', id);

    const courseData = courseDetail[0];

    setEditcourseid(courseData.id)
    setCourseid(courseData.course_id)
    setCoursenamethai(courseData.course_namethai)
    setCoursenameeng(courseData.course_nameeng)
    setCourseyear(courseData.year)
    setCoursesems(courseData.semester)
    setCoursetype(courseData.course_type)
    setCoursecre(courseData.course_credit)
    setCoursecredes(courseData.credit_detail)
    setCoursepre(courseData.pre_course)
    setCoursedesthai(courseData.des_thai)
    setCoursedeseng(courseData.des_eng)

  }

  async function submitEditcourse() {
    const { data, error } = await supabase
      .from('course_details')
      .update({
        course_id: editCourseid, course_namethai: editCoursenamethai, course_nameeng: editCoursenameeng,
        year: editCourseyear, semester: editCoursesems, course_type: editCoursetype, course_credit: editCoursecre,
        credit_detail: editCoursecredes, pre_course: editCoursepre, des_thai: editCoursedesthai, des_eng: editCoursedeseng
      })
      .eq('id', editCourse)

    await loadData()

    setEditcourseid('')
    setCourseid('')
    setCoursenamethai('')
    setCoursenameeng('')
    setCourseyear('')
    setCoursesems('')
    setCoursetype('')
    setCoursecre('')
    setCoursecredes('')
    setCoursepre('')
    setCoursedesthai('')
    setCoursedeseng('')

    setEditmode(false)

  }

  async function Addcoursedata(event) {
    event.preventDefault();
    if (addCourseid !== '' && addCoursenamethai !== '' && addCoursenameeng !== '' &&
      addCourseyear !== '' && addCoursesems !== '' && addCoursetype !== '' && addCoursecre !== '' &&
      addCoursecredes !== '' && addCoursepre !== '' && addCoursedesthai !== '' && addCoursedeseng !== '') {
      const dataRow = {
        course_id: addCourseid,
        course_namethai: addCoursenamethai,
        course_nameeng: addCoursenameeng,
        year: addCourseyear,
        semester: addCoursesems,
        course_type: addCoursetype,
        course_credit: addCoursecre,
        credit_detail: addCoursecredes,
        pre_course: addCoursepre,
        des_thai: addCoursedesthai,
        des_eng: addCoursedeseng
      }

      const { data, error } = await supabase.from('course_details').insert([dataRow])

      loadData();

      setAddcourseid('')
      setAddcoursenamethai('')
      setAddcoursenameeng('')
      setAddcourseyear('')
      setAddcoursesems('')
      setAddcoursetype('')
      setAddcoursecre('')
      setAddcoursecredes('')
      setAddcoursepre('')
      setAddcoursedesthai('')
      setAddcoursedeseng('')
    }
  }

  function handleCourseid(event) {
    setAddcourseid(event.target.value)
  }


  function handleCoursenamethai(event) {
    setAddcoursenamethai(event.target.value)
  }


  function handleCoursenameeng(event) {
    setAddcoursenameeng(event.target.value)
  }


  function handleCourseyear(event) {
    setAddcourseyear(event.target.value)
  }


  function handleCoursesems(event) {
    setAddcoursesems(event.target.value)
  }


  function handleCoursetype(event) {
    setAddcoursetype(event.target.value)
  }


  function handleCoursecre(event) {
    setAddcoursecre(event.target.value)
  }


  function handleCoursecredes(event) {
    setAddcoursecredes(event.target.value)
  }


  function handleCoursepre(event) {
    setAddcoursepre(event.target.value)
  }


  function handleCoursedesthai(event) {
    setAddcoursedesthai(event.target.value)
  }

  function handleCoursedeseng(event) {
    setAddcoursedeseng(event.target.value)
  }

  function handleEditcourseid(event) {
    setCourseid(event.target.value)
  }

  function handleEditcoursenamethai(event) {
    setCoursenamethai(event.target.value)
  }

  function handleEditcoursenameeng(event) {
    setCoursenameeng(event.target.value)
  }

  function handleEditcourseyear(event) {
    setCourseyear(event.target.value)
  }

  function handleEditcoursesems(event) {
    setCoursesems(event.target.value)
  }

  function handleEditcoursetype(event) {
    setCoursetype(event.target.value)
  }

  function handleEditcoursecre(event) {
    setCoursecre(event.target.value)
  }

  function handleEditcoursecredes(event) {
    setCoursecredes(event.target.value)
  }

  function handleEditcoursepre(event) {
    setCoursepre(event.target.value)
  }

  function handleEditcoursedesthai(event) {
    setCoursedesthai(event.target.value)
  }

  function handleEditcoursedeseng(event) {
    setCoursedeseng(event.target.value)
  }


  async function loadData() {
    let { data } = await supabase.from('course_details').select('*')
    setcourseDetail(data);
  }

  useEffect(() => {
    loadData()
  }, []);


  async function handleDelete(id) {
    const { data, error } = await supabase
      .from('course_details')
      .delete()
      .eq('id', id)

    await loadData()
  }

  return (

    <div className='coursedataapp-container'>

      <div className='title'>
        <h1>Course Detail</h1>
      </div>

      <div className='coursedataintapp'>
        <button
          onClick={() => {
            setopenCourseintmodal(true)
          }}>Instruction</button>
        {openCourseintmodal && <Courseintmodal
          closeintModal={setopenCourseintmodal} />}



        <br />


        <div className='coursedataapp'>
          <button
            className='openModalBtn'
            onClick={() => {
              setOpenmodal(true)
            }} > Add Course Detail </button>
          {openModal && <Modal2 closeModal={setOpenmodal}
            courseDetail={courseDetail}
            Addcoursedata={Addcoursedata}
            addCourseid={addCourseid}
            addCoursenamethai={addCoursenamethai}
            addCoursenameeng={addCoursenameeng}
            addCourseyear={addCourseyear}
            addCoursesems={addCoursesems}
            addCoursetype={addCoursetype}
            addCoursecre={addCoursecre}
            addCoursecredes={addCoursecredes}
            addCoursepre={addCoursepre}
            addCoursedesthai={addCoursedesthai}
            addCoursedeseng={addCoursedeseng}

            handleCourseid={handleCourseid}
            handleCoursenamethai={handleCoursenamethai}
            handleCoursenameeng={handleCoursenameeng}
            handleCourseyear={handleCourseyear}
            handleCoursesems={handleCoursesems}
            handleCoursetype={handleCoursetype}
            handleCoursecre={handleCoursecre}
            handleCoursecredes={handleCoursecredes}
            handleCoursepre={handleCoursepre}
            handleCoursedesthai={handleCoursedesthai}
            handleCoursedeseng={handleCoursedeseng}

          />}
        </div>

        <br />

        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name Thai</th>
                <th>Course Name English</th>
                <th>Year</th>
                <th>Sesmester</th>
                <th>Course Type</th>
                <th>Course Credit</th>
                <th>Course Credit Detail</th>
                <th>Pre Course</th>
                <th>Course Descrption Thai</th>
                <th>Course Descrption English</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
              {courseDetail.map((courseDetail) => (
                <Fragment>
                  {editCourse === courseDetail.id ? (

                    <Edittablerow
                      courseDetail={courseDetail}
                      editCourseid={editCourseid}
                      editCoursenamethai={editCoursenamethai}
                      editCoursenameeng={editCoursenameeng}
                      editCourseyear={editCourseyear}
                      editCoursesems={editCoursesems}
                      editCoursetype={editCoursetype}
                      editCoursecre={editCoursecre}
                      editCoursecredes={editCoursecredes}
                      editCoursepre={editCoursepre}
                      editCoursedesthai={editCoursedesthai}
                      editCoursedeseng={editCoursedeseng}
                      handleEditcourseid={handleEditcourseid}
                      handleEditcoursenamethai={handleEditcoursenamethai}
                      handleEditcoursenameeng={handleEditcoursenameeng}
                      handleEditcourseyear={handleEditcourseyear}
                      handleEditcoursesems={handleEditcoursesems}
                      handleEditcoursetype={handleEditcoursetype}
                      handleEditcoursecre={handleEditcoursecre}
                      handleEditcoursecredes={handleEditcoursecredes}
                      handleEditcoursepre={handleEditcoursepre}
                      handleEditcoursedesthai={handleEditcoursedesthai}
                      handleEditcoursedeseng={handleEditcoursedeseng}

                      submitEditcourse={submitEditcourse}
                    />) : (


                    <tr>
                      <td>
                        {courseDetail.course_id}
                      </td>
                      <td>
                        {courseDetail.course_namethai}
                      </td>
                      <td>
                        {courseDetail.course_nameeng}
                      </td>
                      <td>
                        {courseDetail.year}
                      </td>
                      <td>
                        {courseDetail.semester}
                      </td>
                      <td>
                        {courseDetail.course_type}
                      </td>
                      <td>
                        {courseDetail.course_credit}
                      </td>
                      <td>
                        {courseDetail.credit_detail}
                      </td>
                      <td>
                        <text>{courseDetail.pre_course}</text>
                      </td>
                      <td>
                        <text>{courseDetail.des_thai}</text>
                      </td>
                      <td>
                        <text>{courseDetail.des_eng}</text>
                      </td>
                      <td>
                        <button type='button' onClick={() => handleEditclick(courseDetail.id)}> Edit</button>
                        <button onClick={() => { handleDelete(courseDetail.id) }}>Delete</button>
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

  )

}


export default Coursedata;
