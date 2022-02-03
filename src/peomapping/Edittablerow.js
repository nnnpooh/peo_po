import { React, useEffect, useState } from "react";


const Edittablerow = ({ editDesthai, editDeseng, handleeditDesthai, handleeditDeseng, summitEditnumber,
    editpeoNumber, handleEditpeoNumber }) => {
    return (
        <tr>
            <td>
                <input
                    value={editpeoNumber}
                    onChange={handleEditpeoNumber}></input>
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