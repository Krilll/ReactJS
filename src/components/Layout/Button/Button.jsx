import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react'
import { Modal, Button } from 'react-bootstrap';
//import ReactDom from 'react-dom'
import './Button.css'

class Trigger extends Component{
    constructor(props) {
        super(props);
        this.state = { show: props.modal };
    }
    componentWillReceiveProps(nextProps){
        if(this.state.show !== nextProps.modal){
            this.setState({show: nextProps.modal})
        }
    }
    render(){
        let close = () => this.setState({ show: false});
        return (
            <div className = "modal-container">
                <Modal show = { this.state.show } onHide = { close } container = { this }
                    aria-labelledby = "contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title id = "contained-modal-title">Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <label>Login</label>
                            <input type = 'text' className = "loginName"/>
                            <label>Password</label>
                            <input type = 'text' className = "loginPassword"/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle = "primary">Save</Button>
                        <Button onClick = { close }>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default class ButtonLogin extends Component{
    constructor (props){
        super(props);
        this.state = { show: false };
    }
    render() {
        const { button } = this.props;
        const openModel = () => this.setState({ show: true});
        return <div>
            <Trigger modal = { this.state.show } />
            <Button className = 'button' onClick = { openModel }>
                { button.name }
            </Button>
        </div>
    }
}
