import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import YouTube from 'react-youtube';
import HomeParallax from './HomeParallax';
import PricingTable from './PrcingTable';
import { useEffect } from 'react';

export default function WelcomePage() {
  useEffect(()=> {
    let sky = document.querySelector('a-sky');
    sky.addEventListener('componentinitialized', () => {
      sky.setAttribute("animation", {property: 'rotation', to: '0 360 0', dur: '50000', easing: 'linear', loop: 'true'});
    })
  });
  return (
    <div className="home-welcome-page" id="home">
      <Navbar bg="light" expand="lg" className="navbar" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand href="/" className="nav-logo">
          <h5 className='brand-logo'>DAIMO<span><img src={require('../../images/vr-logo.png')} alt=""/></span>VIRTUAL</h5>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Item>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link id="features" href="#features">Features</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link id="explore" href="#explore">Our Story</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link id="team" href="#team">What We Do</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link id="pricing" href="#pricing">Pricing</Nav.Link>
            </Nav.Item>
            
          </Nav>
      </Navbar.Collapse>
      </Navbar>
      <Container fluid className="descriptor">
        <a-scene embedded vr-mode-ui="enabled: false" loading-screen="enabled:false" >
          <a-assets>
            <img id="description" src="https://aframe.io/aframe/examples/boilerplate/panorama/puydesancy.jpg" alt=""/>
          </a-assets>
          <a-sky className="image-360" src="#description" embedded></a-sky>
        </a-scene>
      </Container>
      <Container className="app-intro">
        <Row>
          <Col lg={12}>
            <h1 className="app-title">We <span className="title-highlight1">create </span>immersive <span className="title-highlight2">virtual-reality </span>content & <span className="title-highlight1">publish </span>memorable <span className="title-highlight2">stories</span></h1>
          </Col>
        </Row>
        <Row>
          <Col lg={12} >
            <Button size="lg" variant="danger">
            <i class="fa fa-play-circle-o" aria-hidden="true"></i>  Behind the Scenes</Button>
          </Col>
        </Row>
        
      </Container>

      <section id="features">
      <HomeParallax/>
      <Container fluid className="features" id="features">
      <Row className="feature-container">
          <Col lg={3} className="feature-cell-1" >
            <h4>Panoramic Photos & Videos</h4>
            <p> We create 360-wide panoramic photos and videos that consumers of these content can use virtual reality headsets. Social-media platforms like YouTube and Facebook support this technology so you can reach a wide audience. </p>
            {/* <Button size="lg" variant="outline-light"><i class="fa fa-play-circle-o" aria-hidden="true"></i>  Watch a Demo</Button> */}
          </Col>
          <Col lg={3} className="feature-cell-2" >
            <h4>360 Live Streams & Vlogs</h4>
            <p> For content-creators who would like to live stream an event at a location or engage with virtual audience with vlogs, panoramic videos will allow you a more creative space of capturing the attention of your audience.</p>
            {/* <Button size="lg" variant="outline-light"><i class="fa fa-play-circle-o" aria-hidden="true"></i>  Watch a Demo</Button> */}
          </Col>
          <Col lg={3} className="feature-cell-3" >
            <h4>Virtual Tours</h4>
            <p> We simulate existing locations using combinations of still panoramic images so that viewers of your content can have an immersive and interactive experience that offers superior marketing media for restaurants, homes, hotels etc</p>
            {/* <Button size="lg" variant="outline-light"><i class="fa fa-play-circle-o" aria-hidden="true"></i>  Watch a Demo</Button> */}
          </Col>
        </Row>
      </Container>
      </section>
      <section id="explore">
      
        
      <Container fluid>
        <h2 style={{fontFamily:'Hiruko, sans-serif', paddingTop:'60px', marginBottom:'60px'}}>Experience some of the immersive stories we published for various industries:</h2>
        <Row lg={12}  className="explore-row">
            <Col sm>
              <h5>Real Estate</h5>
                <Container style={{height:'200px', width:"300px", backgroundColor:'#000000'}}>
                  <YouTube videoId="TpmIV3LwVok" opts={{height:'200px', width:"300px"}}/>
                </Container>
            </Col>
            <Col sm>
            <h5>Short Film</h5>
              <Container style={{height:'200px', width:"300px", backgroundColor:'#000000'}}>
                <YouTube videoId="3NUHiNhXATw" opts={{height:'200px', width:"300px"}}/>
              </Container>
            </Col>
            <Col sm>
            <h5>Art Galleries</h5>
              <Container style={{height:'200px', width:"300px", backgroundColor:'#000000'}}>
                <YouTube videoId="apPD5tzYtrM" opts={{height:'200px', width:"300px"}}/>
              </Container>
            </Col>
        </Row>
        <Row lg={12} className="explore-row">
            <Col sm>
            <h5>Contruction Works</h5>
              <Container style={{height:'200px', width:"300px", backgroundColor:'#000000'}}>
                <YouTube videoId="MWAMdGI0c-8" opts={{height:'200px', width:"300px"}}/>
              </Container>
            </Col>
            <Col sm>
            <h5>Destinations & Attractions</h5>
              <Container style={{height:'200px', width:"300px", backgroundColor:'#000000'}}>
                <YouTube videoId="zB1DgEzVkdY" opts={{height:'200px', width:"300px"}}/>
              </Container>
            </Col>
            <Col sm>
            <h5>Hotels & Accomodations</h5>
              <Container style={{height:'200px', width:"300px", backgroundColor:'#000000'}}>
                <YouTube videoId="TpmIV3LwVok" opts={{height:'200px', width:"300px"}}/>
              </Container>
            </Col>
        </Row>
      
      </Container>
      </section>
      <section id='team'>
        <div class="navy-line"></div>
        <h2 style={{fontFamily:'Hiruko, sans-serif'}}> Our Workflow</h2>
        <VerticalTimeline style={{height:"inherit"}}>
          <VerticalTimelineElement
            iconStyle={{background: 'rgb(16, 204, 82)', color: '#000' }}
            icon={<img src={require('../../images/calender-vector-schedule-5.svg')} style={{background: 'rgb(16, 204, 82)', color: '#000',height:'90%', marginTop:'2px', borderRadius:'50%',marginLeft:'4px'}}alt=""/>}
            date="Today"
            >
              <h5>Booking</h5>
              <hr/>
              <p>Potential clients are allowed to book a session and ask for assistance while on this site. Once you book a desired tier, we will contact you to plan for filming of your story.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{background: 'rgb(16, 204, 82)', color: '#000' }}
            icon={<img src={require('../../images/camera-icon.svg')} style={{background: 'rgb(16, 204, 82)', color: '#000',height:'90%', marginTop:'2px', borderRadius:'50%'}}alt=""/>}
            date="Field Day"
            >
              <h5>Filming</h5>
              <hr/>
              <p>On the day of filming, we will work with you to capture and consult you in order to capture your desired story adequately.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{background: 'rgb(16, 204, 82)', color: '#000' }}
            icon={<img src={require('../../images/film-strip-cut-edit-scissors-512.svg')} style={{background: 'rgb(16, 204, 82)', color: '#000',height:'90%', marginTop:'2px', borderRadius:'50%'}}alt=""/>}
            date="Studio Time (1-2 Days)"
            >
              <h5>Editing</h5>
              <hr/>
              <p>Once we finish filing your story, we will edit and stitch the content we captured to your satisfaction. The editing period depends on you preferences of a worthy an satisfactory content.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{background: 'rgb(16, 204, 82)', color: '#000' }}
            icon={<img src={require('../../images/video-upload.svg')} style={{background: 'rgb(16, 204, 82)', color: '#000',height:'90%', margin:'6px', borderRadius:'50%'}}alt=""/>}
            date="Final Day"
            >
              <h5>Publishing</h5>
              <hr/>
              <p>When you are satisfied with the final product, you choose one of the virtual reality supported social media platforms at which we will upload and publish your story.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </section>
    <section id="pricing">
      <PricingTable/>
    </section>
    <section id="contact" class="gray-section contact">
    <Container>
        <div class="row m-b-lg">
            <div class="col-lg-12 text-center">
                <div class="navy-line"></div>
                <h3 style={{fontSize: '35px'}}>Contact Us</h3>
            </div>
        </div>
        <Row style={{justifyContent:'center', color:'#676a6c',marginBottom:'10px'}}>
          <Col lg={12}>
            <address style={{textAlign:'center', justifyContent:'center'}}>
              <strong><span class="navy">Daimo Virtual, Inc.</span></strong><br/>
              Springette Office Park, Spring Valley<br/>
              Nairobi 00604, Kenya<br/>
              <abbr title="Phone">P:</abbr> (254) 708-357878
            </address>
          </Col>
         
          
      </Row>
      <Row>
        <Col lg={12}>
          <Button  variant="success">Send us mail</Button>
            <p style={{marginTop:'10px', marginBottom:'10px', color:'#676a6c'}}>
              Or follow us on social platform
            </p>
            <ul class="list-inline social-icon">
              <li><a href="#"><i class="fa fa-twitter"></i></a>
              </li>
              <li><a href="#"><i class="fa fa-facebook"></i></a>
              </li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a>
              </li>
            </ul>
        </Col>
      </Row>
      <Row style={{justifyContent:'center'}}>
        <Col lg={8} >
          <p><strong>&copy; 2024 Daimo Virtual</strong><br/></p>
        </Col>
      </Row>
    </Container>
</section>
    </div>
  );
}
