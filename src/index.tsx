import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {IRootInstance, RootModel} from './main/components/store';

const store = RootModel.create({})
export const StoreContext = createContext<IRootInstance>(store as IRootInstance)

ReactDOM.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

