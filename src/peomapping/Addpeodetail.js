import react from "react";
import './Peoapp.css'

function Peoaddmodal({ closepeoModal, peoMapping, peoNumber, peoDesthai, peoDeseng, handlepeoNumber, handleDeseng, handleDesthai,
    submitNumberpeo
}) {
    return (
        <div className="peodatamodalBackground">
            <div className="peodatamodalContainer">
                <div className="peodatatitleCloseBtn" >
                    <button onClick={() => closepeoModal(false)}>X</button></div>

                <div className="title">

                    <h1>Add PEO Detail</h1>

                </div>

                <div className="body">
                    <label> PEO Number</label>
                    <br />
                    <input
                        value={peoNumber}
                        onChange={handlepeoNumber}
                        style={{ width: '20px', height: '20px' }}>

                    </input>

                    <br />
                    <br />

                    <label>PEO Description Thai</label>
                    <br />
                    <textarea htmlFor='co'
                        id='co'
                        value={peoDesthai}
                        onChange={handleDesthai}
                        style={{ width: '300px', height: '50px' }}>
                    </textarea>

                    <br />
                    <br />

                    <label>PEO Description English</label>
                    <br />
                    <textarea htmlFor='po'
                        id='po'
                        value={peoDeseng}
                        onChange={handleDeseng}
                        style={{ width: '300px', height: '50px' }}>
                    </textarea>

                </div>

                <div className="footer">
                    <button onClick={(event => submitNumberpeo(event, peoMapping) && closepeoModal(false))}>Add PEO Detail</button>
                </div>


            </div>
        </div>


    )
}

export default Peoaddmodal