import React, {FC} from 'react';
import {observer} from 'mobx-react-lite';
import style from './TreeMenu.module.scss'

const treeList: string[] = [
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
    setIsRightBlockShow: (isRightBlockShow: boolean) => void
}

export const TreeMenu: FC<TreeMenuType> = observer(({setIsRightBlockShow}) => {

    const onTreeItemClick = () => {
        setIsRightBlockShow(true)
    }

    return (
        <>
            <div className={style.treeMenu}>
                {treeList.map((leaf, index) =>
                    <div key={index} className={style.leaf} onClick={onTreeItemClick}>{leaf}</div>)}
            </div>
        </>
    )
})