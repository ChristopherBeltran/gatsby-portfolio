import PropTypes from 'prop-types'
import React from 'react'
import stashapp from '../images/stashapp.jpg'
import pawsitive from '../images/pawsitive.jpg'
import concert from '../images/concert.png'
import fantasy from '../images/fantasy.jpg'

import Stack from './Stack.js'

class Main extends React.Component {

  handleProjectsClick =  () => {
    //this.props.onCloseArticle();
    this.props.onOpenArticle('projects')
  }
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>

          <p>
          Hi, I'm Chris Beltran <span role="img">👋🏼</span>, a Full Stack Software Engineer located in Denver, CO.  With over 10 years of experience in the technology industry as a Quality Assurance Manager, I am eager to apply the skills I've learned to a engineering position. After finishing Flatiron School of Software and Engineering's bootcamp in August of 2019, I knew the dev world was for me.           
          </p>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>

          <p>While at Flatiron School of Software and Engineer's bootcamp, I worked on various projects. After completing the bootcamp, I fine-tuned these projects with enhanced features and I'm continuing to develop more. 
          </p>
          <hr />
          <h3 className="major">
          Stash App
          </h3>
          <p>
            News aggregate app allowing users to curate a custom news page and save articles.
            <span className="image main">
            <img src={stashapp} alt="" />
            <br></br>
            <ul className="icons" style={{textAlign: 'center'}}>
            <li>
              <a
                href="https://github.com/ChristopherBeltran/stash-app-client"
                className="icon fa-github"
                style={{ float: 'left' }}
              >
              </a>
              <a
              href="https://stashapp.herokuapp.com/"
              className="icon fa-external-link"
              style={{ float: 'left' }, { marginLeft: '0px'}}
              target="_blank"
              ></a>
              <p style={{ display: 'inline' }}>
                <b style={{ paddingLeft: '10px'}}>Stack:</b> Javascript, React, Rails API, Material-UI
              </p>
            </li>
            <li>
            </li>
            </ul>
          </span>
          </p>
          <hr />
          <h3 className="major">
          Pawsitive Outreach
          </h3>
          <p>
            Mock pet adoption platform with Omniauth social login and admin backdoor login.
            <span className="image main">
            <img src={pawsitive} alt="" />
            <br></br>
            <ul className="icons" style={{textAlign: 'center'}}>
            <li>
              <a
                href="https://github.com/ChristopherBeltran/pawsitive_outreach"
                className="icon fa-github"
              >
              </a>
              <p style={{ display: 'inline' }}>
                <b style={{ paddingLeft: '10px'}}>Stack:</b> Javascript, Rails, Bootstrap
              </p>
            </li>
            </ul>
            </span>
          </p>
          <hr />
          <h3 className="major">
          Concert Scrapbook
          </h3>
          <p>
            Application for a user to log concerts they've attended, demonstrating complex database relationships.
            <span className="image main">
            <img src={concert} alt="" />
            <br></br>
            <ul className="icons" style={{textAlign: 'center'}}>
            <li>
              <a
                href="https://github.com/ChristopherBeltran/concert-scrapbook"
                className="icon fa-github"
              >
              </a>
              <a
              href="https://concert-scrapbook.herokuapp.com"
              className="icon fa-external-link"
              style={{ float: 'left' }, { marginLeft: '10px'}}
              target="_blank"
              ></a>
              <p style={{ display: 'inline' }}>
                <b style={{ paddingLeft: '10px'}}>Stack:</b> Ruby, Sinatra, Bootstrap
              </p>
            </li>
            </ul>
            </span>
          </p>
          <hr />
          <h3 className="major">
          Fantasy Projections
          </h3>
          <p>
          A Command Line Interface program that scrapes the Fantasy Pros website and provides the user with their projected stats.
            <span className="image main">
            <img src={fantasy} alt="" />
            <br></br>
            <ul className="icons" style={{textAlign: 'center'}}>
            <li>
              <a
                href="https://github.com/ChristopherBeltran/fantasy-projections"
                className="icon fa-github"
              >
              </a>
              <p style={{ display: 'inline' }}>
                <b style={{ paddingLeft: '10px'}}>Stack:</b> Ruby
              </p>
            </li>
            </ul>
            </span>
          </p>
          <hr />

          {close}
        </article>

        <article
          id="stack"
          className={`${this.props.article === 'stack' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Stack</h2>
          <Stack></Stack>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/christopherbeltran24/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ChristopherBeltran"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:christod.beltran@gmail.com"
                className="icon fa-google"
              >
                <span className="label">GMail</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
