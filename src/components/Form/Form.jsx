import styles from "./Form.module.css"
import {RangeSlider} from "../RangeSlider/RangeSlider.jsx";
import {useEffect, useState} from "react";
import {Row} from "../Row/Row.jsx";
import {optionName} from "../../constans/optionName.js";

export function Form({settings, setSettings, setIsError}){
    const {passwordLength} = settings;
    const [minLength, setMinLength] = useState();

    useEffect(()=>{
        minLengthHandle();
    },[settings]);

    const minLengthHandle = () =>{
        const trueCount = Object.entries(settings).filter(([key, value]) => key !== 'passwordLength' && Boolean(value)).length;

        if(trueCount > 0){
            setMinLength(trueCount);
            setIsError(false);
        }else{
            setMinLength(1);
            setIsError(true);
        }
    }
    const toogleOptionsHandle = (e)=> {
        const key = e.target.name;
        setSettings(prevSettings => ({
            ...prevSettings,
            [key]: !prevSettings[key],
        }))
    }
    const setPasswordLengthHandle = (value)=> {
        setSettings(prevSettings => ({
            ...prevSettings,
            passwordLength: parseInt(value),
        }))
    }

    return(
        <form className={styles.form}>
            <RangeSlider value={passwordLength} min={minLength} max={50} step={1} onChange={(value)=>setPasswordLengthHandle(value)}/>
            <Row>
                {Object.keys(optionName).map((key)=>(
                    <button
                        type="button"
                        key={key}
                        name={key}
                        onClick={toogleOptionsHandle}
                        className={`${styles.btn} ${settings[key] ? styles.active : ''}`}
                    >
                        {optionName[key]}
                    </button>
                ))}
            </Row>
        </form>
    )
}