import styles from './style.module.css';

const GiftCardCheckPay: React.FC = () => {
    return(
        <div className={styles['Gift_checkout_pay']}>
            <div className={styles['Gift_checkout_pay_top']}>
                <button className={styles['NetworkDropdown']}>
                    <img src='assets/svg/network.svg' />
                    <span>Ethereum Mainnet</span>
                    <img src='assets/svg/downArrow.svg' />
                </button>
                <div className={styles['Network_confirm']}>
                    <img src="assets/svg/yellowConfi.svg" />
                    <span>Ensure network is correct</span>
                </div>
            </div>
            <div className={styles['Gift_checkout_pay_bottom']}>
                {/* <span>Choose a token to pay with</span>
                <img src='assets/svg/downArrow.svg' /> */}
                <div className={styles['pay_price_wrap']}>
                    <span>You Pay</span>
                    <span>0.034</span>
                </div>
                <div className={styles['pay_balance_wrap']}>
                    <span>Balance: 0.0</span>
                    <div className={styles['pay_token']}>
                        <img src='assets/svg/eth.svg' />
                        <span>ETH</span>
                        <img src='assets/svg/downArrow.svg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftCardCheckPay;