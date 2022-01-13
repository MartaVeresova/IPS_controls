import React, {FC, MouseEvent, useEffect, useRef, useState} from 'react';
import style from './PropertiesControl.module.scss'
import {PropertiesControlLeft} from './PropertiesControlLeft';
import {PropertiesControlRight} from './PropertiesControlRight';
import {observer} from 'mobx-react-lite';
import {lifeCycleLevelData} from './lifeCycleLevel/LifeCycleLevelData';
import {objectTypesData} from './objectTypes/ObjectTypesData';
import {useStore} from '../../../hooks/useStore';


type PropsType = {
    type: string
}

export const PropertiesControl: FC<PropsType> = observer(({type}) => {

    const [isDraggable, setIsDraggable] = useState<boolean>(false)

    const draggableRef = useRef<HTMLDivElement | null>(null)
    const propNameRef = useRef<HTMLDivElement | null>(null)
    const propValueRef = useRef<HTMLDivElement | null>(null)
    const propDisplayRef = useRef<HTMLDivElement | null>(null)

    const {propertyControl} = useStore()

    useEffect(() => {
        if (type === 'lifeCycleLevelType') {
            propertyControl.getLifeCycleLevelData()
        }
        if (type === 'objectTypesType') {
            propertyControl.getObjectTypesData()
        }
    }, [type, propertyControl])

    useEffect(() => {
        if (type === 'lifeCycleLevelType') {
            propertyControl.init(lifeCycleLevelData)
        }
        if (type === 'objectTypesType') {
            propertyControl.init(objectTypesData)
        }
    }, [type, propertyControl])


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
                propName.style.width = leftWidth * 100 / display + '%'
            }

            if (propValue && rightWidth && display && draggable) {
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

    const onButtonClick = () => {
        propertyControl.sentData()
    }


    return (
        <>
            <div className={style.propertyControl} onMouseMove={onDisplayMouseMove} onMouseUp={onDisplayMouseUp} ref={propDisplayRef}>
                <div className={style.propertyNameColumn} ref={propNameRef}>
                    {propertyControl.propertyData.map(field =>
                        <PropertiesControlLeft
                            key={field.propertyName}
                            field={field}
                            additionalModel={field.additionalModel}/>)}
                </div>

                <div className={style.columnBorder}>
                    <div className={style.draggableBorder} onMouseDown={onDraggableMouseDown} ref={draggableRef}>
                    </div>
                </div>

                <div className={style.propertyValueColumn} ref={propValueRef}>
                    {propertyControl.propertyData.map(field =>
                        <PropertiesControlRight
                            key={field.propertyName}
                            field={field}
                            setSelectedItem={field.setSelectedItem}
                            additionalModel={field.additionalModel}/>)}
                </div>
            </div>

            <button style={{margin: '15px', width: '50px'}} onClick={onButtonClick}>sent</button>
        </>
    )
})

