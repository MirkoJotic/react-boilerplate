import React, { Component } from 'react'

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            intervalId: null,
            countFrom: 0,
            currentCount: 0,
            canStart: true 
        }
        this.handleClick = this.handleClick.bind(this)
        this.startCountDown = this.startCountDown.bind(this)
        this.stopCountDown = this.stopCountDown.bind(this)
    }
    startCountDown() {
        this.setState({
            currentCount: this.state.countFrom,
            canStart: false
        })
        const iid = window.setInterval(() => {
            this.setState({currentCount: this.state.currentCount - 1})
            if(this.state.currentCount === 0) {
                this.stopCountDown()
            }
        }, 1000)
        this.setState({ intervalId: iid })
    }
    stopCountDown() {
        this.setState({
            currentCount: 0,
            canStart: true
        })
        window.clearInterval(this.state.intervalId)
    }
    handleClick() {
        if(this.state.canStart) {
            this.startCountDown()
        } else {
            this.stopCountDown()
        }
    }
    handleChange(evt) {
        this.setState({
            countFrom: evt.target.value
        })
    }
    render() {
        return (
            <div className="count-down">
                { this.state.currentCount ? '' : <input onChange={(evt) => this.handleChange(evt)} type="number" /> }
                <span>{ this.state.currentCount }</span>
                <button onClick={ this.handleClick }>{ this.state.canStart ? 'Start' : 'Cancel' }</button>
            </div>
        )
    }
}

export default CountDown