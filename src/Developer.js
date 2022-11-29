import React from 'react'
import './App'
import background from './index.css'

export default function Developer() {
  return (
    <div className ='background' style={{ backgroundImage: `url(${background})` }}>
        <h1>Samantha Johnson</h1>

        <h3> Developer of the Donut Maker </h3>

            <p>Hello, and welcome to my game the Donut Maker.</p>
            <p>I am junior software developer, aspiring to learn as much as I can.</p>
            <p>If you have enjoyed my game and would like to contact me, please do!</p>
            <p><br />Thank You!</p>

        <h3><br />Contact Information</h3>

            <a href="mailto:samanthamariejae@gmail.com">
                <img id="infoicons" src="./src/images/email.png" width="65px" alt="Email" />
            </a>
            <a href="tel:(216) 282-7204">
                <img id="infoicons" src="./src/images/telephone.png" width="65px" alt="telephone" />
            </a>
            
        <h3>Links</h3>

        <div>
            <a href="https://SamanthaJ2.github.io/">
                <img id="infoicons" src="./src/images/B&WProfilePic1.jpg" width="50px" alt='Samantha' />
                </a>
            <a href="https://www.github.com/SamanthaJ2">
                <img id="infoicons" src="./src/images/github.png" width="50px" alt='GitHub' />
            </a>
            <a href="https://www.linkedin.com/in/samanthajohnson11/"> 
                <img id="infoicons" src="./src/images/LinkedIn.jpg" width="50px" alt='Lindedin' />
            </a>
            <a href="src/Samantha.Johnson.Resume.Copy(1).pdf" download="Samantha.Johnson.Resume">
                <img id="infoicons" src="./src/images/download.png" width="46px" alt='Download' />
            </a>
        </div>
    </div>
    )
}