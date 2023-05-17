
import styles from './style.module.css';

interface SearchbarFromProps extends React.ComponentProps<"div"> {
    placeholder: string
}

const Searchbar: React.FC<SearchbarFromProps> = ({placeholder}) => {
    return(
        <div className={styles['Search_input_wrap']}>
            <span className={styles['Search_icon']}>
                <img src='assets/svg/searchIcon.svg' />
            </span>
            <input className={styles['Search_input']} placeholder={placeholder} />
        </div>
    )
}

export default Searchbar;