import { ReactComponentElement } from 'react';
import styles from './style.module.css';

interface ConfirmMsgFromProps extends React.ComponentProps<"div"> {
    content: string
}

const ConfirmMsg: React.FC<ConfirmMsgFromProps> = ({content}) => {
    return(
        <div className={styles['ConfirmMsg_contianer_wrap']}>
            <img src="assets/svg/check.svg" />
            <span>{content}</span>
        </div>
    )
}

export default ConfirmMsg;