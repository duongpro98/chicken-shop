import React, {useState, useEffect} from "react";
import ProductItem from "./ProductItem";
import styles from "./Products.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import ArrowRight from "@/utils/icon/ArrowRight";

const products = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1578051696754-4652a8f67882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        imgHover: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Adult chicken",
        price: "100$"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        imgHover: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Adult chicken",
        price: "100$"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1569396327972-6231a5b05ea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        imgHover: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Adult chicken",
        price: "100$"
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1583510383754-35fc1d1eb598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        imgHover: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Adult chicken",
        price: "100$"
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        imgHover: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Adult chicken",
        price: "100$"
    }
];

const Products:React.FC = () => {
    return(
        <div className={styles.container}>
            <button id="prev" className={styles.buttonPrev}></button>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                modules={[Navigation]}
                navigation={{
                    nextEl: '#next',
                    prevEl: '#prev',
                    enabled: true
                }}
                pagination={{
                    clickable: true
                }}
            >
                {
                    products.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <ProductItem item={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <button id="next" className={styles.buttonNext}></button>
        </div>
    )
}


export default Products