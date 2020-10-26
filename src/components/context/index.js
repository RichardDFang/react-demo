import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './theme-button';

class Context extends React.Component {
    constructor (props) {
        super();
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }
    render() {
        return (
            <div className="App">
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
            </div>
        )
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton onClick={props.changeTheme}>
                Change Theme
            </ThemedButton>
        </div>
    );
}

export default Context;