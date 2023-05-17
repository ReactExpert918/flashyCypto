import Mark from '../Mark';
import styles from './style.module.css';

interface ButtonFromProps extends React.ComponentProps<"div"> {
    disabled: boolean,
    title: string,
    onClick: any
}

const Button: React.FC<ButtonFromProps> = ({title, disabled = false, onClick}) => {
    return(
        <button 
            className=
                {
                    !disabled ? 
                        styles['button_style'] : 
                        styles['button_style_disabled']
                } 
            onClick={onClick}>
            {title}
            {
                title != "Continue" && (
                    <div className={styles['mark']}>
                        <Mark />
                    </div>
                )
            }
        </button>
    )
}

export default Button;