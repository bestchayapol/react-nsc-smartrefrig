import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './components/Firebase';
import { ItemProvider } from './components/item/context'
ReactDOM.render(
        <ItemProvider>
                <App />
        </ItemProvider>,
        document.getElementById('root')
)
serviceWorker.unregister()

