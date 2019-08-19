import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Menu from './components/Layout/Menu'
import Container from './components/Layout/Container'

const items = [
    {href: '/', title: 'Home'},
    {href: '/news', title: 'News'},
    {href: '/lorem', title: 'Lorem'},
    {href: '/ipsum', title: 'Ipsum'},
    {href: '/neque', title: 'Neque'}
];

class App extends Component {
    render () {
        return (
                <Container>
                    <Menu items_prop={ items } className={'mainMenu'}></Menu>
                    <Menu items_prop={ items } className={'saidMenu'}></Menu>
                </Container>
        )
    }
}

//ReactDom.render (/Что/, /Куда/)
ReactDom.render (<App />, document.querySelector ('#layout'));