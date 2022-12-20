import './List.css'
function List(props) {
    console.log();
    return (
        <>
            <div className='list'>
                <input type='text' name='list' ></input>
                <div className='deleteBtn'>
                    <p>{props.titleList}</p>
                </div>
                <button>Kaydet</button>
            </div>
        </>
    )
}
export default List