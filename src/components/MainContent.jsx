import PersonCard from '../components/PersonCard';
import Carousel from '../components/Carousel';
import '../css/maincontent.css';

function MainContent() {
  return (
    <div className='main-wrap'>
      <div className='main-content'>
        <div>
          <div className='section-label'>
            About
          </div>
          <PersonCard />
        </div>

        <div>
          <div className='section-header'>
            <span className='section-label'>Work</span>
            <h1>Projects</h1>
            <p>A collection of academic and personal projects — all available on my GitHub.</p>
          </div>
          <div className='carousel-section'>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
