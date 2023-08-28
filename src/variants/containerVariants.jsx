export const container = {
  offscreen: { opacity: 1, scale: 0 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  offscreen: { opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};

export const listVariants = {
  offscreen: {
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1.5,
    },
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 2.8,
      when: "beforeChildren",
      delayChildren: 0.5,
      staggerChildren: 1.25,
    },
  },
};

export const itemVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  close: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const scrollVariants = {
  offscreen: {
    x: -30,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      // type: "spring",
      // bounce: 0.1,
      duration: 1,
    },
  },
};

export const scaleVariants = {
  offscreen: {
    scale: 1000,
    opacity: 0,
    x: 0,
    // y: 500,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    x: 0,
    // y: 0,
    transition: {
      // type: "spring",
      // bounce: 1.1,
      duration: 1.8,
    },
  },
};
