import { useState } from 'react';
import { getMovieData } from '../../services/db';
import List from '../list/List';
import Movie from '../movies/movie';
import './Form.css'
function Form() {
    const [data, setData] = useState([]);
    let [listShow, setListShow] = useState([])
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
                    <div className='formM'>
                    <form onSubmit={handleSubmit}>
                        <p>Искать фильм по названию:</p>
                        <input type='text' placeholder='Spiderman,Shawshank,Redemtion' name='move'></input>
                        <button type='submit'>Click</button>
                    </form>
                    </div>
                    <div className='showList2'>
                        <List titleList={listShow}/>
                    </div>
                </div>

                <div>
                    {
                        data?.map(item => {
                            return (
                                <>
                                    <Movie titleList={listShow}  titleSet={setListShow} title={item.Title} poster={item.Poster} year={item.Year} imdb={item.imdbID} type={item.Type} />
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