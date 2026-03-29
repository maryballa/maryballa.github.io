import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/carousel.css';

import arduinoImg from '../assets/images/arduino.png';
import hotelImg from '../assets/images/hotel.png';
import linuxImg from '../assets/images/linux-bash.png';
import olivettiImg from '../assets/images/olivetti.png';
import sudokuImg from '../assets/images/sudoku.png';
import mylibraryImg from '../assets/images/mylibrary.png';

const data = [
  {
    id: 'slide-1',
    image: olivettiImg,
    title: 'Face Detection',
    description: 'Face detection using the Olivetti Face Dataset in Matlab.',
    tag: 'Computer Vision',
  },
  {
    id: 'slide-2',
    image: arduinoImg,
    title: 'Alerting Device',
    description: 'Arduino doorbell system for hearing-impaired individuals using motion sensor + vibration motor.',
    tag: 'Embedded Systems',
  },
  {
    id: 'slide-3',
    image: hotelImg,
    title: 'Hotel Booking',
    description: 'Team project — hotel booking application built in Java.',
    tag: 'OOP · Java',
  },
  {
    id: 'slide-4',
    image: linuxImg,
    title: 'MyShell',
    description: 'Team project — custom Linux shell implementation in C.',
    tag: 'Linux · C',
  },
  {
    id: 'slide-5',
    image: sudokuImg,
    title: 'Sudoku',
    description: 'Sudoku game with a built-in puzzle generator, started as a Java tutorial follow-along.',
    tag: 'Java',
  },
  {
    id: 'slide-6',
    image: mylibraryImg,
    title: 'My Library',
    description: 'Simple web app for managing a personal book library, using Java Servlets and MySQL.',
    tag: 'Web · Java',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
};

function Carousel() {
  return (
    <div className='car-wrap'>
      {/* Desktop: grid layout */}
      <div className='projects-grid'>
        {data.map((item) => (
          <div className='projects-grid-item' key={item.id}>
            <ProjectCard
              name={item.title}
              image={item.image}
              description={item.description}
              tag={item.tag}
            />
          </div>
        ))}
      </div>

      {/* Mobile: slider */}
      <div className='projects-slider-wrap'>
        <Slider {...sliderSettings}>
          {data.map((item) => (
            <div key={item.id}>
              <ProjectCard
                name={item.title}
                image={item.image}
                description={item.description}
                tag={item.tag}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
