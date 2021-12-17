import React, {FC, memo, MouseEvent, useRef, useState} from 'react';
import style from './PropertiesControl.module.scss'
import {PropertiesControlLeft} from './PropertiesControlLeft';
import {PropertiesControlRight} from './PropertiesControlRight';
import {PropertyDataType} from '../types/Types';


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

    const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDraggable(true)
    }
    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (isDraggable) {
            let newLeft
            if (draggableRef.current) {
                newLeft = e.clientX - draggableRef.current.getBoundingClientRect().left
            }

            if (propNameRef.current && propDisplayRef.current && newLeft) {

                // console.log((propNameRef.current.offsetWidth + newLeft) * 100 / propDisplayRef.current.offsetWidth)
                // console.log(Math.floor(propDisplayRef.current.offsetWidth))

                propNameRef.current.style.width = ((propNameRef.current.offsetWidth + newLeft) * 100 / propDisplayRef.current.offsetWidth).toString() + '%'
            }
            if (propValueRef.current && propDisplayRef.current && propNameRef.current && newLeft) {

                // console.log((propNameRef.current.offsetWidth + newLeft) * 100 / propDisplayRef.current.offsetWidth)
                // propValueRef.current.style.width = ((propValueRef.current.offsetWidth - newLeft) * 100 / propDisplayRef.current.offsetWidth).toString() + '%'
                propValueRef.current.style.width = (100 - (propNameRef.current.offsetWidth + newLeft) * 100 / propDisplayRef.current.offsetWidth).toString() + '%'
            }
            console.log(propNameRef.current?.style.width)
        }
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
            <div className={style.tabControlContainer} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
                 ref={propDisplayRef}>
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

                <div className={style.draggable} onMouseDown={onMouseDown} onDragStart={onDragStart} draggable
                     ref={draggableRef}>
                </div>

                <div className={style.value} ref={propValueRef}>
                    {data.map(field => <PropertiesControlRight key={field.propertyValue}
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

// // курсор вышел из слайдера => оставить бегунок в его границах.
// if (newLeft && newLeft < 0) {
//     newLeft = 0;
// }

// let rightEdge
// if (dragNDropRef.current && propNameRef.current) {
//     rightEdge = dragNDropRef.current.offsetWidth - propNameRef.current.offsetWidth;
// }
//
// if (newLeft && rightEdge && newLeft > rightEdge) {
//     newLeft = rightEdge;
// }