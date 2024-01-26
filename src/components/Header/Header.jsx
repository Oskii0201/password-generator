import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

export function Header(){
    return(
        <div>
            <h1><FontAwesomeIcon icon={faLock}/></h1>
            <h1>Password Generator</h1>
        </div>
    )
}