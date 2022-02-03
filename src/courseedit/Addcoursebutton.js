import react from "react";
import './Coursedata.css'

function Modal2({ closeModal, courseDetail, Addcoursedata, addCourseid, addCoursenamethai, addCoursenameeng,
    addCourseyear, addCoursesems, addCoursetype, addCoursecre, addCoursecredes, addCoursepre,
    addCoursedesthai, addCoursedeseng, handleCourseid, handleCoursenamethai, handleCoursenameeng,
    handleCourseyear, handleCoursesems, handleCoursetype, handleCoursecre, handleCoursecredes, handleCoursepre,
    handleCoursedesthai, handleCoursedeseng
}) {
    return (
        <div className="coursedatamodalBackground">
            <div className="coursedatamodalContainer">
                <div className="coursedatatitleCloseBtn" >
                    <button onClick={() => closeModal(false)}>X</button></div>

                <div className="title">

                    <h1> Add Course Detail </h1>

                </div>

                <div className="body">
                    <label>Course ID</label>
                    <br />
                    <input
                        value={addCourseid}
                        onChange={handleCourseid}
                    ></input>
                    <br />
                    <br />

                    <label>Course Name Thai</label>
                    <br />
                    <textarea
                        value={addCoursenamethai}
                        onChange={handleCoursenamethai}
                        style={{ width: '300px', height: '15px' }}
                    ></textarea>
                    <br />
                    <br />

                    <label>Course Name English</label>
                    <br />
                    <textarea
                        value={addCoursenameeng}
                        onChange={handleCoursenameeng}
                        style={{ width: '300px', height: '15px' }}
                    ></textarea>
                    <br />
                    <br />

                    <label> Studied Year  </label>
                    <select
                        id='year'
                        value={addCourseyear}
                        onChange={handleCourseyear}>
                        <option disable select value=""> </option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='No Condition'>No Condition</option>
                    </select>
                    <br />
                    <label>Semester </label>
                    <select
                        id='semester'
                        value={addCoursesems}
                        onChange={handleCoursesems}>
                        <option disable select value=""> </option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='No Condition'>No Condition</option>
                    </select>
                    <br />
                    <label>Course Type </label>
                    <select
                        id='course_type'
                        value={addCoursetype}
                        onChange={handleCoursetype}>
                        <option disable select value=""> </option>
                        <option value='วิชาหลัก'>วิชาหลัก</option>
                        <option value='วิชาเลือก'>วิชาเลือก</option>
                    </select>
                    <br />
                    <label>Course Credit </label>
                    <select
                        id='course_credit'
                        value={addCoursecre}
                        onChange={handleCoursecre}>
                        <option disable select value=""> </option>
                        <option value='1'>1</option>
                        <option value='2-1'>2-1</option>
                        <option value='3'>3</option>
                    </select>
                    <br />
                    <label>Credit Detail</label>
                    <br />
                    <input
                        value={addCoursecredes}
                        onChange={handleCoursecredes}
                    ></input>
                    <br />
                    <label>Previous Course</label>
                    <br />
                    <input
                        value={addCoursepre}
                        onChange={handleCoursepre}
                    ></input>
                    <br />
                    <br />
                    <label>Course Description Thai</label>
                    <br />
                    <textarea
                        value={addCoursedesthai}
                        onChange={handleCoursedesthai}
                        style={{ width: '300px', height: '50px' }}
                    ></textarea>
                    <br />
                    <br />
                    <lable>Course Description English</lable>
                    <br />
                    <textarea
                        value={addCoursedeseng}
                        onChange={handleCoursedeseng}
                        style={{ width: '300px', height: '50px' }}
                    ></textarea>

                </div>

                <div className="footer">
                    <button onClick={(event => Addcoursedata(event, courseDetail) && closeModal(false))}>Add Course Detail</button>
                </div>


            </div>
        </div>


    )
}

export default Modal2