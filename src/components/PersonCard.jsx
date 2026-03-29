import React from 'react';
import '../css/personcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function PersonCard() {
  return (
    <div className='person-card'>
      <h2 className='card-title'>About Me</h2>
      <div className='card-bio'>
        <div className='bio-row'>
          <span className='bio-icon'><FontAwesomeIcon icon={faGraduationCap} /></span>
          <span>
            <strong>Education</strong>
            B.Sc. in Computer Science and Biomedical Informatics, University of Thessaly
          </span>
        </div>
        <div className='bio-row'>
          <span className='bio-icon'><FontAwesomeIcon icon={faAddressBook} /></span>
          <span>
            <strong>Email</strong>
            <a href='mailto:ballamariab@gmail.com' className='unilink'>ballamariab@gmail.com</a>
          </span>
        </div>
        <div className='bio-row'>
          <span className='bio-icon'><FontAwesomeIcon icon={faGithub} /></span>
          <span>
            <strong>GitHub</strong>
            <a href='https://github.com/maryballa' className='unilink' target='_blank' rel='noreferrer'>
              maryballa
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
