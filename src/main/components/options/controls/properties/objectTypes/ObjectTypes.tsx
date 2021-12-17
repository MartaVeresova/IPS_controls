import React, {FC, memo} from 'react';
import style from './ObjectTypes.module.scss'
import {PropertiesControl} from '../PropertiesControl';
import {objectTypesData} from './ObjectTypesData';


export const ObjectTypes: FC = memo(() => {
    // const {propertiesControl} = useStore()

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
            <div>
                <PropertiesControl data={objectTypesData}/>
            </div>
        </>
    )
})