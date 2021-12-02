import React, {FC} from 'react';
import style from './ObjectTypes.module.scss'
import {observer} from 'mobx-react-lite';
import {PropertiesControl} from '../../common/propertiesControl/PropertiesControl';
import {objectTypesData} from './ObjectTypesData';


export const ObjectTypes: FC = observer(() => {
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
            <div className={style.tabControlContainer}>
                {objectTypesData.map(field => <PropertiesControl key={field.propertyName} field={field}/>)}
            </div>
        </>
    )
})