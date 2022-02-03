import { React, useEffect, useState } from "react";


const Edittablerow = ({ editDesthai, editDeseng, handleeditDesthai, handleeditDeseng, summitEditnumber,
    editcoNumber, handleEditcoNumber, coMapping }) => {
    return (
        <tr>
            <td>
                {coMapping.course_id}
            </td>
            <td>
                <input
                    value={editcoNumber}
                    onChange={handleEditcoNumber}></input>
            </td>
            <td>
                <textarea
                    value={editDesthai}
                    onChange={handleeditDesthai}
                    style={{ width: '400px', height: '100px' }}>
                </textarea>
            </td>
            <td>
                <textarea
                    value={editDeseng}
                    onChange={handleeditDeseng}
                    style={{ width: '400px', height: '100px' }}>
                </textarea>
            </td>
            <td>
                <button type="submit" onClick={summitEditnumber} >Save</button>
            </td>
        </tr>
    )
}

export default Edittablerow