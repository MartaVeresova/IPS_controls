import React, {FC} from 'react';
import style from './TabControl.module.scss'
import {observer} from 'mobx-react-lite';


export const TabControl: FC = observer(() => {

    return (
        <>
            <div className={style.tabControlButtons}>
                <div>
                    <button>Свойства</button>
                    <button>Безопасность</button>
                    <button>Действия над объектом</button>
                </div>

                <div>
                    <button>Список</button>
                    <button>Свойства</button>
                    <button>Атрибуты</button>
                    <button>Допустимые связи</button>
                    <button>Безопасность</button>
                    <button>Схема жизненного цикла</button>
                    <button>Формы на тип объекта</button>
                    <button>Действия над объектом</button>
                </div>
            </div>
        </>
    )
})