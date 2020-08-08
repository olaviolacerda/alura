import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Button extends Component {

    logout() {
        browserHistory.push(this.props.url);
    }

    render() {
        return (
            <input className="logout" type="submit" value={this.props.label} onClick={this.logout.bind(this)}/>
        )
    }
}
