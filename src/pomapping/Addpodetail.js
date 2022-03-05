import react from "react";
import './Poapp.css'

function Poaddmodal({ closepoModal, poMapping, poNumber, poDesthai, poDeseng, handlepoNumber, handleDeseng, handleDesthai,
    submitNumberpo, poTitle, handlepoTitle
}) {
    return (
        <div className="podatamodalBackground">
            <div className="podatamodalContainer">
                <div className="podatatitleCloseBtn" >
                    <button onClick={() => closepoModal(false)}>X</button></div>

                <div className="title">

                    <h1>Add PO Detail</h1>

                </div>

                <div className="body">

                    <label> PO Number</label>
                    <br />
                    <select
                        value={poNumber}
                        onChange={handlepoNumber}>
                        <option disable select value=""> </option>
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

                    <br />
                    <br />

                    <label>PO Title</label>
                    <br />
                    <textarea htmlFor='po_title'
                        id='po_title'
                        value={poTitle}
                        onChange={handlepoTitle}
                        style={{ width: '300px', height: '20px' }}>
                    </textarea>

                    <br />
                    <br />

                    <label>PO Description Thai</label>
                    <br />
                    <textarea htmlFor='des_th'
                        id='des_th'
                        value={poDesthai}
                        onChange={handleDesthai}
                        style={{ width: '300px', height: '50px' }}>
                    </textarea>

                    <br />
                    <br />

                    <label>PO Description English</label>
                    <br />
                    <textarea htmlFor='des_en'
                        id='des_en'
                        value={poDeseng}
                        onChange={handleDeseng}
                        style={{ width: '300px', height: '50px' }}>
                    </textarea>

                </div>

                <div className="footer">
                    <button onClick={(event => submitNumberpo(event, poMapping) && closepoModal(false))}>Add PO Detail</button>
                </div>


            </div>
        </div>


    )
}

export default Poaddmodal