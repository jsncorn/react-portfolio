import React from 'react';
import Resume from './resume.pdf';
import './resume.css';

export default function resume() {
  return (
    <div id='resume' class='resume'>
      <iframe title='resume' src={Resume} width="100%" height="100%" />
    </div>
  )
}
