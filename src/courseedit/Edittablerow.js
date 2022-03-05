import react from "react";
import './Coursedata.css'

const Edittablerow = ({ editCourseid, editCoursenamethai, editCoursenameeng, editCourseyear,
    editCoursesems, editCoursetype, editCoursecre, editCoursecredes, editCoursedesthai, editCoursedeseng, editCoursepre,
    handleEditcourseid, handleEditcoursenamethai, handleEditcoursenameeng, handleEditcourseyear, handleEditcoursesems, handleEditcoursetype,
    handleEditcoursecre, handleEditcoursecredes, handleEditcoursepre, handleEditcoursedesthai, handleEditcoursedeseng, submitEditcourse,
    editLecthai, editLeceng, handleEditcourselecthai, handleEditcourseleceng, editCoursetypeeng, handleEditcoursetypeeng,
    editCourseasses, handleEditcourseasses, editTeachmedthai, editTeachmedeng, handleEditteachmedthai, handleEditteachmedeng,
    editVenue, editRef, editAddref, handleEditvenue, handleEditref, handleEditaddref }) => {

    return (


        <tr>
            <td>
                <input htmlFor='course_id'
                    id='course_id'
                    value={editCourseid}
                    onChange={handleEditcourseid}
                ></input>
            </td>

            <td>
                <textarea htmlFor='course_namethai'
                    id='course_namethai'
                    value={editCoursenamethai}
                    onChange={handleEditcoursenamethai}
                    style={{ width: '300px', height: '20px' }}
                ></textarea>
            </td>

            <td>
                <textarea htmlFor='course_nameeng'
                    id='course_nameeng'
                    value={editCoursenameeng}
                    onChange={handleEditcoursenameeng}
                    style={{ width: '300px', height: '20px' }}
                ></textarea>
            </td>

            <td>
                <textarea htmlFor='lec_thai'
                    id='lec_thai'
                    value={editLecthai}
                    onChange={handleEditcourselecthai}
                    style={{ width: '300px', height: '20px' }}
                ></textarea>
            </td>

            <td>
                <textarea htmlFor='lec_eng'
                    id='lec_eng'
                    value={editLeceng}
                    onChange={handleEditcourseleceng}
                    style={{ width: '300px', height: '20px' }}
                ></textarea>
            </td>

            <td>
                <select htmlFor='year'
                    id='year'
                    value={editCourseyear}
                    onChange={handleEditcourseyear}>
                    <option disable select value=""> </option>

                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='No Condition'>No Condition</option>
                </select>
            </td>

            <td>
                <select htmlFor='semester'
                    id='semester'
                    value={editCoursesems}
                    onChange={handleEditcoursesems}>
                    <option disable select value=""> </option>

                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='No Condition'>No Condition</option>
                </select>
            </td>

            <td>
                <select htmlFor='course_type'
                    id='course_type'
                    value={editCoursetype}
                    onChange={handleEditcoursetype}>
                    <option disable select value=""> </option>
                    <option value='วิชาหลัก'>วิชาหลัก</option>
                    <option value='วิชาเลือก'>วิชาเลือก</option>
                    <option value='ตัวฟรีอิสระ'>ตัวฟรีอิสระ</option>
                </select>
            </td>

            <td>
                <select htmlFor='course_typeeng'
                    id='course_typeeng'
                    value={editCoursetypeeng}
                    onChange={handleEditcoursetypeeng}>
                    <option disable select value=""> </option>
                    <option value='General Education'>General Education</option>
                    <option value='Field of specialization'>Field of specialization</option>
                    <option value='Free elective'>Free elective</option>
                </select>
            </td>

            <td>
                <select htmlFor='course_credit'
                    id='course_credit'
                    value={editCoursecre}
                    onChange={handleEditcoursecre}>
                    <option disable select value=""> </option>
                    <option value='1'>1</option>
                    <option value='2'>2-1</option>
                    <option value='3'>3</option>
                </select>
            </td>

            <td>
                <input htmlFor='credit_detail'
                    id='credit_detail'
                    value={editCoursecredes}
                    onChange={handleEditcoursecredes}
                ></input>
            </td>

            <td>
                <input htmlFor='pre_course'
                    id='pre_course'
                    value={editCoursepre}
                    onChange={handleEditcoursepre}
                ></input>
            </td>

            <td>
                <select htmlFor='teachmed_thai'
                    id='teachmed_thai'
                    value={editTeachmedthai}
                    onChange={handleEditteachmedthai}>
                    <option disable select value=""> </option>
                    <option value='บรรยาย'>บรรยาย </option>
                    <option value='ปฏิบัติการ'>ปฏิบัติการ</option>
                    <option value='ฝึกปฏิบัติ'>ฝึกปฏิบัติ </option>
                    <option value='สหกิจศึกษา'>สหกิจศึกษา </option>
                </select>
            </td>

            <td>
                <select htmlFor='teachmed_eng'
                    id='teachmed_eng'
                    value={editTeachmedeng}
                    onChange={handleEditteachmedeng}>
                    <option disable select value=""> </option>
                    <option value='Lecture '>Lecture </option>
                    <option value='Laboratory'>Laboratory</option>
                    <option value='Practice '>Practice </option>
                    <option value='Co-operative education'>Co-operative education</option>
                </select>
            </td>

            <td>
                <select htmlFor='assesment_thai'
                    id='assesment_thai'
                    value={editCourseasses}
                    onChange={handleEditcourseasses}>
                    <option disable select value=""> </option>
                    <option value='A-F'>A-F</option>
                    <option value='S/U '>S/U </option>
                    <option value='P'>P</option>
                </select>
            </td>

            <td>
                <textarea htmlFor='venue_thai'
                    id='venue_thai'
                    value={editVenue}
                    onChange={handleEditvenue}
                    style={{ width: '300px', height: '20px' }}
                ></textarea>
            </td>

            <td>
                <textarea htmlFor='des_thai'
                    id='des_thai'
                    value={editCoursedesthai}
                    onChange={handleEditcoursedesthai}
                    style={{ width: '400px', height: '100px' }}
                ></textarea>
            </td>

            <td>
                <textarea htmlFor='des_eng'
                    id='des_eng'
                    value={editCoursedeseng}
                    onChange={handleEditcoursedeseng}
                    style={{ width: '400px', height: '100px' }}
                ></textarea>
            </td>

            <td>
                <textarea htmlFor='ref'
                    id='ref'
                    value={editRef}
                    onChange={handleEditref}
                    style={{ width: '300px', height: '20px' }}
                ></textarea>
            </td>

            <td>
                <textarea htmlFor='addref'
                    id='addref'
                    value={editAddref}
                    onChange={handleEditaddref}
                    style={{ width: '300px', height: '20px' }}
                ></textarea>
            </td>

            <td>
                <button type='submit' onClick={submitEditcourse} >Save</button>
            </td>
        </tr>



    )
}

export default Edittablerow