import React, {FC} from 'react';
import {observer} from 'mobx-react-lite';
import style from './TreeMenu.module.scss'

const menu: string[] = [
    'Удалено',
    'Создание и модификация',
    'Производство и эксплуатация',
    'Аннулировано',
    'Персональный объект',
    'Согласование и утверждение',
    'Хранение',
    'Импортировано',
    'Ожидание погашения посредством ИИ',
]

type TreeMenuType = {
    setShowTabControl: (showTabControl: boolean) => void
}

export const TreeMenu: FC<TreeMenuType> = observer(({setShowTabControl}) => {

    const onTreeItemClick = () => {
        setShowTabControl(true)
    }

    return (
        <>
            <div className={style.treeMenu}>
                {menu.map((el, index) => <div key={index} className={style.element} onClick={onTreeItemClick}>{el}</div>)}
            </div>
        </>
    )
})