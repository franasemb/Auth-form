import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperReset = ({
  type,
  disabled,
  children,
  className,
  updateValidated,
  updateItems,
}) => {
  const swiper = useSwiper();

  const onClickHandler = (event) => {
    swiper.slideNext();

    updateItems({ name: "", password: "" });

    updateValidated(false);
  };

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
