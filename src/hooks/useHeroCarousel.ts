import { useEffect, useState } from "react";
import useInterval from "./useInterval";

interface Props {
  className: string;
  timeout: number;
}

const hiddenClassName = 'carousel-hidden';
const visibleClassName = 'carousel-visible';
export const carouselClassNames = {
  hidden: hiddenClassName,
  visible: visibleClassName,
};
export const carouselStyle = {
  [`&.${carouselClassNames.hidden}`]: {
    opacity: 0,
    zIndex: 1,
  },
  [`&.${carouselClassNames.visible}`]: {
    opacity: 1,
    zIndex: 2,
  },
};

/**
 * Cycles through a list of elements based on the `className` and `timeout` provided.
 * 
 * #### Example:
 * 
 *     const className = '.hero';
 *     const timeout = 7000;
 * 
 *     useHeroCarousel({ className, timeout });
 * 
 * @param className `className` for the elements to target
 * @param timeout Time to display each item in milliseconds
 */
export function useHeroCarousel({ className, timeout }: Props) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const elements = document.querySelectorAll(className);

  const handleUpdateCarousel = () => {
    if (carouselIndex === elements.length - 1) {
      return setCarouselIndex(0);
    }
    setCarouselIndex(carouselIndex + 1);
  };

  useInterval(handleUpdateCarousel, timeout);

  useEffect(() => {
    const handleCarousel = (index: number) => {
      const previousElement = elements[index - 1] || elements[elements.length - 1];
      const currentElement = elements[index];

      previousElement.classList.replace(carouselClassNames.visible, carouselClassNames.hidden);
      currentElement.classList.replace(carouselClassNames.hidden, carouselClassNames.visible);
    };

    if (elements.length) {
      handleCarousel(carouselIndex);
    }
  }, [
    carouselIndex,
    className,
    elements,
  ]);
}
