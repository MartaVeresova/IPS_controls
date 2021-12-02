import React, {FC, useState} from 'react';
import style from './App.module.scss'
import {observer} from 'mobx-react-lite';
import {LifeCycleLevel} from './main/components/controls/lifeCycleLevel/LifeCycleLevel';
import {RootTree} from './main/components/RootTree';
import {ObjectTypes} from './main/components/controls/objectTypes/ObjectTypes';


export const App: FC = observer(() => {
    const [isLifeCycleLevelOpen, setIsLifeCycleLevelOpen] = useState(false)
    const [isObjectTypesOpen, setIsObjectTypesOpen] = useState(false)

    return (
        <div className={style.wrap}>
            <div className={style.treeMenu}>
                <RootTree setIsLifeCycleLevelOpen={setIsLifeCycleLevelOpen}
                          setIsObjectTypesOpen={setIsObjectTypesOpen}
                          isObjectTypesOpen={isObjectTypesOpen}
                />
            </div>
            {isLifeCycleLevelOpen && <div><LifeCycleLevel/></div>}
            {isObjectTypesOpen && <div><ObjectTypes/></div>}
        </div>
    )
})

