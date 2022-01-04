import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {RootInstance, RootModel} from './main/components/store';

const store = RootModel.create({})
export const StoreContext = createContext<RootInstance>(store as RootInstance)

ReactDOM.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

