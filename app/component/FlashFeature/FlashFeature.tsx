import MainHeader from '@/app/common/MainHeader/MainHeader';
import Progress from '@/app/common/Progress/Progress';
import styles from './style.module.css';

interface FlashFeatureFromProps extends React.ComponentProps<"div"> {
    onClick: any
}

const FlashFeature: React.FC<FlashFeatureFromProps> = ({onClick}) => {
    return(
        <div className={styles['SelectWidget_select_container']}>
            <MainHeader onClickBack={() => {}} featureScreen={true} title="Flashy features" />
            <div className={styles['SelectWidget_select_card_wrap']}>
                <button type="button" className={`${styles["SelectWidget_select_card"]} ${styles["SelectWidget_crypto"]}`}>
                    <img src="/assets/svg/crypto.svg" className={styles["SelectWidget_select_img"]} alt="Crypto swaps" />
                    <span className={styles["SelectWidget_select_text"]}>Crypto swaps</span>
                </button>
                <button type="button" className={`${styles["SelectWidget_select_card"]} ${styles["SelectWidget_bank"]}`}>
                    <img src="/assets/svg/bank.svg" className={styles["SelectWidget_select_img"]} alt="Crypto swaps" />
                    <span className={styles["SelectWidget_select_text"]}>Bank accounts</span>
                </button>
                <button onClick={() => {onClick()}}  type="button" className={`${styles["SelectWidget_select_card"]} ${styles["SelectWidget_gifts"]}`}>
                    <img src="/assets/svg/gifts.svg" className={styles["SelectWidget_select_img"]} alt="Crypto swaps" />
                    <span className={styles["SelectWidget_select_text"]}>Gift cards</span>
                </button>
                <button type="button" className={`${styles["SelectWidget_select_card"]} ${styles["SelectWidget_phone"]}`}>
                    <img src="/assets/svg/phone.svg" className={styles["SelectWidget_select_img"]} alt="Crypto swaps" />
                    <span className={styles["SelectWidget_select_text"]}>Phone top-ups</span>
                </button>
                <span className={styles["SelectWidget_center_bolt"]}>
                    <svg width="28" height="28" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4856 16.241C21.3238 16.241 23.9528 21.8976 20.8336 25.596L15.8642 31.4881L14.805 32.7428L9.05701 39.558L10.7356 32.8107L12.9069 24.0885C8.06888 24.0885 5.44 18.432 8.5593 14.7337L13.5293 8.84134L20.3345 0.773438L16.4856 16.241Z" fill="#1FD18F"></path><path d="M28.7216 16.2424C28.7224 16.2424 28.7228 16.2434 28.7223 16.244C23.9396 21.9138 21.2577 25.0932 16.4746 30.7634L15.8632 31.4896L16.719 28.0466C17.2207 26.0358 15.6997 24.0899 13.6271 24.0899H0.667969L13.5273 8.84277L12.6696 12.2858C12.1699 14.2965 13.6909 16.2424 15.7615 16.2424H28.7216Z" fill="#1BF3A4"></path><path d="M17.3194 28.547L16.4756 30.7622L15.8642 31.4883L16.72 28.0453C17.2217 26.0346 15.7006 24.0887 13.6281 24.0887H0.668945L13.9073 23.7376C16.4317 23.6718 18.2161 26.1872 17.3184 28.547H17.3194Z" fill="url(#paint0_linear_614_16678)" ></path><path d="M12.0728 11.7841L12.9165 9.56887L13.528 8.84277L12.6722 12.2858C12.1705 14.2965 13.6915 16.2424 15.7641 16.2424H28.7232L15.4848 16.5935C12.9604 16.6593 11.1761 14.1439 12.0738 11.7841H12.0728Z" fill="url(#paint1_linear_614_16678)" ></path><defs><linearGradient id="paint0_linear_614_16678" x1="0.668945" y1="27.6125" x2="17.5538" y2="27.6125" gradientUnits="userSpaceOnUse"><stop stop-color="#808285"></stop><stop offset="1"></stop></linearGradient><linearGradient id="paint1_linear_614_16678" x1="28.7232" y1="12.7186" x2="11.8384" y2="12.7186" gradientUnits="userSpaceOnUse"><stop stop-color="#808285"></stop><stop offset="1"></stop></linearGradient></defs></svg>
                </span>
            </div>
        </div>
    )
}

export default FlashFeature;