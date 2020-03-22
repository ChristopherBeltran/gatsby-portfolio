import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import self from '../images/self.png'
import self2 from '../images/self2.png'
import stashapp from '../images/stashapp.jpg'
import js from '../images/js-brands.svg'

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
          <span className="image main">
            <img src={self} alt="" />
          </span>
          <p>
            Hi, I'm Chris 👋🏼, a Full Stack Software Engineer based in Denver, CO.  I have over 10 years of experience in the software industry as a part of Quality Assurance and I am currently seeking my first engineering opportunity.  I have been in the dev world since 2018 when I enrolled in the Flatiron School Software Engineering Bootcamp.  Throughout the bootcamp I completed various projects for my portfolio which you can find <a href="#" onClick={() => {
              this.handleProjectsClick();
            }}>here</a>.
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
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3 className="major">
          Stash App
          </h3>
          <p>
            News aggregate app allowing users to curate a custom news page and save articles.
            <span className="image main">
            <img src={stashapp} alt="" />
            <br></br>
            <ul className="icons">
            <li>
              <a
                href="https://github.com/ChristopherBeltran/stash-app-client"
                className="icon fa-github"
              >
              </a>
            </li>
            <li>
            <img className="icon" src={js} alt=""/>
            </li>
            </ul>
          </span>
          </p>
          <hr />
          <h3 className="major">
          Pawsitive Outreach
          </h3>
          <p>
            Stuff about my pawsitive outreach app with a link to Githup repo, images of tech used and a screenshot of app in use
          </p>
          <hr />
          <h3 className="major">
          Concert Scrapbook
          </h3>
          <p>
            Stuff about my concert scrapbook app with a link to Githup repo, images of tech used and a screenshot of app in use
          </p>
          <hr />
          <h3 className="major">
          Fantasy Projections
          </h3>
          <p>
            Stuff about my fantasy projections app with a link to Githup repo, images of tech used and a screenshot of app in use
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
