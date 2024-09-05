import React from 'react';
// import PropTypes from 'prop-types';
import {Parallax, Background} from 'react-parallax';
import {Container} from 'react-bootstrap';
export default function HomeParallax() {
  return (
    <div className="home-home-parallax">
      {/* <Container fluid> */}
      <Parallax 
              strength={800} 
              style={{height:'300px', backgroundSize:'contain'}}>
                <Background style={{height:'300px', width:'inherit', backgroundSize:'contain'}}>
                  <img src={require('../../images/vr-headset-wallpaper2.jpg')} alt="virtual reality"/>
                </Background>
              </Parallax>
      {/* </Container> */}
    </div>
  );
};
