import { useState } from 'react';
import { getMovieData } from '../../services/db';
import './Form.css'
function Form() {
    const [data, setData] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await getMovieData(e.target.move.value)
        setData(result);
    }
    return (
        <>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <p>Искать фильм по названию:</p>
                    <input type='text' placeholder='Spiderman,Shawshank,Redemtion' name='move'></input>
                    <button type='submit'>Click</button>
                </form>
            </div>
            <ul>
                {
                    data.map(item => {
                        <li>{item.Title}</li>
                    }
                    )
                }
            </ul>
        </>
    )
}
export default Form;