import React, {FC, memo, useState} from 'react';
import style from './RootTree.module.scss';

type PropsType = {
    setIsLifeCycleLevelOpen: (value: boolean) => void
    setIsObjectTypesOpen: (value: boolean) => void
    isObjectTypesOpen: boolean
}

export const RootTree: FC<PropsType> = memo((props) => {

    const {setIsLifeCycleLevelOpen, setIsObjectTypesOpen, isObjectTypesOpen} = props

    const [isPromoLevelOpen, setIsPromoLevelOpen] = useState<boolean>(false)
    const [isArchivesOpen, setIsArchivesOpen] = useState<boolean>(false)


    const onFiveLiClick = () => {
        setIsObjectTypesOpen(!isObjectTypesOpen)
        setIsLifeCycleLevelOpen(false)
        setIsObjectTypesOpen(true)
    }

    const onFiveOneLiClick = () => {
        setIsArchivesOpen(!isArchivesOpen)
    }

    const onSevenLiClick = () => {
        setIsPromoLevelOpen(!isPromoLevelOpen)
        setIsObjectTypesOpen(false)
        setIsLifeCycleLevelOpen(true)
    }

    return (
        <>
            <ul className={style.tree}>
                <li><span>Атрибуты</span>
                    <ul>
                    </ul>
                </li>
                <li><span>Предметные области</span>
                    <ul>
                    </ul>
                </li>
                <li><span>Система</span>
                    <ul>
                    </ul>
                </li>
                <li><span>Схемы жизненного цикла</span>
                    <ul>
                    </ul>
                </li>
                <li><span onClick={onFiveLiClick}>Типы объектов</span>
                    {
                        isObjectTypesOpen &&
                        <ul>
                            <li><span onClick={onFiveOneLiClick}>Архивы</span>
                                {
                                    isArchivesOpen &&
                                    <ul>
                                        <li>Общие архивы</li>
                                    </ul>
                                }
                            </li>
                        </ul>
                    }
                </li>
                <li><span>Типы связей</span>
                    <ul>
                    </ul>
                </li>
                <li><span onClick={onSevenLiClick}>Уровни продвижения</span>
                    {
                        isPromoLevelOpen &&
                        <ul>
                            <li>Удалено</li>
                            <li>Создание и модификация</li>
                            <li>Производство и эксплуатация</li>
                            <li>Аннулировано</li>
                            <li>Персональный объект</li>
                            <li>Согласование и утверждение</li>
                            <li>Хранение</li>
                            <li>Импортировано</li>
                            <li>Ожидание погашения посредством ИИ</li>
                        </ul>
                    }
                </li>
                <li><span>Языковые варианты</span>
                    <ul>
                    </ul>
                </li>
            </ul>
        </>
    )
})