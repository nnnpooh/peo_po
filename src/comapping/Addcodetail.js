import react from "react";
import './Coapp.css'

function Coaddmodal({ closecoModal, coMapping, coNumber, coDesthai, coDeseng, handlecoNumber, handleDeseng, handleDesthai,
    submitNumberco, courseId, handlecourseId
}) {
    return (
        <div className="codatamodalBackground">
            <div className="codatamodalContainer">
                <div className="codatatitleCloseBtn" >
                    <button onClick={() => closecoModal(false)}>X</button></div>

                <div className="title">

                    <h1>Add CO Detail</h1>

                </div>

                <div className="body">

                    <label>Course ID</label>
                    <br />
                    <input
                        value={courseId}
                        onChange={handlecourseId}
                        style={{ width: '100px', height: '15px' }}>

                    </input>
                    <br />
                    <br />

                    <label> CO Number</label>
                    <br />
                    <input
                        value={coNumber}
                        onChange={handlecoNumber}
                        style={{ width: '15px', height: '15px' }}>

                    </input>

                    <br />
                    <br />

                    <label>CO Description Thai</label>
                    <br />
                    <textarea htmlFor='co'
                        id='co'
                        value={coDesthai}
                        onChange={handleDesthai}
                        style={{ width: '300px', height: '50px' }}>
                    </textarea>

                    <br />
                    <br />

                    <label>CO Description English</label>
                    <br />
                    <textarea htmlFor='po'
                        id='po'
                        value={coDeseng}
                        onChange={handleDeseng}
                        style={{ width: '300px', height: '50px' }}>
                    </textarea>

                </div>

                <div className="footer">
                    <button onClick={(event => submitNumberco(event, coMapping) && closecoModal(false))}>Add CO Detail</button>
                </div>


            </div>
        </div>


    )
}

export default Coaddmodal