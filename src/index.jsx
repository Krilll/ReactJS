import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Menu from './components/Layout/Menu'
import HeaderImage from './components/Layout/Header'
//import ButtonLogin from './components/Layout/Button'
import Content from './components/Layout/Content'
import Container from './components/Layout/Container'
import FooterText from './components/Layout/Footer'

const items_menu = [
    {href: '/index.html', title: 'home', id: 'menuHome'},
    {href: '/about.html', title: 'about', id: 'menuAbout'},
    {href: '/posts.html', title: 'posts', id: 'menuPosts'},
    {href: '/contact.html', title: 'contact', id: 'menuContact'},
    {href: '/login.html', title: 'login', id: 'menuLogin'}
];
const name_menu = {title: 'dragon life', href: '/index.html', id: 'menuTitle'};
const main_image = {alt: 'Дракон...', src: 'mainImage.jpg'};
//const button = {name: 'Login', id: 'login'};
const items_article = [
    {title: 'Lorem ipsum dolor sit amet', article: 'Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit. Donec accumsan, massa a convallis pharetra, ' +
            'augue lectus fermentum ex, eu elementum neque nibh vel libero. Ut egestas ' +
            'fringilla erat at dictum. Phasellus sed ultricies massa. Curabitur accumsan ' +
            'congue orci, ac imperdiet dolor congue a. Duis sem nunc, tempor quis turpis ' +
            'eu, commodo ullamcorper risus. Sed viverra neque hendrerit felis tincidunt ' +
            'facilisis. Duis rutrum dolor sed lorem gravida tincidunt. Praesent sapien mi, ' +
            'finibus nec faucibus nec, vestibulum eget purus. Fusce ultricies nibh et eros ' +
            'placerat congue. Donec vel augue tincidunt augue porttitor efficitur eget id est. ' +
            'Donec sit amet ligula sed leo iaculis pellentesque. Mauris faucibus consectetur sem, ' +
            'ac vehicula massa pretium a. Nullam vel enim erat.', id: 'article1'},
    {title: 'Sed sed mi et turpis accumsan venenatis', article: 'Sed sed mi et turpis accum' +
            'san venenatis. Maecenas consectetur, lectus dapibus rhoncus sollicitudin, elit ' +
            'neque interdum nunc, ac vestibulum diam odio id mi. Quisque velit odio, aliquet ' +
            'nec pretium nec, elementum ac nunc. In id risus velit. In ullamcorper et arcu at ' +
            'tempor. Proin at nisl eget quam venenatis ullamcorper. Curabitur sed sagittis enim. S' +
            'ed aliquam neque id dui viverra suscipit. Donec mollis ipsum id consectetur faucibus. D' +
            'onec mauris lacus, tempor non elit id, sollicitudin malesuada metus. Proin vel nisl ' +
            'dictum, laoreet mauris in, ultricies dolor.', id: 'article2'},
    {title: 'Praesent consequat mi et imperdiet rhoncus', article: 'Praesent consequat mi et ' +
            'imperdiet rhoncus. Duis consectetur lectus a ligula varius ornare. Curabitur pellentesque ' +
            'turpis eu nulla mollis, et aliquet est pretium. Maecenas non sem non mi posuere tincidunt ' +
            'quis non risus. Donec in euismod leo, nec pulvinar turpis. Suspendisse imperdiet cursus ' +
            'purus nec consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ' +
            'aliquet augue odio, vitae facilisis risus vestibulum quis. Quisque aliquam accumsan lorem ' +
            'id faucibus. In posuere et libero in pharetra. Duis dapibus ut leo a ultrices. Curabitur ' +
            'vulputate magna enim, at vestibulum ipsum volutpat et. Duis id turpis nunc. Cras eget' +
            ' purus sapien.', id: 'article3'},
];

/*const about_article = [
    {title: 'Lorem ipsum dolor sit amet', article: 'Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit. Donec accumsan, massa a convallis pharetra, ' +
            'augue lectus fermentum ex, eu elementum neque nibh vel libero. Ut egestas ' +
            'fringilla erat at dictum. Phasellus sed ultricies massa. Curabitur accumsan ' +
            'congue orci, ac imperdiet dolor congue a. Duis sem nunc, tempor quis turpis ' +
            'eu, commodo ullamcorper risus. Sed viverra neque hendrerit felis tincidunt ' +
            'facilisis. Duis rutrum dolor sed lorem gravida tincidunt. Praesent sapien mi, ' +
            'finibus nec faucibus nec, vestibulum eget purus. Fusce ultricies nibh et eros ' +
            'placerat congue. Donec vel augue tincidunt augue porttitor efficitur eget id est. ' +
            'Donec sit amet ligula sed leo iaculis pellentesque. Mauris faucibus consectetur sem, ' +
            'ac vehicula massa pretium a. Nullam vel enim erat. Sed sed mi et turpis accum' +
            'san venenatis. Maecenas consectetur, lectus dapibus rhoncus sollicitudin, elit ' +
            'neque interdum nunc, ac vestibulum diam odio id mi. Quisque velit odio, aliquet ' +
            'nec pretium nec, elementum ac nunc. In id risus velit. In ullamcorper et arcu at ' +
            'tempor. Proin at nisl eget quam venenatis ullamcorper. Curabitur sed sagittis enim. S' +
            'ed aliquam neque id dui viverra suscipit. Donec mollis ipsum id consectetur faucibus. D' +
            'onec mauris lacus, tempor non elit id, sollicitudin malesuada metus. Proin vel nisl ' +
            'dictum, laoreet mauris in, ultricies dolor.', id: 'article4'}
            ];
*/
class Header extends Component {
    render () {
        return (
                <Container>
                    <Menu name_menu = { name_menu } items_menu = { items_menu } ></Menu>
                </Container>
        )
    }
}

class Index extends Component {
    render () {
        return (
            <Container>
                <HeaderImage image = { main_image }></HeaderImage>
                <div className='news'>
                    <Content items_article = { items_article }></Content>
                </div>
            </Container>
        )
    }
}

/*class About extends Component {
    render () {
        return (
            <Container>
                <HeaderImage image = { main_image }></HeaderImage>
                <div className='news'>
                    <Content items_article = { about_article }></Content>
                </div>
            </Container>
        )
    }
}*/

class Footer extends Component {
    render () {
        return (
            <Container>
                <FooterText/>
            </Container>
        )
    }
}

ReactDom.render (<Header />, document.querySelector ('#header'));
ReactDom.render (<Index />, document.querySelector ('#headerIndex'));
//ReactDom.render (<About />, document.querySelector ('#headerAbout'));
ReactDom.render (<Footer />, document.querySelector ('#footer'));
//ReactDom.render (<ButtonLogin button = { button } />, document.querySelector ('#loginButton'));