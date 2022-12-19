import { useState } from 'react';
import { getMovieData } from '../../services/db';
import Movie from '../movies/movie';
import './Form.css'
function Form() {
    const [data, setData] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await getMovieData(e.target.move.value)
        setData(result);
        console.log(data);
    }
    return (
        <>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <p>Искать фильм по названию:</p>
                    <input type='text' placeholder='Spiderman,Shawshank,Redemtion' name='move'></input>
                    <button type='submit'>Click</button>
                </form>
                <div>
                    {
                        data?.map(item => {
                            return (
                                <>
                                    <Movie title={item.Title} poster={item.Poster} year={item.Year} imdb={item.imdbID} type={item.Type}/>
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