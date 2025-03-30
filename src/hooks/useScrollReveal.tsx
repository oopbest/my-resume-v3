import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = (selector: string, options = {}) => {
  useEffect(() => {
    ScrollReveal().reveal(selector, {
      distance: "50px",
      duration: 1000,
      opacity: 0,
      easing: "ease-in-out",
      reset: true,
      ...options,
    });
  }, [selector, options]);
};

export default useScrollReveal;
