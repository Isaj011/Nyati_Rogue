import React from 'react';
// import logo from './logo.svg';
//import Portfolio from './components/Portfolio'
import './App.css';
import isaj from './assets/img/isma-art.jpg'
import smiley from './assets/img/smiley-art.jpg'
import risa from './assets/img/risa-art.png'
import svg from './assets/img/reSvgNyatiLogo.svg'
import nyatiLogo from './assets/img/nyatiRogue.svg'
import designerLogo from './assets/img/smiley-art.svg'
import developerLogo from './assets/img/isma-art.svg'

function App() {
  /*const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    },
    {
      title: 'Pizza',
      caption: 'I love pizza!'
    }
  ]*/

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top" id="svg"><img src={svg} alt="" id="svg" /></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
         {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
  </li>*/}
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead" id="page-top">
    <div className="container">
      <div className="intro-text">
        <div className=" type-script" data-text="Welcome to Nyati_Rogue">Welcome to Nyati_Rogue</div>
        {/* <div className="intro-heading text-uppercase">---</div> */}
        <a className="scroll-down" href="#team">
            <div className="mouse">
                <span></span>
            </div>
            <div className="arrow">
                <span></span>
                {/* <span></span> */}
            </div>
        </a>
      </div>
    </div>
  </header>

  
  

   {/*<Portfolio portfolioLinks={portfolioLinks}></Portfolio>*/}

  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase text-secondary">About</h2>
          <h3 className="section-subheading textB">Our line of work.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="text-secondary">Graphic design</h4>
                  {/* <h4 className="subheading"></h4> */}
                </div>
                <div className="timeline-body">
                  <p className="textB">Design is not just about making things look good. Instead its a powerful tool of coommunication and influence.
                  It aids to deliver high-quality products and services that lead to better user experience and happier customers.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
              <img className="rounded-circle img-fluid" id="logo" src={designerLogo} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  {/* <h4></h4> */}
                  {/* <h4 className="subheading"></h4> */}
                </div>
                <div className="timeline-body">
                  <p className="textB">At Nyati_Rogue we have specialized in different fields of design. We have deep knowledge of Adobe Illustrator, Adobe Design
                  , Animation where we work with 2D/ 3D characters, animate and then render them. It takes great joy in what we do, we love to solve problems and make improvements.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="text-secondary">Development</h4>
                  {/* <h4 className="subheading"></h4> */}
                </div>
                <div className="timeline-body">
                  <p className="textB">Nyati_Rogue specializes in system development ranging from mobile(crossplatform) to web development and support which will lead to recognition and success of your business. We rely heavily on our experience,
                  knowledge and professionalism to adapt tech to eunique challenges in business and society and deliver precisely tailored solutions. We offer a full-cycle web development services, 
                  utilizing a combination of both artistic capabilities and technical knowledge to develop awesome front-end experiences with robust and secure back-end solution.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
              <img className="rounded-circle img-fluid" id="logo" src={developerLogo} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  {/* <h4></h4> */}
                  {/* <h4 className="subheading"></h4> */}
                </div>
                <div className="timeline-body">
                  <p className="textB">Nyati_Rogue align mostly with Full-Stack developers highly experienced with most efficient and modern languages. This includes front-end frameworks such as JavaScript including
                  React, Vue and Svelte; back-end frameworks such as DenoJS and NodeJs including REST and GraphQL API; responsive framewworks i.e Bootstrap and Materialize; Databases i.e MongoDb and MySQL; penetration technique and tools etc. 
                  At Nyati_Rogue technology is our greatest passion and we are always keeping up with the latest trends and we project to work more with Artificial Inteligence(AI) and 
                  Block Chain Technologies.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" id="logo" src={nyatiLogo} alt=""/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
  <section className="page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          {/* <h3 className="section-subheading textB"></h3> */}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={risa} alt=""/>
            <h4>Risa</h4>
            <p className="textB">Lead Editor</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-google"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={isaj} alt=""/>
            <h4>Isaj</h4>
            <p className="textB">Lead Developer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-google"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={smiley} alt=""/>
            <h4>Smiley</h4>
            <p className="textB">Lead Designer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-google"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large textB">We have expert content strategist with great experience focused on creating content road maps, web content, blogs, 
          articles, press releases and more.</p>
        </div>
      </div>
    </div>
  </section>
  {/*<section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>*/}
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          {/* <h3 className="section-subheading textB">Lorem ipsum dolor sit amet consectetur.</h3> */}
        </div>
      </div>
      {/*<div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>*/}
    </div>
  </section>
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          {/* <h2 className="section-heading text-uppercase">Details</h2> */}
           <h3 className="section-subheading textB">_____________</h3> 
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-secondary"></i>
            <i className="fa fa-google fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Google</h4>
          <p className="textB">Gmail: yole.maneahk@gmail.com</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-secondary"></i>
            <i className="fa fa-github fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Github</h4>
          <p className="textB">Github: @Isaj011</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-secondary"></i>
            <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Instagram</h4>
          <p className="textB">Instagram: @Nyati_Rogue</p>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Nyati Rogue 2020</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
