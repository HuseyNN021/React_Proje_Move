import { useState } from 'react'
import List from '../list/List';
import './movie.css'

let arr = []
function Movie({ movieData, setList, list, id }) {
    function addList(title) {
        const result=list.includes(title)
        if(!result){
            setList([...list, title])

        }
    }

    return (
        <>
            {
                movieData.map(item => {

                    return (
                        < div className="showPoster">
                            <img src={item.Poster} alt='omg' height='150px' width='120px'></img>
                            <div className="infoMovie">
                                <h1>{item.Title} ({item.Year})</h1>
                                <p><b>Type: </b>{item.Type}</p>
                                <button type='button' onClick={() => { addList(item.Title) }} className='showBtn'>Add to List</button>
                            </div>
                        </div>
                    )

                })
            }

        </>
    )
}
export default Movie