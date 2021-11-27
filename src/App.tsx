import React, {FC} from 'react';
import style from './App.module.scss'
import {observer} from 'mobx-react-lite';
import {TabControl} from './main/components/promotionLevels/TabControl';


export const App: FC = observer(() => {
    return (
        <div className={style.wrap}>
            <TabControl/>
        </div>
    );
})

