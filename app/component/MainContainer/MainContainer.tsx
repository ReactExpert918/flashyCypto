'use client'
import { useState } from "react";
import FlashFeature from "../FlashFeature/FlashFeature";
import GiftCard from "../GiftCard/GiftCard";
import styles from "./style.module.css";

const MainContainer: React.FC<{}> = () => {
    const [status, setStatus] = useState(false);
    const onClickItem = () => {
        setStatus(!status);
    }

    return(
        <div className={styles['MainLayout_container']}>
            <div>
                {
                    !status ? <FlashFeature onClick={onClickItem} /> : <GiftCard onClickItems={onClickItem} />
                }
            </div>
            <span className={styles['MainLayout_dollar_coin']}>
                <img alt="MainLayout Dollar Coin" src="assets/svg/dollar.svg" />
            </span>
            <span className={styles['MainLayout_eth_coin']}>
                <img alt="MainLayout Dollar Eth Coin" src="assets/svg/ethDollar.svg" />
            </span>
        </div>
    )
}

export default MainContainer;