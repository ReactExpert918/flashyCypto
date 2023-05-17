import styles from './style.module.css';

interface ProgressProps extends React.ComponentProps<"div"> {
    percentage: number
}

const Progress: React.FC<ProgressProps> = ({percentage}) => {
    return(
        <div className={styles['Progress_wrap']}>
            <span className={styles['Progress_active_bolt']} style={{left: `${percentage - 3}%`}}>
                <img src="assets/svg/mark.svg" />
            </span>
            <div className={`${styles["Progress_progress"]}`} style={{width: `${percentage}%`}}></div>
            <span className={styles['Progress_faded_bolt']}>
                <img src="assets/svg/markLight.svg" />
            </span>
        </div>
    )
}

export default Progress;