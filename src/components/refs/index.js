import React from 'react'

const FancyButton = React.forwardRef((props, ref) => {
    return (
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
    )
})

class Refs extends React.Component {

    render() {
        const ref = React.createRef();
        return <FancyButton ref={ref}>Click me!</FancyButton>;
    }
}

export default Refs;