import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperButtonNext = ({
  type,
  disabled,
  children,
  className,
  updateValidated,
}) => {
  const swiper = useSwiper();

  const onClickHandler = (event) => {
    swiper.slideNext();

    updateValidated(false);
  };

  if (type === "submit") {
  }
  return (
    <button
      type={type}
      className={className}
      disabled={!disabled}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
