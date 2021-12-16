import React, {FC, memo, useState} from 'react';
import style from './ObjectTypes.module.scss'
import {PropertiesControl} from '../../common/propertiesControl/PropertiesControl';
import {objectTypesData} from './ObjectTypesData';


export const ObjectTypes: FC = memo(() => {
    // const {propertiesControl} = useStore()

    const [nameWidth, setNameWidth] = useState<number>(600)
    const [valueWidth, setValueWidth] = useState<number>(600)

    return (
        <>
            {/*TabControl*/}
            <div className={style.tabControlButtons}>
                <button>Список</button>
                <button>Свойства</button>
                <button>Атрибуты</button>
                <button>Допустимые связи</button>
                <button>Безопасность</button>
                <button>Схема жизненного цикла</button>
                <button>Формы на тип объекта</button>
                <button>Действия над объектом</button>
            </div>
            <div className={style.tabControlContainer}>
                {objectTypesData.map(field => <PropertiesControl key={field.propertyName}
                                                                 field={field}
                                                                 nameWidth={nameWidth}
                                                                 setNameWidth={setNameWidth}
                                                                 valueWidth={valueWidth}
                                                                 setValueWidth={setValueWidth}/>)}
            </div>
        </>
    )
})