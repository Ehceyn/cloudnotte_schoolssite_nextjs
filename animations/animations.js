// auth pages animations
const checkMedia =
  typeof window !== "undefined" &&
  window.matchMedia("(min-width:640px)").matches;
export const authRight = {
  initial: {
    opacity: 0,
    x: checkMedia ? "100" : "-100",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: checkMedia ? "100" : "-100",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export const fromBottom = {
  initial: {
    opacity: 0,
    y: "10vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const scaleUp = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const authLeft = {
  initial: {
    opacity: 0,
    backGroundColor: "transparent",
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const Logo = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // ease: "easeInOut",
      type: "spring",
      // stiffness:100,
      damping: 20,
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// MessageModal
export const Message = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // ease: "easeInOut",
      type: "spring",
      // stiffness:100,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Svg animations
export const icon = {
  initial: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  animate: {
    pathLength: 1,
    fill: "#D00404",
  },
};
//   ease: "easeInOut",
