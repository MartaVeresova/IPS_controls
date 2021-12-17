import React, {FC, useState} from 'react';
import style from './App.module.scss'
import {observer} from 'mobx-react-lite';
import {LifeCycleLevel} from './main/components/common/controls/lifeCycleLevel/LifeCycleLevel';
import {RootTree} from './main/components/RootTree';
import {ObjectTypes} from './main/components/common/controls/objectTypes/ObjectTypes';


export const App: FC = observer(() => {
    const [isLifeCycleLevelOpen, setIsLifeCycleLevelOpen] = useState<boolean>(false)
    const [isObjectTypesOpen, setIsObjectTypesOpen] = useState<boolean>(false)

    return (
        <>
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
        </>
    )
})

