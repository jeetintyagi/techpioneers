import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { images } from './data';

import {
  SliderWrapper,
  SliderNextButton,
  SliderPrevButton,
  SliderImages,
} from './SliderElements';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const altVariants = {
  enter: {
    y: -1000,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    y: -1000,
    opacity: 0,
  },
};

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isShowingStates, setIsShowingStates] = useState(false);

  const timeToChangeSliderImage = 5000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (page === 2) {
        setPage([0, 0]);
      }
      setPage([page + 1, 1]);
    }, timeToChangeSliderImage);

    return () => {
      clearTimeout(timeout);
    };
  }, [page]);

  /**
   * Experimenting with distilling swipe offset and velocity into a single variable, so the
   * less distance a user has swiped, the more velocity they need to register as a swipe.
   * Should accomodate longer swipes and short flicks without having binary checks on
   * just distance thresholds and velocity > 0.
   */
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <SliderWrapper>
      <AnimatePresence initial={false} custom={direction}>
        {!isShowingStates ? (
          <SliderImages
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        ) : (
          <SliderImages
            key='base'
            src={images[1]}
            variants={altVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 200 },
              opacity: { duration: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      {/* <SliderNextButton onClick={() => paginate(1)}>{'‣'}</SliderNextButton>
      <SliderPrevButton onClick={() => paginate(-1)}>{'‣'}</SliderPrevButton>
      <button
        style={{ position: 'absolute', top: '30px' }}
        onClick={() => setIsShowingStates(!isShowingStates)}
      >
        {'Swap'}
      </button> */}
    </SliderWrapper>
  );
};

export default Slider;
