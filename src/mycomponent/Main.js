import React, { Component } from 'react'
import Typical from 'react-typical'

export default class Main extends Component {
  render() {

    return (<>
 
<div class="Main-container">
  <div class="devinfo">
    <div class="info">HELLO world!   🌎</div>
    <div class="Name">I am <span class="nameextended">DEEP</span></div>
    <div class="divdiv">
      <p>

        <span className='deepak'>AND I'M A</span>  <span class="typewritter">
          <Typical
            loop={Infinity}
            steps={[
              "Web Developer",
              1000,
              "Tech Enthusiast",
              1000,
              "ML Enthusiast",
              1000
            ]}
            delay={1000}
            wrapper="span"
            speed={60}
            />
        </span>
      </p>
    </div>
  </div>
</div>
            </>




    )
  }
}
