import { React, useEffect, useState } from "react";
import supabase from "./db";

const Edittablerow = ({ editNumpeo, editNumpo, handleeditPeo, handleeditPo, summitEditnumber }) => {
    return (
        <tr>
            <td>
                <select htmlFor='peo_number'
                    id='peo_number'
                    value={editNumpeo}
                    onChange={handleeditPeo}>
                    <option value='peo1'>peo1</option>
                    <option value='peo2'>peo2</option>
                    <option value='peo3'>peo3</option>
                    <option value='peo4'>peo4</option>
                </select>
            </td>
            <td>
                <select htmlFor='po_number'
                    id='po_number'
                    value={editNumpo}
                    onChange={handleeditPo}>
                    <option value='po1'>po1</option>
                    <option value='po2'>po2</option>
                    <option value='po3'>po3</option>
                    <option value='po4'>po4</option>
                    <option value='po5'>po5</option>
                    <option value='po6'>po6</option>
                    <option value='po7'>po7</option>
                    <option value='po8'>po8</option>
                    <option value='po9'>po9</option>
                    <option value='po10'>po10</option>
                    <option value='po11'>po11</option>
                </select>
            </td>
            <td>
                <button type="submit" onClick={summitEditnumber} >Save</button>
            </td>
        </tr>
    )
}

export default Edittablerow