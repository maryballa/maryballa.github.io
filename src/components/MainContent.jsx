import PersonCard from '../components/PersonCard';
import Carousel from '../components/Carousel';
import '../css/maincontent.css';

function MainContent() {
  return (
    <div className='main-wrap'>
      <div className='main-content'>
        <div>
          <div className='section-label' style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
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
          <div className='carousel-section' style={{ marginTop: '2rem' }}>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
