import React, { Component, Fragment } from 'react'
//import ReactDom from 'react-dom'
import './Menu.css'

export default class Menu extends Component {
    render () {
        const {items_menu, name_menu} = this.props;
        return (
            <Fragment>
               <ul className = 'mainMenu'>
                   { <a key = { name_menu.id } className = 'nameMenu' href = { name_menu.href }> { name_menu.title } </a> }
                   { items_menu.map (el => <li key = { el.key }> <a href = { el.href } > { el.title } </a></li> ) }
               </ul>
            </Fragment>
        )
    }
}