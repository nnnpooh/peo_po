import './Coursedata.css';
import { React, useState, useEffect, Fragment } from 'react';
import Courseintmodal from './Courseint';
import supabase from '../db';
import Edittablerow from './Edittablerow';
import Modal2 from './Addcoursebutton'
import { Link } from 'react-router-dom';


function Coursedata() {

  const [courseDetail, setcourseDetail] = useState([])

  const [addCourseid, setAddcourseid] = useState('')
  const [addCoursenamethai, setAddcoursenamethai] = useState('')
  const [addCoursenameeng, setAddcoursenameeng] = useState('')
  const [addLecthai, setAddlecthai] = useState('')
  const [addLeceng, setAddleceng] = useState('')
  const [addCourseyear, setAddcourseyear] = useState('')
  const [addCoursesems, setAddcoursesems] = useState('')
  const [addCoursetype, setAddcoursetype] = useState('')
  const [addCoursetypeeng, setAddcoursetypeeng] = useState('')
  const [addCoursecre, setAddcoursecre] = useState('')
  const [addCoursecredes, setAddcoursecredes] = useState('')
  const [addCoursepre, setAddcoursepre] = useState('')
  const [addCourseassesthai, setAddcourseassesthai] = useState('')
  const [addCourseteachmedthai, setAddcourseteachmedthai] = useState('')
  const [addCourseteachmedeng, setAddcourseteachmedeng] = useState('')
  const [addCoursevenue, setAddcoursevenue] = useState('')
  const [addCourseref, setAddcourseref] = useState('')
  const [addCourseaddref, setAddcourseaddref] = useState('')
  const [addCoursedesthai, setAddcoursedesthai] = useState('')
  const [addCoursedeseng, setAddcoursedeseng] = useState('')

  const [editCourse, setEditcourseid] = useState('')
  const [editCourseid, setCourseid] = useState('')
  const [editCoursenamethai, setCoursenamethai] = useState('')
  const [editCoursenameeng, setCoursenameeng] = useState('')
  const [editLecthai, setEditlecthai] = useState('')
  const [editLeceng, setEditleceng] = useState('')
  const [editCourseyear, setCourseyear] = useState('')
  const [editCoursesems, setCoursesems] = useState('')
  const [editCoursetype, setCoursetype] = useState('')
  const [editCoursecre, setCoursecre] = useState('')
  const [editCoursecredes, setCoursecredes] = useState('')
  const [editCoursepre, setCoursepre] = useState('')
  const [editCoursedesthai, setCoursedesthai] = useState('')
  const [editCoursedeseng, setCoursedeseng] = useState('')
  const [editCoursetypeeng, setEditcoursetypeeng] = useState('')
  const [editCourseasses, setEditcourseasses] = useState('')
  const [editTeachmedthai, setEditteachmedthai] = useState('')
  const [editTeachmedeng, setEditteachmedeng] = useState('')
  const [editVenue, setEditvenue] = useState('')
  const [editRef, setEditref] = useState('')
  const [editAddref, setEditaddref] = useState('')


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
    setEditlecthai(courseData.lec_thai)
    setEditleceng(courseData.lec_eng)
    setCourseyear(courseData.year)
    setCoursesems(courseData.semester)
    setCoursetype(courseData.course_type)
    setCoursecre(courseData.course_credit)
    setCoursecredes(courseData.credit_detail)
    setCoursepre(courseData.pre_course)
    setCoursedesthai(courseData.des_thai)
    setCoursedeseng(courseData.des_eng)
    setEditcoursetypeeng(courseData.course_typeeng)
    setEditcourseasses(courseData.assesment_thai)
    setEditteachmedthai(courseData.teachmed_thai)
    setEditteachmedeng(courseData.teachmed_eng)
    setEditvenue(courseData.venue_thai)
    setEditref(courseData.ref)
    setEditaddref(courseData.addref)

  }

  async function submitEditcourse() {
    const { data, error } = await supabase
      .from('course_details')
      .update({
        course_id: editCourseid, course_namethai: editCoursenamethai, course_nameeng: editCoursenameeng,
        year: editCourseyear, semester: editCoursesems, course_type: editCoursetype, course_credit: editCoursecre,
        credit_detail: editCoursecredes, pre_course: editCoursepre, des_thai: editCoursedesthai, des_eng: editCoursedeseng,
        lec_thai: editLecthai, lec_eng: editLeceng, course_typeeng: editCoursetypeeng, assesment_thai: editCourseasses,
        teachmed_thai: editTeachmedthai, teachmed_eng: editTeachmedeng, venue_thai: editVenue, ref: editRef, addref: editAddref
      })
      .eq('id', editCourse)

    await loadData()

    setEditcourseid('')
    setCourseid('')
    setCoursenamethai('')
    setCoursenameeng('')
    setEditlecthai('')
    setEditleceng('')
    setCourseyear('')
    setCoursesems('')
    setCoursetype('')
    setCoursecre('')
    setCoursecredes('')
    setCoursepre('')
    setCoursedesthai('')
    setCoursedeseng('')
    setEditcoursetypeeng('')
    setEditcourseasses('')
    setEditteachmedthai('')
    setEditteachmedeng('')
    setEditvenue('')
    setEditref('')
    setEditaddref('')

    setEditmode(false)

  }

  async function Addcoursedata(event) {
    event.preventDefault();
    if (addCourseid !== '' && addCoursenamethai !== '' && addCoursenameeng !== '' && addLecthai !== '' &&
      addLeceng !== '' && addCourseyear !== '' && addCoursesems !== '' && addCoursetype !== '' && addCoursetypeeng !== '' && addCoursecre !== '' &&
      addCoursecredes !== '' && addCoursepre !== '' && addCourseassesthai !== '' && addCourseteachmedthai !== '' && addCourseteachmedeng !== '' && addCoursedesthai !== '' && addCoursedeseng !== ''
      && addCoursevenue !== '' && addCourseref !== '' && addCourseaddref !== '') {
      const dataRow = {
        course_id: addCourseid,
        course_namethai: addCoursenamethai,
        course_nameeng: addCoursenameeng,
        lec_thai: addLecthai,
        lec_eng: addLeceng,
        year: addCourseyear,
        semester: addCoursesems,
        course_type: addCoursetype,
        course_typeeng: addCoursetypeeng,
        course_credit: addCoursecre,
        credit_detail: addCoursecredes,
        pre_course: addCoursepre,
        assesment_thai: addCourseassesthai,
        teachmed_thai: addCourseteachmedthai,
        teachmed_eng: addCourseteachmedeng,
        venue_thai: addCoursevenue,
        ref: addCourseref,
        addref: addCourseaddref,
        des_thai: addCoursedesthai,
        des_eng: addCoursedeseng

      }

      const { data, error } = await supabase.from('course_details').insert([dataRow])

      loadData();

      setAddcourseid('')
      setAddcoursenamethai('')
      setAddcoursenameeng('')
      setAddlecthai('')
      setAddleceng('')
      setAddcourseyear('')
      setAddcoursesems('')
      setAddcoursetype('')
      setAddcoursetypeeng('')
      setAddcoursecre('')
      setAddcoursecredes('')
      setAddcoursepre('')
      setAddcourseassesthai('')
      setAddcourseteachmedthai('')
      setAddcourseteachmedeng('')
      setAddcoursevenue('')
      setAddcourseref('')
      setAddcourseaddref('')
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

  function handleCourselecthai(event) {
    setAddlecthai(event.target.value)
  }

  function handleCourseleceng(event) {
    setAddleceng(event.target.value)
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

  function handleCoursetypeeng(event) {
    setAddcoursetypeeng(event.target.value)
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

  function handleCourseassesthai(event) {
    setAddcourseassesthai(event.target.value)
  }

  function handleCourseteachmedthai(event) {
    setAddcourseteachmedthai(event.target.value)
  }

  function handleCourseteachmedeng(event) {
    setAddcourseteachmedeng(event.target.value)
  }

  function handleCoursedesthai(event) {
    setAddcoursedesthai(event.target.value)
  }

  function handleCoursedeseng(event) {
    setAddcoursedeseng(event.target.value)
  }

  function handleCoursevenue(event) {
    setAddcoursevenue(event.target.value)
  }

  function handleCourseref(event) {
    setAddcourseref(event.target.value)
  }

  function handleCourseaddref(event) {
    setAddcourseaddref(event.target.value)
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

  function handleEditcourselecthai(event) {
    setEditlecthai(event.target.value)
  }

  function handleEditcourseleceng(event) {
    setEditleceng(event.target.value)
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

  function handleEditcoursetypeeng(event) {
    setEditcoursetypeeng(event.target.value)
  }

  function handleEditcourseasses(event) {
    setEditcourseasses(event.target.value)
  }

  function handleEditteachmedthai(event) {
    setEditteachmedthai(event.target.value)
  }

  function handleEditteachmedeng(event) {
    setEditteachmedeng(event.target.value)
  }

  function handleEditvenue(event) {
    setEditvenue(event.target.value)
  }

  function handleEditref(event) {
    setEditref(event.target.value)
  }

  function handleEditaddref(event) {
    setEditaddref(event.target.value)
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
            addLecthai={addLecthai}
            addLeceng={addLeceng}
            addCourseyear={addCourseyear}
            addCoursesems={addCoursesems}
            addCoursetype={addCoursetype}
            addCoursetypeeng={addCoursetypeeng}
            addCoursecre={addCoursecre}
            addCoursecredes={addCoursecredes}
            addCoursepre={addCoursepre}
            addCourseassesthai={addCourseassesthai}
            addCourseteachmedthai={addCourseteachmedthai}
            addCourseteachmedeng={addCourseteachmedeng}
            addCoursevenue={addCoursevenue}
            addCourseref={addCourseref}
            addCourseaddref={addCourseaddref}
            addCoursedesthai={addCoursedesthai}
            addCoursedeseng={addCoursedeseng}

            handleCourseid={handleCourseid}
            handleCoursenamethai={handleCoursenamethai}
            handleCoursenameeng={handleCoursenameeng}
            handleCourselecthai={handleCourselecthai}
            handleCourseleceng={handleCourseleceng}
            handleCourseyear={handleCourseyear}
            handleCoursesems={handleCoursesems}
            handleCoursetype={handleCoursetype}
            handleCoursetypeeng={handleCoursetypeeng}
            handleCoursecre={handleCoursecre}
            handleCoursecredes={handleCoursecredes}
            handleCoursepre={handleCoursepre}
            handleCourseassesthai={handleCourseassesthai}
            handleCourseteachmedthai={handleCourseteachmedthai}
            handleCourseteachmedeng={handleCourseteachmedeng}
            handleCoursevenue={handleCoursevenue}
            handleCourseref={handleCourseref}
            handleCourseaddref={handleCourseaddref}
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
                <th>Lecturer Thai</th>
                <th>Lecturer Eng</th>
                <th>Year</th>
                <th>Sesmester</th>
                <th>Course Type Thai</th>
                <th>Course Type English</th>
                <th>Course Credit</th>
                <th>Course Credit Detail</th>
                <th>Pre Course</th>
                <th>Course Teaching Method Thai</th>
                <th>Course Teaching Method English</th>
                <th>Course Assessment </th>
                <th>Course Venue</th>
                <th>Course Descrption Thai</th>
                <th>Course Descrption English</th>
                <th>Reference</th>
                <th>Additional Reference </th>
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
                      editLecthai={editLecthai}
                      editLeceng={editLeceng}
                      editCoursetypeeng={editCoursetypeeng}
                      editCourseasses={editCourseasses}
                      editTeachmedthai={editTeachmedthai}
                      editTeachmedeng={editTeachmedeng}
                      editVenue={editVenue}
                      editRef={editRef}
                      editAddref={editAddref}



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
                      handleEditcourselecthai={handleEditcourselecthai}
                      handleEditcourseleceng={handleEditcourseleceng}
                      handleEditcoursetypeeng={handleEditcoursetypeeng}
                      handleEditcourseasses={handleEditcourseasses}
                      handleEditteachmedthai={handleEditteachmedthai}
                      handleEditteachmedeng={handleEditteachmedeng}
                      handleEditvenue={handleEditvenue}
                      handleEditref={handleEditref}
                      handleEditaddref={handleEditaddref}

                      submitEditcourse={submitEditcourse}
                    />) : (


                    <tr>
                      <td>
                        {courseDetail.course_id}
                      </td>
                      <td>
                        <text>{courseDetail.course_namethai}</text>
                      </td>
                      <td>
                        <text>{courseDetail.course_nameeng}</text>
                      </td>
                      <td>
                        <text>{courseDetail.lec_thai}</text>
                      </td>
                      <td>
                        <text>{courseDetail.lec_eng}</text>
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
                        {courseDetail.course_typeeng}
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
                        {courseDetail.teachmed_thai}
                      </td>
                      <td>
                        {courseDetail.teachmed_eng}
                      </td>
                      <td>
                        {courseDetail.assesment_thai}
                      </td>
                      <td>
                        <text>{courseDetail.venue_thai}</text>
                      </td>
                      <td>
                        <text>{courseDetail.des_thai}</text>
                      </td>
                      <td>
                        <text>{courseDetail.des_eng}</text>
                      </td>
                      <td>
                        <text>{courseDetail.ref}</text>
                      </td>
                      <td>
                        <text> {courseDetail.addref}</text>
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
