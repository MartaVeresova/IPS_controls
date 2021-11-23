import React from 'react';
import style from './TabControl.module.scss'


export const TabControl = () => {
    return (
        <>
            <div className={style.tabControlButtons}>
                <button>Свойства</button>
                <button>Безопасность</button>
                <button>Действия над объектом</button>
            </div>
            <div className={style.propertyDisplay}>
                <div className={style.propertyName}>
                    <input type='text' value="Глобальный идентификатор"/>
                    <input type='text' value="Идентификатор"/>
                    <input type='text' value="Изображение"/>
                    <input type='text' value="Использовать в качестве первого шага"/>
                    <input type='text' value="Контроль подписей"/>
                    <input type='text' value="Литера"/>
                    <input type='text' value="Наименование"/>
                    <input type='text' value="Предметная область"/>
                    <input type='text' value="Файловый шкаф"/>
                </div>
                <div className={style.propertyValue}>
                    <input type='text' value="7cx8vx5cv45c4-dkfj5ds-sdfsdas"/>
                    <input type='text' value="1024"/>
                    <input type='text' value="(Значок)"/>
                    <input type='text' value="нет"/>
                    <input type='text' value="[не настроен]"/>
                    <input type='text' value="литера"/>
                    <input type='text' value="Test"/>
                    <input type='text' value="Администрирование системы, Архитектура и строительство, Отладка"/>
                    <input type='text' value="Выбрать"/>
                </div>
            </div>
            <div className={style.securityDisplay}></div>
            <div className={style.actionsOnTheObjectDisplay}></div>
            {/*<div className={style.container}>*/}
            {/*    <div className={style.column}>*/}
            {/*        <div>Глобальный идентификатор</div>*/}
            {/*        <div>Идентификатор</div>*/}
            {/*        /!*<input value="Глобальный идентификатор"/>*!/*/}
            {/*        /!*<input value="Идентификатор"/>*!/*/}
            {/*    </div>*/}
            {/*    <div className={style.column}>*/}
            {/*        <div>7cx8vx5cv45c4-dkfj5ds-sdfsdas</div>*/}
            {/*        <div>1024</div>*/}
            {/*        /!*<input value="7cx8vx5cv45c4-dkfj5ds-sdfsdas"/>*!/*/}
            {/*        /!*<input value="1024"/>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}