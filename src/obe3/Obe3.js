import React, { useState, useEffect, Fragment } from 'react';
import supabase from '../db';
import './Obe3.css';
import { processRowData, getHeaderData, fillAllPO } from './utilities';

function Obe3() {
  const [currentCourse, setCurrentCourse] = useState('');
  const [courseDetails, setCourseDetails] = useState([]);
  const [coDetails, setCoDetails] = useState([]);
  const [poCoPivot, setPoCoPivot] = useState([]);
  const [coPoPivot, setCoPoPivot] = useState([]);
  const [poList, setPoList] = useState([]);
  async function loadData() {
    let { data: course_details, error: error1 } = await supabase
      .from('course_details')
      .select('*');
    if (course_details) setCourseDetails(course_details);

    let { data: co, error: error2 } = await supabase.from('co').select('*');
    if (co) setCoDetails(co);

    let { data: po_co_pivot, error: error3 } = await supabase
      .from('nr_po_co_pivot_single')
      .select('*');
    if (po_co_pivot) setPoCoPivot(po_co_pivot);

    let { data: co_po_pivot, error: error4 } = await supabase
      .from('nr_co_po_pivot_single')
      .select('*');
    if (co_po_pivot) setCoPoPivot(co_po_pivot);

    let { data: poData, error: error5 } = await supabase.from('po').select('*');
    if (poData) setPoList(poData);
  }

  useEffect(() => {
    loadData();
  }, []);

  let courseList = courseDetails.filter((el) => el.course_id === currentCourse);

  let coList = coDetails.filter((el) => el.course_id === currentCourse);
  coList.sort((a, b) => (b.co < a.co ? 1 : -1));

  const numCo = coList.length;
  let poCoPivotFilter = poCoPivot.filter(
    (el) => el.course_id === currentCourse
  );
  poCoPivotFilter = fillAllPO(poCoPivotFilter, currentCourse);
  let dataMap = processRowData(poCoPivotFilter, numCo, poList);
  const headers = getHeaderData(numCo);
  console.log({ dataMap, poCoPivotFilter, headers, poList });

  return (
    <div className='obe3'>
      <div className='title'>
        <h1> OBE 3 </h1>
      </div>

      <div className='select'>
        <p>Select Course</p>
        <select
          onChange={(e) => setCurrentCourse(e.target.value)}
          style={{ marginBottom: '1rem' }}
        >
          <option disable select value=''>
            {' '}
          </option>
          {courseDetails.map((el) => (
            <option value={el.course_id}>{el.course_id}</option>
          ))}
        </select>
      </div>

      <br />
      <div className='obe3body'>
        {courseList.map((courseDetails) => (
          <Fragment>
            <div className='page'>
              <div className='subpage'>
                <div className='title1'>
                  {' '}
                  <h2> มคอ.3 </h2>{' '}
                </div>

                <div className='title2'>
                  {' '}
                  <h4> หมวดที่ 1 : ข้อมูลทั่วไป </h4>{' '}
                </div>
                <br />
                <div className='body'>
                  <text>
                    <div className='table'>
                      {' '}
                      <text
                        style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}
                      >
                        คณะวิศวกรรมศาสตร์ / ภาควิชาอุตสาหการ /
                        มหาวิทยาลัยเชียงใหม่
                      </text>{' '}
                    </div>
                    <div className='table'>
                      <text
                        style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}
                      >
                        รหัสกระบวนวิชา:{' '}
                      </text>{' '}
                      <text style={{ marginLeft: '4rem' }}>
                        {courseDetails.course_id}{' '}
                      </text>{' '}
                    </div>
                    <div className='table'>
                      <text
                        style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}
                      >
                        ชื่อกระบวนวิชา:{' '}
                      </text>{' '}
                      <text style={{ marginLeft: '4.4rem' }}>
                        {' '}
                        {courseDetails.course_namethai}{' '}
                      </text>{' '}
                    </div>
                    <div className='table'>
                      {' '}
                      <text
                        style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}
                      >
                        หน่วยกิต:{' '}
                      </text>{' '}
                      <text style={{ marginLeft: '6.6rem' }}>
                        {' '}
                        {courseDetails.course_credit}
                        {courseDetails.credit_detail}{' '}
                      </text>{' '}
                    </div>

                    <div className='table'>
                      {' '}
                      <text
                        style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}
                      >
                        {' '}
                        ประเภทของกระบวนวิชา:{' '}
                      </text>{' '}
                      <text style={{ marginLeft: '1.1rem' }}>
                        {' '}
                        {courseDetails.course_type}{' '}
                      </text>{' '}
                    </div>

                    <div className='table'>
                      {' '}
                      <text
                        style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}
                      >
                        อาจารย์ผู้รับผิดชอบกระบวนวิชาและอาจารย์ผู้สอน{' '}
                      </text>{' '}
                      <br />
                      <text style={{ marginLeft: '0.5rem' }}>
                        ชื่ออาจารย์ผู้รับผิดชอบ:{' '}
                      </text>{' '}
                      <text style={{ marginLeft: '2.5rem' }}>
                        {' '}
                        {courseDetails.lec_thai}{' '}
                      </text>{' '}
                    </div>
                    <div className='table'>
                      <text
                        style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}
                      >
                        {' '}
                        ชั้นปีที่เรียน/ภาคการศึกษา{' '}
                      </text>{' '}
                      <br />
                      <text style={{ marginLeft: '0.5rem' }}>
                        ชั้นปีที่เรียน:{' '}
                      </text>{' '}
                      <text style={{ marginLeft: '6.3rem' }}>
                        {' '}
                        {courseDetails.year}{' '}
                      </text>{' '}
                      <br />
                      <text style={{ marginLeft: '0.5rem' }}>
                        ภาคการศึกษา:{' '}
                      </text>{' '}
                      <text style={{ marginLeft: '5.3rem' }}>
                        {' '}
                        {courseDetails.semester}{' '}
                      </text>{' '}
                    </div>
                    <div className='table'>
                      <text
                        style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}
                      >
                        {' '}
                        วิชาเงื่อนไขที่ต้องผ่าน:{' '}
                      </text>{' '}
                      <text style={{ marginLeft: '1.9rem' }}>
                        {' '}
                        {courseDetails.pre_course}{' '}
                      </text>{' '}
                    </div>
                    <div className='table'>
                      <text
                        style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}
                      >
                        {' '}
                        หลักสูตรและประเภทของกระบวนวิชา:{' '}
                      </text>{' '}
                      <text style={{ marginLeft: '1rem' }}>
                        {' '}
                        {courseDetails.teachmed_thai}{' '}
                      </text>{' '}
                    </div>
                    <div className='table'>
                      <text
                        style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}
                      >
                        การวัดและประเมินผล:{' '}
                      </text>{' '}
                      <text style={{ marginLeft: '2.2rem' }}>
                        {' '}
                        {courseDetails.assesment_thai}{' '}
                      </text>{' '}
                    </div>
                    <div className='table'>
                      <text
                        style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}
                      >
                        สถานที่เรียน:
                      </text>{' '}
                      <br />{' '}
                      <text style={{ marginLeft: '0.5rem' }}>
                        {' '}
                        {courseDetails.venue_thai}{' '}
                      </text>{' '}
                    </div>
                  </text>
                </div>
              </div>
            </div>

            <div className='page'>
              <div className='subpage'>
                <div className='title1'>
                  {' '}
                  <h2> Course Syllabus </h2>{' '}
                </div>
                <div className='title2'>
                  {' '}
                  <h4> Section 1: General Information </h4>{' '}
                </div>
                <br />
                <div className='body'>
                  <div className='table'>
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      Faculty of Engineering / Department of Industrial
                      Engineering / Chiang Mai University{' '}
                    </text>{' '}
                  </div>
                  <div className='table'>
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      Course ID:{' '}
                    </text>{' '}
                    <text style={{ marginLeft: '2.8rem' }}> </text>{' '}
                    {courseDetails.course_id}{' '}
                  </div>
                  <div className='table'>
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      Course Name:
                    </text>{' '}
                    <text style={{ marginLeft: '1.5rem' }}></text>{' '}
                    {courseDetails.course_nameeng}{' '}
                  </div>
                  <div className='table'>
                    {' '}
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      Credit:{' '}
                    </text>{' '}
                    <text style={{ marginLeft: '4.5rem' }}></text>{' '}
                    {courseDetails.course_credit}
                    {courseDetails.credit_detail}{' '}
                  </div>

                  <div className='table'>
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      {' '}
                      Course Type:{' '}
                    </text>{' '}
                    <text style={{ marginLeft: '1.9rem' }}></text>{' '}
                    {courseDetails.course_typeeng}{' '}
                  </div>

                  <div className='table'>
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      Lecturers and Coordinator:{' '}
                    </text>{' '}
                    <br />
                    <text style={{ marginLeft: '0.5rem' }}>
                      Lecturers:{' '}
                    </text>{' '}
                    <text style={{ marginLeft: '3.6rem' }}></text>{' '}
                    {courseDetails.lec_eng}{' '}
                  </div>
                  <div className='table'>
                    {' '}
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      Year/Semester
                    </text>{' '}
                    <br />
                    <text style={{ marginLeft: '0.5rem' }}>Year: </text>{' '}
                    <text style={{ marginLeft: '5.4rem' }}></text>{' '}
                    {courseDetails.year} <br />
                    <text style={{ marginLeft: '0.5rem' }}>
                      Semester:{' '}
                    </text>{' '}
                    <text style={{ marginLeft: '3.6rem' }}></text>{' '}
                    {courseDetails.semester}{' '}
                  </div>
                  <div className='table'>
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      {' '}
                      Prerequisite:{' '}
                    </text>{' '}
                    <text style={{ marginLeft: '2rem' }}></text>{' '}
                    {courseDetails.pre_course} <br />{' '}
                  </div>
                  <div className='table'>
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      {' '}
                      Teaching Method:{' '}
                    </text>{' '}
                    <text style={{ marginLeft: '1rem' }}></text>{' '}
                    {courseDetails.teachmed_eng} <br />{' '}
                  </div>
                  <div className='table'>
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      Assessment:{' '}
                    </text>{' '}
                    <text style={{ marginLeft: '2.2rem' }}></text>{' '}
                    {courseDetails.assesment_thai} <br />{' '}
                  </div>
                  <div className='table'>
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      Venues:
                    </text>{' '}
                    <br />{' '}
                    <text style={{ marginLeft: '0.5rem' }}>
                      {' '}
                      {courseDetails.venue_thai}{' '}
                    </text>{' '}
                    <br />{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className='page'>
              <div className='subpage'>
                <div className='title2'>
                  {' '}
                  <h4> หมวดที่ 2 : </h4>{' '}
                </div>
                <br />
                <div className='body'>
                  <div className='table'>
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      เอกสารอ้างอิง:{' '}
                    </text>{' '}
                    <br />
                    <text style={{ marginLeft: '0.5rem' }}>
                      {' '}
                      {courseDetails.ref}{' '}
                    </text>{' '}
                    <br />{' '}
                  </div>
                  <div className='table'>
                    <text style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                      เอกสารเพิ่มเติม:{' '}
                    </text>{' '}
                    <br />
                    <text style={{ marginLeft: '0.5rem' }}>
                      {' '}
                      {courseDetails.addref}{' '}
                    </text>{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className='page'>
              <div className='subpage'>
                <div className='title2'>
                  {' '}
                  <h4> หมวดที่ 3: ลักษณะและการดำเนินการ </h4>{' '}
                </div>
                <br />
                <br />
                <div className='body'>
                  <text style={{ fontWeight: 'bold' }}>รหัสกระบวนวิชา: </text>{' '}
                  <text style={{ marginLeft: '1rem' }}></text>{' '}
                  {courseDetails.course_id} <br />
                  <text style={{ fontWeight: 'bold' }}>
                    ชื่อกระบวนวิชา:{' '}
                  </text>{' '}
                  <text style={{ marginLeft: '1.4rem' }}></text>{' '}
                  {courseDetails.course_namethai} <br />
                  <text style={{ fontWeight: 'bold' }}>หน่วยกิต: </text>{' '}
                  <text style={{ marginLeft: '3.6rem' }}></text>{' '}
                  {courseDetails.course_credit}
                  {courseDetails.credit_detail} <br />
                  <br />
                  <text style={{ fontWeight: 'bold' }}>
                    รายละเอียดกระบวนวิชา:{' '}
                  </text>{' '}
                  <br />
                  <text style={{ marginLeft: '2rem' }}>
                    {' '}
                    {courseDetails.des_thai}{' '}
                  </text>
                  <br />
                  <br />
                  <text style={{ fontWeight: 'bold' }}>
                    ผลลัพธ์กระบวนวิชา :{' '}
                  </text>{' '}
                  <br />
                  {coList.map((el) => (
                    <>
                      <text style={{ marginLeft: '1.4rem' }}>
                        {el.co}. {el.des_thai}
                      </text>
                      <br />
                    </>
                  ))}
                  <br />
                  <text style={{ fontWeight: 'bold' }}>
                    ความสอดคล้องของ PO และผลลัพธ์การเรียนรู้ของกระบวนวิชา :{' '}
                  </text>{' '}
                  <table className='obe3' style={{ width: '100%' }}>
                    <thead>
                      <tr>
                        {headers.map((el) => (
                          <th className='obe3' key={el.key}>
                            {el.text}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dataMap.map((po) => (
                        <tr key={po.key}>
                          <td className='obe3'>
                            {po.text} {po.des_th}
                          </td>
                          {po.rows.map((el) => (
                            <td className='obe3'>{el.text}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className='page'>
              <div className='subpage'>
                <div className='title2'>
                  {' '}
                  <h4> Section 3 : Description and Planning </h4>{' '}
                </div>
                <br />
                <br />
                <div className='body'>
                  <text style={{ fontWeight: 'bold' }}>Course ID: </text>{' '}
                  <text style={{ marginLeft: '3.3rem' }}></text>{' '}
                  {courseDetails.course_id} <br />
                  <text style={{ fontWeight: 'bold' }}>Course Name: </text>{' '}
                  <text style={{ marginLeft: '2rem' }}></text>{' '}
                  {courseDetails.course_nameeng} <br />
                  <text style={{ fontWeight: 'bold' }}>Credit: </text>{' '}
                  <text style={{ marginLeft: '4.9rem' }}></text>{' '}
                  {courseDetails.course_credit}
                  {courseDetails.credit_detail} <br />
                  <br />
                  <text style={{ fontWeight: 'bold' }}>
                    Course Detail:{' '}
                  </text>{' '}
                  <br />
                  <text style={{ marginLeft: '2rem' }}>
                    {' '}
                    {courseDetails.des_eng}{' '}
                  </text>
                  <br />
                  <br />
                  <text style={{ fontWeight: 'bold' }}>
                    Course Outcome :{' '}
                  </text>{' '}
                  <br />
                  {coList.map((el) => (
                    <>
                      <text style={{ marginLeft: '1.4rem' }}>
                        {el.co}. {el.des_eng}
                      </text>
                      <br />
                    </>
                  ))}
                  <br />
                  <text style={{ fontWeight: 'bold' }}>
                    Mapping between program outcomes and course outcomes :{' '}
                  </text>{' '}
                  <table className='obe3' style={{ width: '100%' }}>
                    <thead>
                      <tr>
                        {headers.map((el) => (
                          <th className='obe3' key={el.key}>
                            {el.text}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dataMap.map((po) => (
                        <tr key={po.key}>
                          <td className='obe3'>
                            {po.text} {po.des_en}
                          </td>
                          {po.rows.map((el) => (
                            <td className='obe3'>{el.text}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Obe3;
