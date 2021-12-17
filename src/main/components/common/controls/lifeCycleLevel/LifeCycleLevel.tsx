import React, {FC, memo} from 'react';
import style from './LifeCycleLevel.module.scss'
import {PropertiesControl} from '../PropertiesControl';
import {lifeCycleLevelData} from './LifeCycleLevelData';


export const LifeCycleLevel: FC = memo(() => {
    // const {propertiesControl} = useStore()

    return (
        <>
            {/*TabControl*/}
            <div className={style.tabControlButtons}>
                <button>Свойства</button>
                <button>Безопасность</button>
                <button>Действия над объектом</button>
            </div>

            <div>
                <PropertiesControl data={lifeCycleLevelData}/>
            </div>
        </>
    )
})
