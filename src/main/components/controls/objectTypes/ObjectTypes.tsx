import React, {FC, memo, MouseEvent, useRef, useState} from 'react';
import style from './ObjectTypes.module.scss'
import {lifeCycleLevelData} from '../lifeCycleLevel/LifeCycleLevelData';
import {PropertiesControlLeft} from '../../common/propertiesControl/PropertiesControlLeft';
import {PropertiesControlRight} from '../../common/propertiesControl/PropertiesControlRight';
import {objectTypesData} from './ObjectTypesData';


export const ObjectTypes: FC = memo(() => {
    // const {propertiesControl} = useStore()

    const [isImageFieldExpanded, setIsImageFieldExpanded] = useState<boolean>(false)
    const [isSizeFieldExpanded, setIsSizeFieldExpanded] = useState<boolean>(false)
    const [previewImg, setPreviewImg] = useState<string>('')
    const [isDraggable, setIsDraggable] = useState<boolean>(false)

    const draggableRef = useRef<HTMLDivElement | null>(null)
    const propNameRef = useRef<HTMLDivElement | null>(null)
    const propValueRef = useRef<HTMLDivElement | null>(null)
    const propDisplayRef = useRef<HTMLDivElement | null>(null)

    const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDraggable(true)
    }
    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {

    }
    const onMouseUp = () => {
        setIsDraggable(false)
    }
    const onDragStart = () => {
        // return false
    }

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
            <div className={style.tabControlContainer} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
                 ref={propDisplayRef}>
                <div className={style.name} ref={propNameRef}>
                    {objectTypesData.map(field => <PropertiesControlLeft key={field.propertyName}
                                                                            field={field}
                                                                            isImageFieldExpanded={isImageFieldExpanded}
                                                                            setIsImageFieldExpanded={setIsImageFieldExpanded}
                                                                            isSizeFieldExpanded={isSizeFieldExpanded}
                                                                            setIsSizeFieldExpanded={setIsSizeFieldExpanded}
                                                                            previewImg={previewImg}
                    />)}
                </div>

                <div className={style.draggable} onMouseDown={onMouseDown} onDragStart={onDragStart} draggable
                     ref={draggableRef}>
                </div>

                <div className={style.value} ref={propValueRef}>
                    {objectTypesData.map(field => <PropertiesControlRight key={field.propertyValue}
                                                                             field={field}
                                                                             isImageFieldExpanded={isImageFieldExpanded}
                                                                             isSizeFieldExpanded={isSizeFieldExpanded}
                                                                             previewImg={previewImg}
                                                                             setPreviewImg={setPreviewImg}/>)}
                </div>
            </div>
        </>
    )
})