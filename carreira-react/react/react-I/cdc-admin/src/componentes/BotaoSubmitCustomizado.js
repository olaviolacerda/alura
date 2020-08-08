import React from 'react';

export default class BotaoSubmitCustomizado extends React.Component {
    render() {
        return (
            <div className="pure-control-group">
                <label></label>
                <button type="submit" className="pure-button pure-button-primary">{this.props.label}</button>
            </div>
        );
    }
}