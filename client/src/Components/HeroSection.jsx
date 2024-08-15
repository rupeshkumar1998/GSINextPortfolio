import React from 'react';

const HeroSection = () => {
  return (
   
      <div style={styles.heroBackgroundR}>R</div>
      
        
 
  );
};

const styles = {

  heroBackgroundR: {
    position: 'absolute',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '320px',
    fontBorder: '1px solid white',
    color: 'rgba(28, 4, 37, 0.126)',
    WebkitTextStroke: '2px rgba(134, 63, 182, 0.217)',
    zIndex: '1',
  },

};

export default HeroSection;
