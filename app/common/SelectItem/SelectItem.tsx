
import styles from './style.module.css';

interface SelectItemFromProps extends React.ComponentProps<"div"> {
    title: string,
    icon: string,
    check: string
}

const SelectItem: React.FC<SelectItemFromProps> = ({title, icon, check}) => {
    return(
        <div className={styles['SearchCountry_container']}>
            <div className={styles['SearchCountry_container_top']}>
                <div className={styles['SearchCountry_container_top_country']}>
                    <img src={`assets/svg/${icon}.svg`} />
                    <span>{title}</span>
                </div>
                <div className={styles['SearchCountry_container_top_edit']}>Edit</div>
            </div>
            {
                check == 'uk' && (
                    <div className={styles['SearchCountry_container_bottom']}>
                        <img src="assets/svg/check.svg" />
                        <span>We can see you are in the UK, change this if necessary</span>
                    </div>
                )
            }
        </div>
    )
}

export default SelectItem;