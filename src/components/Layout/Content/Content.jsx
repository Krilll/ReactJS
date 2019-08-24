import React, { Component, Fragment } from 'react'
//import ReactDom from 'react-dom'
import './Content.css'

export default class Content extends Component {
    render () {
        const {items_article} = this.props;
        return (
            <Fragment>
                { items_article.map (el => <div className = "article" key = { el.id }> <h4> { el.title } </h4> <p> { el.article } </p> </div>) }
            </Fragment>
        )
    }
}