import react from "react";
import './Coursedata.css'

function Modal2({ closeModal, courseDetail, Addcoursedata, addCourseid, addCoursenamethai, addCoursenameeng, addLecthai, addLeceng,
    addCourseyear, addCoursesems, addCoursetype, addCoursetypeeng, addCoursecre, addCoursecredes, addCoursepre, addCourseassesthai, addCourseteachmedthai, addCourseteachmedeng,
    addCoursedesthai, addCoursedeseng, handleCourseid, handleCoursenamethai, handleCoursenameeng, handleCourselecthai, handleCourseleceng,
    handleCourseyear, handleCoursesems, handleCoursetype, handleCoursetypeeng, handleCoursecre, handleCoursecredes, handleCoursepre, handleCourseassesthai,
    handleCourseteachmedthai, handleCourseteachmedeng,
    handleCoursedesthai, handleCoursedeseng,
    addCoursevenue, addCourseref, addCourseaddref, handleCoursevenue, handleCourseref, handleCourseaddref
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
                    <label style={{ marginLeft: '30rem' }}>Course ID</label>
                    <br />
                    <input
                        value={addCourseid}
                        onChange={handleCourseid}
                        style={{ marginLeft: '26.5rem' }}
                    ></input>
                    <br />
                    <br />

                    <label style={{ marginLeft: '15rem' }}>Course Name Thai</label>
                    <text style={{ marginLeft: '20rem' }} ></text>
                    <label> Course Name English</label>
                    <br />
                    <textarea
                        value={addCoursenamethai}
                        onChange={handleCoursenamethai}
                        style={{ width: '300px', height: '20px', marginLeft: '8.5rem' }}
                    ></textarea>

                    <text style={{ marginLeft: '8.7rem' }} ></text>
                    <textarea
                        value={addCoursenameeng}
                        onChange={handleCoursenameeng}
                        style={{ width: '300px', height: '20px' }}
                    ></textarea>
                    <br />
                    <br />

                    <label style={{ marginLeft: '15rem' }}>Lecturer Thai</label>
                    <text style={{ marginLeft: '23rem' }} ></text>
                    <label> Lecturer English </label>
                    <br />
                    <textarea
                        value={addLecthai}
                        onChange={handleCourselecthai}
                        style={{ width: '300px', height: '20px', marginLeft: '8.5rem' }}
                    ></textarea>

                    <text style={{ marginLeft: '8.7rem' }} ></text>
                    <textarea
                        value={addLeceng}
                        onChange={handleCourseleceng}
                        style={{ width: '300px', height: '20px' }}
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

                    <text style={{ marginLeft: '4rem' }} ></text>

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

                    <text style={{ marginLeft: '4rem' }} ></text>


                    <label>Course Type Thai </label>
                    <select
                        id='course_type'
                        value={addCoursetype}
                        onChange={handleCoursetype}>
                        <option disable select value=""> </option>
                        <option value='วิชาหลัก'>วิชาหลัก</option>
                        <option value='วิชาเลือก'>วิชาเลือก</option>
                        <option value='ตัวฟรีอิสระ'>ตัวฟรีอิสระ</option>
                    </select>

                    <text style={{ marginLeft: '4rem' }} ></text>

                    <label>Course Type English </label>
                    <select
                        id='course_type'
                        value={addCoursetypeeng}
                        onChange={handleCoursetypeeng}>
                        <option disable select value=""> </option>
                        <option value='General Education'>General Education</option>
                        <option value='Field of specialization'>Field of specialization</option>
                        <option value='Free elective'>Free elective</option>
                    </select>

                    <br />
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

                    <text style={{ marginLeft: '2rem' }} ></text>

                    <label>Credit Detail</label>
                    <input
                        value={addCoursecredes}
                        onChange={handleCoursecredes}
                        style={{ marginLeft: '0.5rem', width: '50px' }}
                    ></input>

                    <text style={{ marginLeft: '2rem' }} ></text>

                    <label>Previous Course</label>
                    <input
                        value={addCoursepre}
                        onChange={handleCoursepre}
                        style={{ marginLeft: '0.5rem', width: '100px', height: '15px' }}
                    ></input>

                    <text style={{ marginLeft: '1rem' }} ></text>

                    <br />
                    <br />

                    <label>Course Teaching Method Thai </label>
                    <select
                        id='course_credit'
                        value={addCourseteachmedthai}
                        onChange={handleCourseteachmedthai}>
                        <option disable select value=""> </option>
                        <option value='บรรยาย'>บรรยาย </option>
                        <option value='ปฏิบัติการ'>ปฏิบัติการ</option>
                        <option value='ฝึกปฏิบัติ'>ฝึกปฏิบัติ </option>
                        <option value='สหกิจศึกษา'>สหกิจศึกษา </option>
                    </select>

                    <text style={{ marginLeft: '1rem' }} ></text>

                    <label>Course Teaching Method English </label>
                    <select
                        id='course_credit'
                        value={addCourseteachmedeng}
                        onChange={handleCourseteachmedeng}>
                        <option disable select value=""> </option>
                        <option value='Lecture '>Lecture </option>
                        <option value='Laboratory'>Laboratory</option>
                        <option value='Practice '>Practice </option>
                        <option value='Co-operative education'>Co-operative education</option>
                    </select>

                    <text style={{ marginLeft: '1rem' }} ></text>


                    <label>Course Assessment </label>
                    <select
                        id='course_credit'
                        value={addCourseassesthai}
                        onChange={handleCourseassesthai}>
                        <option disable select value=""> </option>
                        <option value='A-F'>A-F</option>
                        <option value='S/U '>S/U </option>
                        <option value='P'>P</option>
                    </select>

                    <text style={{ marginLeft: '1rem' }} ></text>


                    <br />
                    <br />

                    <label style={{ marginLeft: '15rem' }}>Course Description Thai</label>
                    <text style={{ marginLeft: '20rem' }} ></text>
                    <label> Course Description English</label>
                    <br />
                    <textarea
                        value={addCoursedesthai}
                        onChange={handleCoursedesthai}
                        style={{ width: '300px', height: '50px', marginLeft: '10rem' }}
                    ></textarea>

                    <text style={{ marginLeft: '10rem' }} ></text>

                    <textarea
                        value={addCoursedeseng}
                        onChange={handleCoursedeseng}
                        style={{ width: '300px', height: '50px' }}
                    ></textarea>

                    <br />
                    <br />

                    <label style={{ marginLeft: '30rem' }}>Course Venue</label>
                    <br />
                    <text style={{ marginLeft: '13rem' }} ></text>
                    <textarea
                        value={addCoursevenue}
                        onChange={handleCoursevenue}
                        style={{ width: '300px', height: '50px', marginLeft: '10rem' }}
                    ></textarea>

                    <br />
                    <br />

                    <label style={{ marginLeft: '17.5rem' }}>Reference </label>
                    <text style={{ marginLeft: '24rem' }} ></text>
                    <label> Additional Reference </label>
                    <br />
                    <textarea
                        value={addCourseref}
                        onChange={handleCourseref}
                        style={{ width: '300px', height: '50px', marginLeft: '10rem' }}
                    ></textarea>

                    <text style={{ marginLeft: '10rem' }} ></text>

                    <textarea
                        value={addCourseaddref}
                        onChange={handleCourseaddref}
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