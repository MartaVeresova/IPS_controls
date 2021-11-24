import React, {FC, useState} from 'react';
import style from './TabControl.module.scss'

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

    const onImageClick = () => {
        setShowImage(!showImage)
        setShowSize(false)
    }

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
                    return <div key={prop.id} className={style.propertyDisplay}>
                        {/*<div className={style.expandIcon} onClick={onIconClick}>*/}
                        {/*    {prop.isImage && '!'}*/}
                        {/*</div>*/}
                        <div className={style.propertyName}>
                            {prop.isImage && <div className={style.icon} onClick={onImageClick}>!</div>}
                            <input type="text" value={prop.propertyName}/>
                            {
                                showImage && prop.isImage &&
                                <div className={showImage ? style.openImageBlock : style.closeImageBlock}>
                                    {prop.isImage && <div className={style.icon} onClick={onSizeClick}>!</div>}
                                    <input style={{paddingLeft: '20px', color: 'gray'}} type="text" value="Size"/>
                                    {
                                        showSize && prop.isImage &&
                                        <div style={{display: 'flex', flexDirection: 'column'}}>
                                            <input style={{paddingLeft: '40px', color: 'gray'}} type="text"
                                                   value="Width"/>
                                            <input style={{paddingLeft: '40px', color: 'gray'}} type="text"
                                                   value="Height"/>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                        <div className={style.propertyValue}>
                            <input type="text" value={prop.propertyValue}/>
                            {
                                showImage && prop.isImage &&
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <input style={{color: 'gray'}} type="text" value="16; 16"/>
                                    {
                                        showSize && prop.isImage &&
                                        <div style={{display: 'flex', flexDirection: 'column'}}>
                                            <input style={{color: 'gray'}} type="text" value="16"/>
                                            <input style={{color: 'gray'}} type="text" value="16"/>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                })}
            </div>

            {/*<div className={style.container}>*/}
            {/*    <div className={style.infoiB}>b</div>*/}
            {/*    <input className={style.naviA}/>*/}
            {/*</div>*/}
        </>
    )
}