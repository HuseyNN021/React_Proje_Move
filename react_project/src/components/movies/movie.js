import { useState } from 'react'
import List from '../list/List';
import './movie.css'

function Movie(props) {
    function addList() {
        props.titleSet(`${props.title} (${props.year})`)
        console.log(props.titleList);
    }

    return (
        <>
            <div className="showPoster">
                <img src={props.poster} alt='omg' height='150px' width='120px'></img>
                <div className="infoMovie">
                    <h1>{props.title} ({props.year})</h1>
                    <p><b>Type: </b>{props.type}</p>
                    <button type='button' onClick={addList} className='showBtn'>Add to List</button>
                </div>
            </div>
        </>
    )
}
export default Movie