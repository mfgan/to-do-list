const AddTasksBtn=({onClick,text='Add Tasks'})=>{
    return(
        <div
        onClick={onClick}
        style={{ borderRadius: 10 }}
        className="closeBtnFooter"
      >
        {text}
      </div>
    )
}
export default AddTasksBtn