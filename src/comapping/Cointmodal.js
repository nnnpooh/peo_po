import react from "react";
import './Coapp.css'

function Cointmodal({ closeintModal }) {
    return (
        <div className="cointmodalBackground">
            <div className="cointmodalContainer">
                <div className="cointtitleCloseBtn" >
                    <button onClick={() => closeintModal(false)}>X</button>

                </div>

                <div className="title">

                    <h1>คู่มือการใช้งานเบื้องต้น</h1>

                </div>

                <div className="body">

                    <div className='bodytitle1'>
                        <text>
                            การใช้งานในส่วนนี้เป็นการใช้งานในส่วนของ การเพิ่ม/ลบ/แก้ไข ในส่วนของ Course Objective (CO) หรือ ผลลัพธ์ของกระบวนวิชา
                        </text>
                    </div>



                    <div className='bodytitle2'>
                        <br />
                        <text>
                            การเพิ่มข้อมูลผลลัพธ์กระบวนวิชา
                        </text>
                    </div>

                    <div className="bodytext">

                        <text>

                            การเพิ่มข้อมูลในส่วนของ ผลลัพธ์กระบวนวิชา ทำได้โดยการคลิกที่ปุ่ม Add PO Detail ที่อยู่ด้านล่างของ
                            ปุ่ม Instruction จากนั้นจะพบหน้าต่างสำหรับกรอกข้อมูลในส่วนต่างๆดังนี้ <br />
                            <br />
                            Course ID : รหัสกระบวนวิชา <br />
                            CO Number : หมายเลขข้อของผลลัพธ์กระบวนวิชา   <br />
                            CO Description Thai : รายละเอียดของผลลัพธ์กระบวนวิชาภาษาไทย <br />
                            CO Description English : รายละเอียดของผลลัพธ์กระบวนวิชาภาษาอังกฤษ <br />
                            <br />

                        </text>
                    </div>

                    <div className="bodytitle2">
                        <br />
                        <text>การแก้ไข/ลบ ผลลัพธ์กระบวนวิชา</text>
                    </div>

                    <div className="bodytext">
                        <text>
                            - การแก้ไขในส่วนของข้อมูล ผลลัพธ์กระบวนวิชา ผู้ใช้สามารถคลิกที่ปุ่ม Edit ที่อยู่ในแถวของข้อมูล ผลลัพธ์กระบวนวิชา ที่ต้องการแก้ไข
                            จากนั้นจะปรากฎฟอร์มสำหรับแก้ไขในส่วนของข้อมูลขึ้นมา เมื่อทำการแก้ไขเสร็จแล้วผู้ใช้สามารถกดปุ่ม Save เพื่อทำการบันทึกข้อมูลในส่วนที่ทำการแก้ไขแล้วได้<br />
                            <br />
                            - การลบในส่วนของข้อมูล ผลลัพธ์กระบวนวิชา ผู้ใช้สามารถคลิกปุ่ม Delete เพื่อทำการลบข้อมูลในส่วนที่ต้องการได้
                        </text>





                    </div>

                </div>



            </div>
        </div>


    )


}

export default Cointmodal