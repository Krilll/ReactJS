import React, { Component, Fragment } from 'react'
//import ReactDom from 'react-dom'
import './Footer.css'

export default class FooterText extends Component {
    render () {
        return (
            <Fragment>
                   { <div className = 'footerText'>
                       <p> &#169; Your Website 2019 </p>
                   </div> }
            </Fragment>
        )
    }
}