import React, { Component } from 'react';
import './Home.css'

import portrait from '../public/images/PersonalWebsiteColourPallete.png'

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div id='top-div'>
            <div className='side-by-side' id='portrait-section'>
                <div className='side-by-side-child' id='left-side'>
                    <img id='photo-of-eoin' src={portrait}></img>
                </div>
                <div className='side-by-side-child' id='right-side'>
                    <h1>
                        Hi, I'm Eoin.
                    </h1>
                    <p>I'm a 6th form student</p>
                </div>
            </div>
        </div>
    );
  }
}
