import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {

    return (
        <div>
        <h1>Hello Jenny :P</h1>
        <p>Jenny doesn't wear real shoes.</p>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
