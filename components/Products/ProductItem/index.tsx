import React, {useEffect, useState} from "react";
import styles from "./ProductItem.module.css";

interface ProductItemObject {
    img: string;
    imgHover: string;
    title: string;
    price: string;
}

interface ProductItem {
    item: ProductItemObject
}

const ProductItem:React.FC<ProductItem> = ({ item }) => {
    const [height, setHeight] = useState(400);
    const [isHover, setIsHover] = useState(false);

    let resizeWindow = () => {
        const width = document.getElementById("imagecolumn").getBoundingClientRect().width;
        setHeight(width);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    return(
        <div className={styles.container}>
            <div
                className={styles.imgContainer}
                id="imagecolumn"
                style={{height: height + 'px'}}
                onMouseOver={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <img src={!isHover? item.img: item.imgHover}/>
                <div
                    className={styles.viewDetail}
                    style={isHover ?
                        {
                            height: 50,
                            transition: 'height 0.3s'
                        }: {}}
                >
                    View Detail
                </div>
            </div>
            <div className={styles.title}>
                {item.title}
            </div>
            <div className={styles.price}>
                {item.price}
            </div>
        </div>
    )
}

export default ProductItem