import React, { Component } from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import './App.css';
import TimelineStore from "./logicas/TimelineStore";


const store = new TimelineStore();

class App extends Component {
    render() {
        return (
            <div id="root">
                <div className="main">
                    <Header />
                    <Timeline login={this.props.params.login} store={store} />
                </div>
            </div>
        );
    }
}

export default App;