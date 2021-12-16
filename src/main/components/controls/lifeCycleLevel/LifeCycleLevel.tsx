import React, {FC, memo, useState} from 'react';
import style from './LifeCycleLevel.module.scss'
import {lifeCycleLevelData} from './LifeCycleLevelData';
import {PropertiesControl} from '../../common/propertiesControl/PropertiesControl';


export const LifeCycleLevel: FC = memo(() => {
    // const {propertiesControl} = useStore()

    const [nameWidth, setNameWidth] = useState<number>(600)
    const [valueWidth, setValueWidth] = useState<number>(600)

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
                                                                    field={field}
                                                                    nameWidth={nameWidth}
                                                                    setNameWidth={setNameWidth}
                                                                    valueWidth={valueWidth}
                                                                    setValueWidth={setValueWidth}/>)}
            </div>
        </>
    )
})

