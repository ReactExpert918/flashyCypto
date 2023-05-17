import Mark from '../Mark';
import styles from './style.module.css';

interface MainHeaderProps extends React.ComponentProps<"div"> {
    featureScreen: boolean,
    title: string,
    onClickBack: any
}

const MainHeader: React.FC<MainHeaderProps> = ({ onClickBack, featureScreen = true, title }) => {
    return(
        <div className={styles['MainHeader']}>
            {
                featureScreen ? <Mark /> : <img className='cursor-pointer' src="assets/svg/leftArrow.svg" onClick={() => {onClickBack()}} />
            }
            <h4 className={styles['MainHeader_title']}>{title}</h4>
            <button className={styles['MainHeader_button']}>
                <img src="assets/svg/hamburg.svg" />
            </button>
        </div>
    )
}

export default MainHeader;