import React, { Component, Fragment } from 'react'
//import ReactDom from 'react-dom'
import './Header.css'
import imageMain from './Image/mainImage.jpg'
//import imageAbout from './Image/aboutImage.jpg'

export default class HeaderImage extends Component {
    render () {
        const {image} = this.props;
        //const images = [{src: 'mainImage.jpg', name: imageMain},
           // {src: 'aboutImage.jpg', name: imageAbout}];
       // let img = (src) => {
           // images.map( el => {if(el.src === src) {
               // return el.name;}});
        //при постановки фукнции в src не выводит картинку
       // };
        return (
            <Fragment>
                { <p className = 'mainImage'><img src = { imageMain } alt = { image.alt }/></p> }
            </Fragment>
        )
    }
}

