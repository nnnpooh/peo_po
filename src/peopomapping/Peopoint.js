import react from "react";
import './Peopomapping.css'

function Peopointmodal({ closeintModal }) {
    return (
        <div className="peopointmodalBackground">
            <div className="peopointmodalContainer">
                <div className="peopointtitleCloseBtn" >
                    <button onClick={() => closeintModal(false)}>X</button>

                </div>

                <div className="title">

                    <h1>คู่มือการใช้งานเบื้องต้น</h1>

                </div>

                <div className="body">


                    <div className='bodytitle1'>
                        <text>
                            การใช้งานในส่วนนี้เป็นการใช้งานในส่วนของ ตารางแสดงการจับคู่กันของ วัตถุประสงค์หลักสูตร และ ผลลัพท์การศึกษา
                        </text>
                    </div>



                    <div className='bodytitle2'>
                        <br />
                        <text>
                            การใช้งาน
                        </text>
                    </div>

                    <div className="bodytext">

                        <text>
                            การใช้งานในส่วนนี้เป็นการเลือกในส่วน วัตถุประสงค์หลักสูตร ว่ามีความเกี่ยวข้อง กับผลลัพท์การศึกษาในข้อใดบ้าง
                            โดยการเลือก สามารถคลิกในช่องที่ต้องการเลือกได้ เมื่อคลิกแล้วจะสังเกตเห็น เครื่ีองหมายถูกสีเขียว อยู่ในช่องที่ทำการเลือก
                            เช่น ต้องการให้ PEO ข้อที่ 1 ตรงกับ PO ข้อที่ 9 ให้ทำการดู PEO-1 จากนั้นไปที่แถว PO-9 จากนั้นทำการคลิกลงไปที่ช่อง
                            จะเกิดเครื่องหมายเช็คถูกสีเขียว แสดงถึงว่าข้อมูลได้ถูกทำการจับคู่กันแล้ว
                            <br />
                            <br />
                            ** การเพิ่มเติมในส่วนข้อของ PEO สามารถเพิ่มได้ในส่วนของ PEO Detail **


                        </text>
                    </div>



                </div>



            </div>
        </div>


    )


}

export default Peopointmodal