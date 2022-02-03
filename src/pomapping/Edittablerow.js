import { React, useEffect, useState } from "react";


const Edittablerow = ({ editDesthai, editDeseng, handleeditDesthai, handleeditDeseng, summitEditnumber,
    editpoNumber, handleEditpoNumber, editpoTitle, handleeditpoTitle }) => {
    return (
        <tr>
            <td>
                <select
                    value={editpoNumber}
                    onChange={handleEditpoNumber}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>

                </select>
            </td>
            <td>
                <textarea
                    value={editpoTitle}
                    onChange={handleeditpoTitle}
                    style={{ width: '400px', height: '100px' }}>

                </textarea>
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