import styles from "./Row.module.css"
export function Row({children}){
    return(
        <div className={styles.row}>
            {children}
        </div>
    )
}