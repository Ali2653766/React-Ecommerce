import React, { useState } from "react";
import Product from "./Product";
import "./slide-product.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

function SlideProduct({ data, title }) {
  if (!data || data.length === 0) {
    return <p>No products available in this category.</p>;
  }

  return (
    <div className="slide-products slide">
      <div className="container">
        <div className="top-slide">
          <h2 className="product-slide-title">{title}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio modi
            hic id quam delectus, magnam voluptatibus recusandae tenetur quis
            ullam sit perspiciatis exercitationem, aliquid quas non rem vitae
            dolorem numquam?
          </p>
        </div>

        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Product
                  item={item}
                  id={item.id}
                  title={item.title}
                  thumbnail={item.images[0]}
                  price={item.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
