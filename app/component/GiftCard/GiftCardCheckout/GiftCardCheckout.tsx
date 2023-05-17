import styles from './style.module.css';

const GiftCardCheckout: React.FC = () => {
    return(
        <div className={styles['Gift_checkout_wrap']}>
            <div className={styles['Gift_checkout_main']}>
                <div className={styles['Gift_checkout_main_top']}>
                    <img src="assets/svg/spotify.svg" />
                    <img src="assets/svg/edit.svg" />
                </div>
                <div className={styles['Gift_checkout_main_bottom']}>
                    <span>Spotify Gift Card</span>
                    <span>£30.00</span>
                </div>
            </div>
            <div className={styles['divide']}></div>
            <div className={styles['Gift_checkout_detail']}>
                <div className={styles['Gift_checkout_detail_top']}>
                    <span className={styles['checkout_label']}>Redeemable in</span>
                    <div className='flex items-center gap-1'>
                        <img src="assets/svg/ukFlag.svg" />
                        <span>United Kingdom</span>
                    </div>
                </div>
                <div className={styles['Gift_checkout_detail_bottom']}>
                    <span className={styles['checkout_label']}>Sending to</span>
                    <span>hello@jemmaeagleson.co.uk</span>
                </div>
            </div>
        </div>
    )
}

export default GiftCardCheckout;