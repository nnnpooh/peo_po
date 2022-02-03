import react from "react";
import './Coursedata.css'

function Courseintmodal({ closeintModal }) {
    return (
        <div className="coursedataintmodalBackground">
            <div className="coursedataintmodalContainer">
                <div className="coursedatainttitleCloseBtn" >
                    <button onClick={() => closeintModal(false)}>X</button>

                </div>

                <div className="title">

                    <h1>คู่มือการใช้งานเบื้องต้น</h1>

                </div>

                <div className="body">

                    <div className='bodytitle1'>
                        <text>
                            การใช้งานในส่วนนี้เป็นการใช้งานในส่วนของ การเพิ่ม/ลบ/แก้ไข ในส่วนของข้อมูลกระบวนวิชา
                        </text>
                    </div>



                    <div className='bodytitle2'>
                        <br />
                        <text>
                            การเพิ่มข้อมูลกระบวนวิชา
                        </text>
                    </div>

                    <div className="bodytext">

                        <text>
                            การเพิ่มในส่วนของกระบวนวิชาสามารถทำได้โดยการคลิกที่ปุ่ม Add Course Detail ที่อยู่ด้านล่างของ
                            ปุ่ม Instruction จากนั้นจะพบหน้าต่างสำหรับกรอกข้อมูลในส่วนต่างๆดังนี้ <br />
                            <br />
                            Course ID : รหัสกระบวนวิชา <br />
                            Course Name Thai : ชื่อกระบวนวิชาภาษาไทย <br />
                            Course Name Eng : ชื่อกระบวนวิชาภาษาอังกฤษ <br />
                            Year : ปีที่เรียนตามหลักสูตรพื้นฐาน <br />
                            Sesmester : เทอมที่เรียนตามหลักสูตรพื้นฐาน <br />
                            Course Type : ประเภทของกระบวนวิชา (วิชาหลัก/วิชาเลือก) <br />
                            Course Credit : หน่วนกิตของกระบวนวิชา <br />
                            Course Credit Detail : รายละเอียดของหน่อยกิตของกระบวนวิชา <br />
                            Pre Course : กระบวนวิชาที่จำเป็นต้องผ่านก่อนตามเงื่อนไขหลักสูตร **หากไม่มีวิชาที่จำเป็นต้องผ่านก่อนหน้า ให้ระบุว่า "ไม่มี" ** <br />
                            Course Description Thai : รายละเอียดกระบวนวิชาภาษาไทย <br />
                            Course Description English : รายละเอียดกระบวนวิชาภาษาอังกฤษ <br />
                        </text>
                    </div>

                    <div className="bodytitle2">
                        <br />
                        <text>การแก้ไข/ลบ ข้อมูลกระบวนวิชา</text>
                    </div>

                    <div className="bodytext">
                        <text>
                            - การแก้ไขในส่วนของข้อมูล กระบวนวิชา ผู้ใช้สามารถคลิกที่ปุ่ม Edit ที่อยู่ในแถวของกระบวนวิชาที่ต้องการแก้ไข
                            จากนั้นจะปรากฎฟอร์มสำหรับแก้ไขในส่วนของข้อมูลขึ้นมา เมื่อทำการแก้ไขเสร็จแล้วผู้ใช้สามารถกดปุ่ม Save เพื่อทำการบันทึกข้อมูลในส่วนที่ทำการแก้ไขแล้วได้<br />
                            <br />
                            - การลบในส่วนของข้อมูลกระบวนวิชา ผู้ใช้สามารถคลิกปุ่ม Delete เพื่อทำการลบข้อมูลในส่วนที่ต้องการได้
                        </text>
                    </div>


                </div>




            </div>
        </div >


    )


}

export default Courseintmodal