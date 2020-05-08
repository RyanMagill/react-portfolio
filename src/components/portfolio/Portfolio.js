import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
} from 'reactstrap';

import './portfolio.css';

const items = [
  {
    src: './public/Assets/Budget Backpacker.png',
    altText: 'Budget Backpacker',
    caption: 'Budget Backpacker',
    github: 'https://backpackertraveler.herokuapp.com/',
  },
  {
    src: '/imgs/screenshot-project1.png',
    altText: 'Design-a-Date',
    caption: 'Design-a-Date',
    github: 'https://christopherneill.github.io/GroupProject/',
  },
];

const Portfolio = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionHeader={item.caption}
          captionText={(
            <a rel="noopener noreferrer" target="_blank" href={item.github}>
              {item.github}
            </a>
          )}
        />
      </CarouselItem>
    );
  });

  return (
    <Container className="portfolio">
      <h2>Portfolio:</h2>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </Container>
  );
};

export default Portfolio;
