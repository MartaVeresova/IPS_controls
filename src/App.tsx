import React, {FC, useState} from 'react';
import style from './App.module.scss'
import {observer} from 'mobx-react-lite';
import {LifeCycle} from './main/components/lifeCycle/LifeCycle';
import {RootTree} from './main/components/RootTree';
import {ObjectTypes} from './main/components/objectType/ObjectTypes';


export const App: FC = observer(() => {
    const [isPromotionLevelsOpen, setIsPromotionLevelsOpen] = useState(false)
    const [isSharedArchivesOpen, setIsSharedArchivesOpen] = useState(false)

    return (
        <div className={style.wrap}>
            <div className={style.treeMenu}>
                <RootTree setIsPromotionLevelsOpen={setIsPromotionLevelsOpen}
                          setIsSharedArchivesOpen={setIsSharedArchivesOpen}
                />
            </div>
            {isPromotionLevelsOpen && <div><LifeCycle/></div>}
            {isSharedArchivesOpen && <div><ObjectTypes/></div>}
        </div>
    )
})

