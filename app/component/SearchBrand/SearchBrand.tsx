import styles from './style.module.css';

interface SearchBrandFromProps extends React.ComponentProps<"div"> {
    onClick: any
}

const SearchBrand: React.FC<SearchBrandFromProps> = ({onClick}) => {
    const itemData = [
        {
            title: "Spotify",
            icon: "spotify"
        },
        {
            title: "airbnb UK",
            icon: "airbnb"
        },
        {
            title: "Amazon UK",
            icon: "amazon"
        },
        {
            title: "Playstation UK",
            icon: "playstation"
        },
        {
            title: "Careem UAE",
            icon: "careem"
        },
        {
            title: "Tik Tok",
            icon: "tiktok"
        }
    ];
    return(
        <div className={styles['Search_brand_wrap']}>
            {itemData.map((value, index) => 
                <div key={index} className={styles['Search_brand_item']} onClick = {() => {onClick(value)}}>
                    <div className={styles['Search_brand_item_icon']}>
                        <img src={`assets/svg/${value.icon}.svg`} />
                    </div>
                    <div className={styles['Search_brand_item_title']}>{value.title}</div>
                </div>  
            )}
        </div>
    )
}

export default SearchBrand;