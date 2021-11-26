import React, {FC} from 'react';
import style from './App.module.scss'
import {TabControl} from './promotionLevels/TabControl';


export const App: FC = () => {
    return (
        <div className={style.wrap}>
            <TabControl/>
        </div>
    );
}

