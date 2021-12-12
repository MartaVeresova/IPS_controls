import React, {FC, memo} from 'react';
import style from './LifeCycleLevel.module.scss'
import {lifeCycleLevelData} from './LifeCycleLevelData';
import {PropertiesControl} from '../../common/propertiesControl/PropertiesControl';


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
            <div className={style.tabControlContainer}>
                {lifeCycleLevelData.map(field => <PropertiesControl key={field.propertyName}
                                                                    field={field}/>)}
            </div>
        </>
    )
})

