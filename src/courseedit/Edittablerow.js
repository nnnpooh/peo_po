import react from "react";
import './Coursedata.css'

const Edittablerow = ({ editCourseid, editCoursenamethai, editCoursenameeng, editCourseyear,
    editCoursesems, editCoursetype, editCoursecre, editCoursecredes, editCoursedesthai, editCoursedeseng, editCoursepre,
    handleEditcourseid, handleEditcoursenamethai, handleEditcoursenameeng, handleEditcourseyear, handleEditcoursesems, handleEditcoursetype,
    handleEditcoursecre, handleEditcoursecredes, handleEditcoursepre, handleEditcoursedesthai, handleEditcoursedeseng, submitEditcourse }) => {

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
                <button type='submit' onClick={submitEditcourse} >Save</button>
            </td>
        </tr>



    )
}

export default Edittablerow