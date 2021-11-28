import React, {FC, useState} from 'react';
import style from './App.module.scss'
import {observer} from 'mobx-react-lite';
import {TreeMenu} from './main/components/promotionLevels/TreeMenu';
import {TabControl} from './main/components/promotionLevels/TabControl';


export const App: FC = observer(() => {
    const [showTabControl, setShowTabControl] = useState(false)


    return (
        <div className={style.wrap}>
            <div className={style.treeMenu}><TreeMenu setShowTabControl={setShowTabControl}/></div>
            {
                showTabControl && <div className={style.tabControl}><TabControl/></div>
            }

        </div>
    );
})

