import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Styling/HeroSection.css';
import vido from '../Components/Videos/video-2.mp4'
function HeroSection() {
  return (
    <div className='hero-container' sx={{maxWidth: 'xl'}}>
      <video src={vido} autoPlay loop alt='video'/>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
