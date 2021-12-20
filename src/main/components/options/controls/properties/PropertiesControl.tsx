import React, {FC, memo, MouseEvent, useRef, useState} from 'react';
import style from './PropertiesControl.module.scss'
import {PropertiesControlLeft} from './PropertiesControlLeft';
import {PropertiesControlRight} from './PropertiesControlRight';
import {PropertyDataType} from '../../types/Types';


type PropsType = {
    data: PropertyDataType[]
}

export const PropertiesControl: FC<PropsType> = memo(({data}) => {
    // const {propertiesControl} = useStore()

    const [isImageFieldExpanded, setIsImageFieldExpanded] = useState<boolean>(false)
    const [isSizeFieldExpanded, setIsSizeFieldExpanded] = useState<boolean>(false)
    const [previewImg, setPreviewImg] = useState<string>('')
    const [isDraggable, setIsDraggable] = useState<boolean>(false)

    const draggableRef = useRef<HTMLDivElement | null>(null)
    const propNameRef = useRef<HTMLDivElement | null>(null)
    const propValueRef = useRef<HTMLDivElement | null>(null)
    const propDisplayRef = useRef<HTMLDivElement | null>(null)


    const onDraggableMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDraggable(true)
    }

    const onDisplayMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (isDraggable) {

            let leftWidth
            let rightWidth

            const propName = propNameRef.current
            const propValue = propValueRef.current
            const propDisplay = propDisplayRef.current
            const draggable = draggableRef.current


            let display
            if (propDisplay && propName) {
                display = propDisplay.getBoundingClientRect().right - propDisplay.getBoundingClientRect().left
            }

            if (propName && propDisplay) {
                leftWidth = e.clientX - propDisplay.getBoundingClientRect().left
                rightWidth = propDisplay.getBoundingClientRect().right - e.clientX
            }

            if (propName && leftWidth && display && draggable) {
                // propName.style.width = leftWidth + 'px'
                propName.style.width = leftWidth * 100 / display + '%'
            }

            if (propValue && rightWidth && display && draggable) {
                // propValue.style.width = rightWidth + 'px'
                propValue.style.width = rightWidth * 100 / display + '%'
            }

            // курсор вышел менее, чем на 100px в обе стороны => отключить движение.
            if (leftWidth && leftWidth < 100) {
                setIsDraggable(false)
            }
            if (propDisplay && e.clientX > propDisplay.getBoundingClientRect().right - 100) {
                setIsDraggable(false)
            }
        }
    }

    const onDisplayMouseUp = () => {
        setIsDraggable(false)
    }


    return (
        <>
            <div className={style.tabControlContainer} onMouseMove={onDisplayMouseMove} onMouseUp={onDisplayMouseUp} ref={propDisplayRef}>
                <div className={style.name} ref={propNameRef}>
                    {data.map(field => <PropertiesControlLeft key={field.propertyName}
                                                              field={field}
                                                              isImageFieldExpanded={isImageFieldExpanded}
                                                              setIsImageFieldExpanded={setIsImageFieldExpanded}
                                                              isSizeFieldExpanded={isSizeFieldExpanded}
                                                              setIsSizeFieldExpanded={setIsSizeFieldExpanded}
                                                              previewImg={previewImg}
                    />)}
                </div>

                <div className={style.draggable}>
                    <div onMouseDown={onDraggableMouseDown} ref={draggableRef}>
                    </div>
                </div>

                <div className={style.value} ref={propValueRef}>
                    {data.map(field => <PropertiesControlRight key={field.propertyName}
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

