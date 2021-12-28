import React, {FC, memo, useState} from 'react';
import style from './App.module.scss'
import {RootTree} from './main/components/RootTree';
import {PropertiesControl} from './main/components/options/controls/properties/PropertiesControl';


export const App: FC = memo(() => {
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
                {isLifeCycleLevelOpen &&
                    <div><PropertiesControl type={'lifeCycleLevelType'}/></div>}
                {isObjectTypesOpen &&
                    <div><PropertiesControl type={'objectTypesType'}/></div>}
            </div>
        </>
    )
})

