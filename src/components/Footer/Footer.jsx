import styles from "./Footer.module.css"
import {Row} from "../Row/Row.jsx";
import {useEffect, useState} from "react";
import {generatePassword} from "../../utils/generatePassword.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faCopy} from "@fortawesome/free-regular-svg-icons";

export function Footer({settings, isError}){
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [isShown, setIsShown] = useState(false)

    useEffect(()=>{
        getPassword();
    },[settings]);

    const getPassword = async()=>{
        if(!isError){
            const password = generatePassword(settings);
            setGeneratedPassword(password);
        }
    }
    const copyToClipboard = ()=>{
        try {
            navigator.clipboard.writeText(generatedPassword);
            alert('Copy to clipboard');
        } catch (error) {
            alert('Failed to copy to clipboard');
        }

    }
    return(
        <>
            {isError &&
                <Row>
                    <span className={styles.error}>Select at least one option to generate a password</span>
                </Row>
            }
            <Row>
                <input type={isShown ? 'text' : 'password'} className={styles.password} value={generatedPassword} disabled/>
                <button type="button" className={styles.btn} onClick={()=>{setIsShown(!isShown)}} title="Show"><FontAwesomeIcon icon={faEye}/></button>
                <button type="button" className={styles.btn} onClick={copyToClipboard} title="Copy"><FontAwesomeIcon icon={faCopy}/></button>
            </Row>
        </>
    )
}