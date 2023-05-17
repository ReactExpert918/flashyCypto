import styles from './style.module.css';

const GiftSelectedAmount: React.FC = () => {
    return(
        <div className={styles['GiftSelected_container_wrap']}>
            <div className={styles['GiftSelected_amount_container']}>
                <p>Gift card value</p>
                <select>
                    <option value="saab" selected>Selected Amount</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className={styles['GiftSelected_quantity_container']}>
                <p>Quantity</p>
                <select>
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
        </div>
    )
}

export default GiftSelectedAmount