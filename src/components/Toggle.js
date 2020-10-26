import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super();
        this.state = {
            on: props.initial
        }
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return this.props.children({
            on: this.state.on,
            toggle: this.toggle
        })
    }
}

export default Toggle;