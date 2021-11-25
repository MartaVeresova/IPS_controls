import React, {FC, useCallback, useState} from 'react';
import style from './TabControl.module.scss'
import {NameSectionOfPropertiesTab} from './sectionsOfPropertiesTab/NameSectionOfPropertiesTab';
import {ValueSectionOfPropertiesTab} from './sectionsOfPropertiesTab/ValueSectionOfPropertiesTab';

type dataOfPropertiesTabType = {
    id: number
    isImage: boolean
    propertyName: string
    propertyValue: string
}

const dataOfPropertiesTab: dataOfPropertiesTabType[] = [
    {id: 1, isImage: false, propertyName: 'Глобальный идентификатор', propertyValue: '7cx8vx5cv45c4-dkfj5ds-sdfsdas'},
    {id: 2, isImage: false, propertyName: 'Идентификатор', propertyValue: '1024'},
    {id: 3, isImage: true, propertyName: 'Изображение', propertyValue: '(Значок)'},
    {id: 4, isImage: false, propertyName: 'Использовать в качестве первого шага', propertyValue: 'нет'},
    {id: 5, isImage: false, propertyName: 'Контроль подписей', propertyValue: '[не настроен]'},
    {id: 6, isImage: false, propertyName: 'Литера', propertyValue: 'литера'},
    {id: 7, isImage: false, propertyName: 'Наименование', propertyValue: 'Test'},
    {
        id: 8,
        isImage: false,
        propertyName: 'Предметная область',
        propertyValue: 'Администрирование системы, Архитектура и строительство, Отладка'
    },
    {id: 9, isImage: false, propertyName: 'Файловый шкаф', propertyValue: 'Выбрать'},
]

export const TabControl: FC = () => {

    const [showImage, setShowImage] = useState(true)
    const [showSize, setShowSize] = useState(true)

    const onImageClick = useCallback(() => {
        setShowImage(!showImage)
        setShowSize(false)
    }, [showImage])

    const onSizeClick = () => {
        setShowSize(!showSize)
    }

    return (
        <>
            <div className={style.tabControlButtons}>
                <button>Свойства</button>
                <button>Безопасность</button>
                <button>Действия над объектом</button>
            </div>
            <div>
                {dataOfPropertiesTab.map(prop => {
                    return (
                        <div key={prop.id} className={style.propertyDisplay}>
                            <div className={style.propertyName}>
                                {prop.isImage && <div className={style.icon} onClick={onImageClick}>!</div>}
                                <input type="text" value={prop.propertyName} readOnly/>
                                {
                                    showImage && prop.isImage &&
                                    <NameSectionOfPropertiesTab expandImageField={showImage}
                                                                expandSizeField={showSize}
                                                                onSizeFieldClick={onSizeClick}
                                                                hasIcon={prop.isImage}
                                    />
                                }
                            </div>
                            <div className={style.propertyValue}>

                                <input type="text" value={prop.propertyValue}/>
                                {/*<EditableInput propertyValue={prop.propertyValue}/>*/}
                                {/*<OpenFileInput propertyValue={prop.propertyValue}/>*/}

                                {
                                    showImage && prop.isImage &&
                                    <ValueSectionOfPropertiesTab expandSizeField={showSize}
                                                                 hasIcon={prop.isImage}
                                    />
                                }
                            </div>
                        </div>
                    )
                })}
            </div>

            {/*<div className={style.container}>*/}
            {/*    <div className={style.infoiB}>b</div>*/}
            {/*    <input className={style.naviA}/>*/}
            {/*</div>*/}
        </>
    )
}