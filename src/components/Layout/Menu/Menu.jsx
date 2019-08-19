import React, { Component, Fragment } from 'react'
import ReactDom from 'react-dom'
import './Menu.css'

export default class Menu extends Component {
    render () {
        const {items_menu, className} = this.props;
        return (
            <Fragment>
               <ul className = { className }>
                  { items_menu.map (el => <li> <a href = { el.href } > { el.title } </a></li> ) }
               </ul>
            </Fragment>
        )
    }
}