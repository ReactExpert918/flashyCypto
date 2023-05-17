import { useState } from 'react';
import styles from './style.module.css';

const GiftSelectedAmount: React.FC = () => {
    const [selectStatus, setSelectStatus] = useState(false);
    const [selectStatus1, setSelectStatus1] = useState(false);
    const [amount, setAmount] = useState('Select amount');
    const [quantity, setQuantity] = useState(0);

    const onClickAmount = () => {
        setSelectStatus(!selectStatus);
        setSelectStatus1(false);
    }

    const onClickQuantity = () => {
        setSelectStatus1(!selectStatus1);
        setSelectStatus(false);
    }
    return(
        <div className={styles['GiftSelected_container_wrap']}>
            <button 
                onClick={() => {onClickAmount()}} 
                className={selectStatus ? styles['GiftSelected_amount_container_active'] : styles['GiftSelected_amount_container']}
            >
                <span>Gift card value</span>
                <div className={styles['GiftSelected_amount_wrap']}>
                    <span>{amount}</span>
                    <img src='assets/svg/downArrow.svg' />
                </div>
                {
                    selectStatus && (
                        <div id="myDropdown" className={styles["dropdown-content"]}>
                            <a onClick={() => {setAmount('Ethereum Network')}}>Ethereum Network</a>
                            <a onClick={() => {setAmount('Polygon Network')}}>Polygon Network</a>
                            <a onClick={() => {setAmount('Solana Network')}}>Solana Network</a>
                        </div>
                    )
                }
            </button>
            <button 
                onClick={() => {onClickQuantity()}} 
                className={selectStatus1 ? styles['GiftSelected_quantity_container_active'] : styles['GiftSelected_quantity_container']}
            >
                <p>Quantity</p>
                <div className={styles['GiftSelected_quantity_wrap']}>
                    <span>{quantity}</span>
                    <img src='assets/svg/downArrow.svg' />
                </div>
                {
                    selectStatus1 && (
                        <div id="myDropdown" className={styles["dropdown-content"]}>
                            <a onClick={() => {setQuantity(1)}}>1</a>
                            <a onClick={() => {setQuantity(2)}}>2</a>
                            <a onClick={() => {setQuantity(3)}}>3</a>
                        </div>
                    )
                }
            </button>
        </div>
    )
}

export default GiftSelectedAmount