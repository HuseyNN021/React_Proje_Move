import './List.css'
import {Link} from 'react-router-dom'
import { useRef, useState } from 'react'

function List({ list,setList }) {
    const listInput=useRef(0)
    
    function removeDatafromList(title){
        const index = list.indexOf(title)
        list.splice(index,1)
        setList([...list])
    }
    const [value,setValue]=useState('')
    const goToList=()=>{
        
        if(listInput.current.value.length!=0){
            setValue(listInput.current.value)
            
        }
        console.log(listInput.current.value);
    }

    return (
        <>
            <div className='list'>
                <input type='text' ref={listInput} name='list' ></input>
                <ul>
                    {
                        list?.map((item, index) => {
                            return (
                                <>
                                    <li>
                                        <div className='delBtn'>
                                            <p>{item}</p>
                                            <button onClick={()=>{removeDatafromList(item)}} className='delete'>X</button>
                                        </div>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>

               {
                value.length>0?<Link to={'/link'}>go to list</Link>:<button onClick={goToList}>Kaydet</button>
                }
            </div>
        </>
    )
}
export default List

