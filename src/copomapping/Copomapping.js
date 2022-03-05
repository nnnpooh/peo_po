import { useState, useEffect } from 'react';
import supabase from '../db';
import { processRowData, getHeaderData } from './utilities';
import './Copoapp.css'

export default function Copomapping() {
    const [data, setData] = useState([]);

    async function loadData() {
        let { data, error } = await supabase.from('nr_co_po_pivot_all').select('*');

        setData(data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const dataMap = processRowData(data);
    const headers = getHeaderData();

    console.log({ data, dataMap, headers });
    return (
        <div className='copoapp-container'>
            {' '}
            <table style={{ marginTop: '1.5rem' }}>
                <thead>
                    <tr>
                        {headers.map((el) => (
                            <th key={el.key}>{el.text}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {dataMap.map((el) => (
                        <tr key={el.key}>
                            <td>{el.text}</td>
                            {el.rows.map((row) => (
                                <td key={row.key} className='map' onClick={() => { }}>
                                    {row.text}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}