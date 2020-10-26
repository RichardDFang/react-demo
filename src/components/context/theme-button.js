import React from 'react';
import { Button } from 'antd';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <Button
                {...props}
                style={{ backgroundColor: theme.background }}
            >hello</Button>
        );
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;