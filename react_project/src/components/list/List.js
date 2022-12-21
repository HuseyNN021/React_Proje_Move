import './List.css'
function List({ list,setList }) {
    function removeDatafromList(title){
        const index = list.indexOf(title)
        list.splice(index,1)
        setList([...list])
    }
    return (
        <>
            <div className='list'>
                <input type='text' name='list' ></input>
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

                <button>Kaydet</button>
            </div>
        </>
    )
}
export default List

/* <div className='deleteBtn'>
        {
          props.titleList.map((item)=>{
              return(
                item.title != "" ? <div className='delete'>
                  <p>{item.title} ({item.year})</p>
                  <button onClick={removeBtn}>X</button>
                </div> : null
              )
          })
        }
      </div> */



/* {
    list.map(item=>{
        return(
            <p>
                {item.Title}
            </p>
        )
    })
    
} */