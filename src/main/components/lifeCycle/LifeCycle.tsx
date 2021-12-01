import React, {FC} from 'react';
import style from './LifeCycle.module.scss'
import {observer} from 'mobx-react-lite';
import {PropertiesControl} from '../common/propertiesControl/PropertiesControl';
import {lifeCycleData} from './LifeCycleData';


export const LifeCycle: FC = observer(() => {
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
                {lifeCycleData.map(field => <PropertiesControl key={field.propertyName} field={field}/>)}
            </div>

            {/*<div id="output">!</div>*/}
            {/*<SimpleDropDownExample />*/}
        </>
    )
})