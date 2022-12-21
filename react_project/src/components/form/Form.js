import { useState } from 'react';
import { getMovieData } from '../../services/db';
import List from '../list/List';
import Movie from '../movies/movie';
import './Form.css'
function Form({list,setList}) {
    const [data, setData] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.target.move.value) {
            const result = await getMovieData(e.target.move.value)
            setData(result);
        }
        console.log(data);
    }
    return (
        <>
            <div className='form'>
                <div className='main'>
                    <form onSubmit={handleSubmit}>
                        <p>Искать фильм по названию:</p>
                        <input type='text' placeholder='Spiderman,Shawshank,Redemtion' name='move'></input>
                        <button type='submit'>Click</button>
                    </form>
                </div>

                <div>
                    {
                        data?.map(item => {
                            return (
                                <>
                                    <Movie movieData={data} id={item.imdbID} setList={setList} list={list}/>
                                </>

                            )
                        }
                        )
                    }
                </div>
            </div>

        </>
    )
}
export default Form;

// title={item.Title} poster={item.Poster} year={item.Year} imdb={item.imdbID} type={item.Type} 