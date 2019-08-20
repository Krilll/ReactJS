import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component, useState  } from 'react'
import ReactDom from 'react-dom'
import Menu from './components/Layout/Menu'
import ButtonLogin from './components/Layout/Button'
import Content from './components/Layout/Content'
import Container from './components/Layout/Container'

const items_menu = [
    {href: '/', title: 'Home'},
    {href: '/news', title: 'News'},
    {href: '/lorem', title: 'Lorem'},
    {href: '/ipsum', title: 'Ipsum'},
    {href: '/neque', title: 'Neque'}
];
const button = {name: 'Login', id: 'login'};
const items_article = [
    {title: 'Lorem ipsum dolor sit amet', article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, massa a convallis pharetra, augue lectus fermentum ex, eu elementum neque nibh vel libero. Ut egestas fringilla erat at dictum. Phasellus sed ultricies massa. Curabitur accumsan congue orci, ac imperdiet dolor congue a. Duis sem nunc, tempor quis turpis eu, commodo ullamcorper risus. Sed viverra neque hendrerit felis tincidunt facilisis. Duis rutrum dolor sed lorem gravida tincidunt. Praesent sapien mi, finibus nec faucibus nec, vestibulum eget purus. Fusce ultricies nibh et eros placerat congue. Donec vel augue tincidunt augue porttitor efficitur eget id est. Donec sit amet ligula sed leo iaculis pellentesque. Mauris faucibus consectetur sem, ac vehicula massa pretium a. Nullam vel enim erat.'},
    {title: 'Sed sed mi et turpis accumsan venenatis', article: 'Sed sed mi et turpis accumsan venenatis. Maecenas consectetur, lectus dapibus rhoncus sollicitudin, elit neque interdum nunc, ac vestibulum diam odio id mi. Quisque velit odio, aliquet nec pretium nec, elementum ac nunc. In id risus velit. In ullamcorper et arcu at tempor. Proin at nisl eget quam venenatis ullamcorper. Curabitur sed sagittis enim. Sed aliquam neque id dui viverra suscipit. Donec mollis ipsum id consectetur faucibus. Donec mauris lacus, tempor non elit id, sollicitudin malesuada metus. Proin vel nisl dictum, laoreet mauris in, ultricies dolor.'},
    {title: 'Praesent consequat mi et imperdiet rhoncus', article: 'Praesent consequat mi et imperdiet rhoncus. Duis consectetur lectus a ligula varius ornare. Curabitur pellentesque turpis eu nulla mollis, et aliquet est pretium. Maecenas non sem non mi posuere tincidunt quis non risus. Donec in euismod leo, nec pulvinar turpis. Suspendisse imperdiet cursus purus nec consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquet augue odio, vitae facilisis risus vestibulum quis. Quisque aliquam accumsan lorem id faucibus. In posuere et libero in pharetra. Duis dapibus ut leo a ultrices. Curabitur vulputate magna enim, at vestibulum ipsum volutpat et. Duis id turpis nunc. Cras eget purus sapien.'},
];

class App extends Component {
    render () {
        return (
                <Container>
                    <Menu items_menu = { items_menu } className = { 'mainMenu' }></Menu>
                    <Menu items_menu = { items_menu } className = {'saidMenu' }></Menu>
                    <div id = 'loginButton'></div>
                    <div className='news'>
                        <Content items_article = { items_article }></Content>
                    </div>
                </Container>
        )
    }
}

ReactDom.render (<App />, document.querySelector ('#layout'));
ReactDom.render (<ButtonLogin button = { button } />, document.querySelector ('#loginButton'));