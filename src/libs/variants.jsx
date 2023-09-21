export const list = {
  initial: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
