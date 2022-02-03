import react from "react";
import './Peoapp.css'

function Peointmodal({ closeintModal }) {
    return (
        <div className="peointmodalBackground">
            <div className="peointmodalContainer">
                <div className="peointtitleCloseBtn" >
                    <button onClick={() => closeintModal(false)}>X</button>

                </div>

                <div className="title">

                    <h1>คู่มือการใช้งานเบื้องต้น</h1>

                </div>

                <div className="body">


                    <div className='bodytitle1'>
                        <text>
                            การใช้งานในส่วนนี้เป็นการใช้งานในส่วนของ การเพิ่ม/ลบ/แก้ไข ในส่วนของ Program Education Objective (PEO)
                            หรือ วัตถุประสงค์หลักสูตร
                        </text>
                    </div>



                    <div className='bodytitle2'>
                        <br />
                        <text>
                            การเพิ่มข้อมูลวัตถุประสงค์หลักสูตร
                        </text>
                    </div>

                    <div className="bodytext">

                        <text>

                            การเพิ่มในส่วนของ วัตถุประสงค์หลักสูตร ทำได้โดยการคลิกที่ปุ่ม Add PEO Detail ที่อยู่ด้านล่างของ
                            ปุ่ม Instruction จากนั้นจะพบหน้าต่างสำหรับกรอกข้อมูลในส่วนต่างๆดังนี้ <br />
                            <br />
                            PEO Number : หมายเลขของวัตถุประสงค์หลักสูตร   <br />
                            PEO Description Thai : รายละเอียดของวัตถุประสงค์หลักสูตรภาษาไทย <br />
                            PEO Description English : รายละเอียดของวัตถุประสงค์หลักสูตรภาษาอังกฤษ <br />
                            <br />
                            ** เมื่อทำเพิ่มในส่วนของหมายเลขของวัตถุประสงค์หลักสูตรแล้ว หมายเลขของวัตถุประสงค์หลักสูตรจะไปปรากฎในส่วนของตาราง PEO-PO Mapping ด้วยเช่นกัน**
                        </text>
                    </div>

                    <div className="bodytitle2">
                        <br />
                        <text>การแก้ไข/ลบ วัตถุประสงค์หลักสูตร</text>
                    </div>

                    <div className="bodytext">
                        <text>
                            - การแก้ไขในส่วนของข้อมูล วัตถุประสงค์หลักสูตร ผู้ใช้สามารถคลิกที่ปุ่ม Edit ที่อยู่ในแถวของวัตถุประสงค์หลักสูตรที่ต้องการแก้ไข
                            จากนั้นจะปรากฎฟอร์มสำหรับแก้ไขในส่วนของข้อมูลขึ้นมา เมื่อทำการแก้ไขเสร็จแล้วผู้ใช้สามารถกดปุ่ม Save เพื่อทำการบันทึกข้อมูลในส่วนที่ทำการแก้ไขแล้วได้<br />
                            <br />
                            - การลบในส่วนของข้อมูล วัตถุประสงค์หลักสูตร ผู้ใช้สามารถคลิกปุ่ม Delete เพื่อทำการลบข้อมูลในส่วนที่ต้องการได้
                        </text>





                    </div>

                </div>



            </div>
        </div>


    )


}

export default Peointmodal