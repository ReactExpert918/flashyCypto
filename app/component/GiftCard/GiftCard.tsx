"use client"

import { useState } from 'react';

import MainHeader from '@/app/common/MainHeader/MainHeader';
import Progress from '@/app/common/Progress/Progress';
import SelectItem from '@/app/common/SelectItem/SelectItem';
import Searchbar from '@/app/common/Searchbar/Searchbar';
import styles from './style.module.css';
import SearchBrand from '../SearchBrand/SearchBrand';
import ConfirmMsg from '@/app/common/ConfirmMsg/ConfirmMsg';
import GiftSelectedAmount from '@/app/common/GiftSelectAmount/GiftSelectAmount';
import Button from '@/app/common/Button/Button';
import GiftCardCheckout from './GiftCardCheckout/GiftCardCheckout';
import GiftCardCheckPay from './GiftCardCheckout/GiftCardCheckPay';
import GiftSuccess from './GiftSuccess/GiftSuccess';

interface selectedItem {
    icon: string,
    title: string
}
interface GiftCard {
    onClickItems: any
}

const GiftCard:React.FC<GiftCard> = ({onClickItems}) => {
    const [headerTitle, setHeaderTitle] = useState('Choose a gift card');
    const [selectTitle, setSelectTitle] = useState('United Kingdom');
    const [selectIcon, setSelectIcon] = useState('ukFlag');
    const [check, setCheck] = useState('uk');
    const [step, setStep] = useState(1);
    const [stepBy, setStepBy] = useState(1);

    const onClickItem = (data: selectedItem) => {
        setHeaderTitle('Choose an amount');
        setSelectIcon(data.icon);
        setSelectTitle(data.title);
        setCheck(data.title);
        setStep(step+1);
        setStepBy(stepBy + 1);
    }

    const onClickButton = () => {
        if(stepBy == 2) {
            setStepBy(stepBy + 1);
            setHeaderTitle('Who are you sending to');
        }
        else {
            if(stepBy == 4) {
                setStepBy(stepBy + 1);
                setStep(step + 1);
                setHeaderTitle('Order successful!');
            } else if(stepBy == 3) {
                setStep(step + 1);
                setStepBy(stepBy + 1);
                setHeaderTitle('Checkout');
            }
        }
    }

    const onClickBack = () => {
        if(step == 2) {
            if(stepBy == 3) {
                setHeaderTitle('Choose an amount');
                setStepBy(stepBy - 1);
            } else {
                setHeaderTitle('Choose a gift card');
                setSelectIcon('ukFlag');
                setSelectTitle('United Kingdom');
                setStep(step - 1);
                setStepBy(stepBy - 1);
            }
        } else if(step != 1 && stepBy != 1){
            if(step == 3) {
                setHeaderTitle('Who are you sending to');
            } else {
                setHeaderTitle('Checkout');
            }
            setStep(step - 1);
            setStepBy(stepBy - 1);
        } else {
            onClickItems();
        }
    }
    return(
        <div className={styles['GiftCard_container']}>
            <MainHeader onClickBack={onClickBack} featureScreen={false} title={headerTitle} />
            {
                step != 4 && (
                    <Progress percentage={25 * step} />
                )
            }
            {
                step == 1 ? (
                    <>
                        <p className={styles['GiftCard_container_description']}>
                            We offer gift cards that can be used all over the world so select your recipient’s country to see which are available.
                        </p>
                        <SelectItem title={selectTitle} icon={selectIcon} check={check} />
                        <Searchbar placeholder='Search for a brand' />
                        <SearchBrand onClick={onClickItem} />
                    </>
                ) : step == 2 ? (
                    <>
                        {
                            stepBy == 2 ? (
                                <SelectItem title={selectTitle} icon={selectIcon} check={check} />
                            ) : null
                        }
                        <ConfirmMsg 
                            content=
                            {
                                stepBy == 2 ? 
                                    `Can only be redeemed in the United Kingdom` : 
                                    "You order will be delivered to this email address."
                            } 
                        />
                        {
                            stepBy == 2 ? (
                                <GiftSelectedAmount />
                            ) : (
                                <div className={styles['Send_email_wrap']}>
                                    <span>Email Address*</span>
                                    <input placeholder='Enter email address' />
                                </div>
                            )
                        }
                        <Button disabled={false} title="Continue" onClick={onClickButton} />
                    </>
                ) : step == 3 ? (
                        <>
                            <GiftCardCheckout />
                            <GiftCardCheckPay />
                            <Button disabled={false} title="Confirm Payment" onClick={onClickButton} />
                        </>
                    ) : (
                        <>
                            <GiftSuccess />
                            <ConfirmMsg content="You will recieve your gift card to the above email" />
                            <Button disabled={false} title="Make another swap" onClick={onClickButton} />
                        </>
                    )
            }
        </div>
    )
}
export default GiftCard;