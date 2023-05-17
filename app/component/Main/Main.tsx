import Mark from '@/app/common/Mark';
import MainContainer from '../MainContainer/MainContainer';
import styles from './style.module.css';

const Main: React.FC<{}> = () => {
    return(
        <div className={styles['MainLayout']}>
            <div className={styles['MainLayout_heading']}>
                <h1 className={styles['MainLayout_heading_title']}>
                    Swap cash<br />
                    <span className={styles['MainLayout_heading_middle']}>in a</span>
                    <span className={styles['MainLayout_heading_bottom']}>flash</span>
                    <div className={styles['MainLayout_heading_Mark']}>
                        <Mark />
                    </div>
                </h1>
                <a className={styles['LearnMore']} href='/'>
                    Learn More
                    <img alt='arrow' src='assets/svg/arrow.svg' />
                </a>
            </div>
            <div className={styles['MainLayout_content']}>
                <MainContainer />
            </div>
        </div>
    )
}

export default Main;