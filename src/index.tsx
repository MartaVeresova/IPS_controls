import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {RootInstance, RootModel} from './main/components/store';
import {getSnapshot} from 'mobx-state-tree';

const store = RootModel.create({})

export const StoreContext = createContext<RootInstance>(store)
console.log(getSnapshot(store))

ReactDOM.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

