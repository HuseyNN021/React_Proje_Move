import { useState } from 'react'
import './movie.css'

function Movie(props) {
let [list,setList]=useState('')
function addList(){
setList([`${props.title} (${props.year})`])
console.log(list);

}
    return (
        <>
            <div className="showPoster">
                <img src={props.poster} alt='omg' height='150px'></img>
                <div className="infoMovie">
                    <h1>{props.title} ({props.year})</h1>
                    <button type='button' onClick={addList} className='showBtn'>ADD</button>
                </div>
            </div>
        </>
    )
}
export default Movie