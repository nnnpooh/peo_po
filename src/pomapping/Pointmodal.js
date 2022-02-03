import react from "react";
import './Poapp.css'

function Pointmodal({ closeintModal }) {
    return (
        <div className="pointmodalBackground">
            <div className="pointmodalContainer">
                <div className="pointtitleCloseBtn" >
                    <button onClick={() => closeintModal(false)}>X</button>

                </div>

                <div className="title">

                    <h1>คู่มือการใช้งานเบื้องต้น</h1>

                </div>

                <div className="body">

                    <div className='bodytitle1'>
                        <text>
                            การใช้งานในส่วนนี้เป็นการใช้งานในส่วนของ การเพิ่ม/ลบ/แก้ไข ในส่วนของ Program Objective (PO) หรือ ผลลัพธ์การศึกษา
                        </text>
                    </div>



                    <div className='bodytitle2'>
                        <br />
                        <text>
                            การเพิ่มข้อมูลผลลัพธ์การศึกษา
                        </text>
                    </div>

                    <div className="bodytext">

                        <text>

                            การเพิ่มข้อมูลในส่วนของ ผลลัพธ์การศึกษา ทำได้โดยการคลิกที่ปุ่ม Add PO Detail ที่อยู่ด้านล่างของ
                            ปุ่ม Instruction จากนั้นจะพบหน้าต่างสำหรับกรอกข้อมูลในส่วนต่างๆดังนี้ <br />
                            <br />
                            PO Number : หมายเลขข้อของผลลัพธ์การศึกษา   <br />
                            PO Description Thai : รายละเอียดของผลลัพท์การศึกษาภาษาไทย <br />
                            PO Description English : รายละเอียดของผลลัพท์การศึกษาภาษาอังกฤษ <br />
                            <br />

                        </text>
                    </div>

                    <div className="bodytitle2">
                        <br />
                        <text>การแก้ไข/ลบ ข้อมูลผลลัพท์การศึกษา</text>
                    </div>

                    <div className="bodytext">
                        <text>
                            - การแก้ไขในส่วนของข้อมูล ผลลัพท์การศึกษา ผู้ใช้สามารถคลิกที่ปุ่ม Edit ที่อยู่ในแถวของข้อมูลผลลัพท์การศึกษาที่ต้องการแก้ไข
                            จากนั้นจะปรากฎฟอร์มสำหรับแก้ไขในส่วนของข้อมูลขึ้นมา เมื่อทำการแก้ไขเสร็จแล้วผู้ใช้สามารถกดปุ่ม Save เพื่อทำการบันทึกข้อมูลในส่วนที่ทำการแก้ไขแล้วได้<br />
                            <br />
                            - การลบในส่วนของข้อมูล ผลลัพท์การศึกษา ผู้ใช้สามารถคลิกปุ่ม Delete เพื่อทำการลบข้อมูลในส่วนที่ต้องการได้
                        </text>





                    </div>

                </div>



            </div>
        </div>


    )


}

export default Pointmodal