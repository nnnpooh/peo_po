import { React, useEffect, useState } from 'react';

const Readonly = ({ peopoMapping, handleEditclick, handleRemove }) => {
    return (
        <tr>
            <td>
                {peopoMapping.peo_number}
            </td>
            <td>
                {peopoMapping.po_number}
            </td>
            <td>
                <button type="button" onClick={(event) => handleEditclick(event, peopoMapping)} >
                    Edit
                </button>

                <button type="button" onClick={handleRemove} >
                    Remove
                </button>

            </td>
        </tr >
    )

}

export default Readonly