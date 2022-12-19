import { useState } from "react"
import { getMovieData } from "../../services/db"

function Movie(...props){
    return(
        <>
            <h1>{props.title}</h1>
        </>
    )
}
export default Movie