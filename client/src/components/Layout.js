import React, { Component } from 'react';
import io from 'socket.io-client'

const socketUrl = "http://localhost/3000"

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            socket: null
        }
    }

    componentWillMount() {
        this.initSocket()
    }

    initSocket = () => {
        const socket = io(socketUrl)
        socket.on('connect', () => {
            console.log('connected')
        })
        this.setState({socket})
    }

    render() {
        const {title} = this.props
        return (
            <div className="container">
                {title}
            </div>
        )
    }
}