import styles from './style.module.css';

const GiftSuccess: React.FC = () => {
    return(
        <div className={styles['Gift_success_wrap']}>
            <div className={styles['Gift_success_top']}>
                <img src="assets/svg/gift1.svg" />
                <p>You can preview all of your recent transactions in the account tab</p>
            </div>
            <div className={styles['Gift_success_result']}>
                <div className={styles['Gift_sent_wrap']}>
                    <span>You sent</span>
                    <div className={styles['Gift_sent_detail']}>
                        <img src='assets/svg/eth.svg' />
                        <span>0.044 ETH</span>
                    </div>
                </div>
                <div className={styles['divide']}></div>
                <div className={styles['Gift_checkout_main']}>
                    <div className={styles['Gift_checkout_main_top']}>
                        <img src="assets/svg/spotify.svg" />
                        <span>Spotify Gift Card</span>
                    </div>
                    <div className={styles['Gift_checkout_main_bottom']}>
                        <span>£30.00</span>
                        <span>hello@jemmaeagleson.co.uk</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftSuccess;