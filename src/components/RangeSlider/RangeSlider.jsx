import styles from "./RangeSlider.module.css"
import {useState} from "react";
export function RangeSlider({min, max, value, step, onChange}){
    const [sliderRange, setSliderRange] = useState(value);

    const onValueChange = (e) =>{
        const value = e.target.value;
        setSliderRange(e.target.value)
        onChange(value);
    }
    return(
        <div className={styles.rangeSlider}>
            <h3>Length: {sliderRange}</h3>
            <input
                type="range"
                className={styles.slider}
                step={step}
                min={min}
                max={max}
                value={sliderRange}
                onChange={onValueChange}
            />
        </div>
    )
}