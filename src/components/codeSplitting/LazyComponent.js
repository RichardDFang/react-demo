import React, { useState, useRef, useEffect } from 'react';

class LazyComponent extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return <div>我是LazyComponent</div>
    }
}

export default LazyComponent;