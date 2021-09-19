import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopUp=({title,description,disableOkBtn,CloseBtn,okBtn})=>{
    return(
        <div className="wrapperContainer">
        <div className="popUpWrapper">
            <div className='popUpHeader'>
            <h3>{title}</h3>
            <FontAwesomeIcon onClick={CloseBtn} className='CloseBtn' icon={faTimes}/>
            </div >
            <div  className='popUpBody'>
                  {description}
            </div>
            <div  className='popUpFooter'>
                 {CloseBtn&& <button onClick={CloseBtn} className='closeBtnFooter'>
                        Close
                    </button>}
                    {okBtn&&<button  disabled={disableOkBtn} onClick={okBtn} className='closeBtnFooter'>
                        Ok
                    </button>}
            </div>
        </div>
        </div>
    )
}
export default PopUp 