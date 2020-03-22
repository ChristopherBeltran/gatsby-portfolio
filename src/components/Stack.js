import React from 'react'
import Helmet from 'react-helmet';

const Stack = () => (
    <div id="stack">
        <section className="section is-size-4-desktop is-size-5-touch">
        <Helmet
        script={[{
            async: true,
            src: 'https://cdn1.stackshare.io/javascripts/client-code.js',
            charSet: 'utf-8',
        }]}
        />
        <div className="has-text-centered">
        <hr />
        <p className="content">
        I have experience with many modern technologies based on my projects needs.  Below is my current stack taken from StackShare.
        </p>
        <div className="columns">
              <div className="column is-half is-offset-one-quarter stackshare">    
              <a 
    frameBorder="0"
    height="1000px"
    data-theme="dark" 
    data-layers="4,1,2,3" 
    data-stack-embed="true" 
    href="https://embed.stackshare.io/stacks/embed/ec849bc58cda1c1247ec2cde248508"
    >
    StackShare
    </a>
    </div>
    </div>
    </div>
    </section>
    </div>
  )
export default Stack