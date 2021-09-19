const DropDownCard=({data})=>{
  
    return(
        <div className='dropDownContainer'>
            {
                data.map(w=>{
                    return(
                        <div onClick={()=>console.log(w.name)}>
                            {w.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DropDownCard