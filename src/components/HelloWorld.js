import React, { Component } from 'react'

class HelloWorld extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const style = {
        }
        return (
            <div style={style}>
                <p>Hello from React Boilerplate</p>
            </div>
        )
    }
}

export default HelloWorld