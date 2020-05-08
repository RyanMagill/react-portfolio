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
    src: 'https://via.placeholder.com/1000x200',
    altText: 'Budget Backpacker',
    caption: 'Budget Backpacker',
    github: 'https://backpackertraveler.herokuapp.com/',
  },
  {
    src: 'https://via.placeholder.com/1000x200',
    altText: 'Design-a-Date',
    caption: 'Design-a-Date',
    github: 'https://christopherneill.github.io/GroupProject/',
  },
  {
    src: 'https://via.placeholder.com/1000x200',
    altText: 'Scheduler',
    caption: 'Scheduler',
    github: 'https://christopherneill.github.io/GroupProject/',
  },
  {
    src: 'https://via.placeholder.com/1000x200',
    altText: 'Readme Generator',
    caption: 'Readme Generator',
    github: 'https://github.com/RyanMagill/Readme-Generator',
  },
  {
    src: 'https://via.placeholder.com/1000x200',
    altText: 'Budget-Tracker',
    caption: 'Budget-Tracker',
    github: 'https://github.com/RyanMagill/Budget-Tracker',
  },
  {
    src: 'https://via.placeholder.com/1000x200',
    altText: 'Employee-Directory',
    caption: 'Employee-Directory',
    github: 'https://github.com/RyanMagill/EmployeeDir',
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
