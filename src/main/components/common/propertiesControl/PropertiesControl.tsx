import React, {FC, memo, MouseEvent, useRef, useState} from 'react';
import style from './PropertiesControl.module.scss'
import {EditableInput} from '../inputTypes/EditableInput';
import {ReadOnlyInput} from '../inputTypes/ReadOnlyInput';
import {MultiDropDown} from '../inputTypes/MultiDropDown';
import {YesNoDropDown} from '../inputTypes/YesNoDropDown';
import {PropertyDataType} from '../types/Types';
import {SimpleDropDown} from '../inputTypes/SimpleDropDown';
import {EnumDropDown} from '../inputTypes/EnumDropDown';
import {OpenFileInput} from '../inputTypes/OpenFileInput';
import {Pointer} from '../Pointer';


type PropsType = {
    field: PropertyDataType
    nameWidth: number
    setNameWidth: (value: number) => void
    valueWidth: number
    setValueWidth: (value: number) => void
}

export const PropertiesControl: FC<PropsType> = memo(props => {
    const {field, nameWidth, setNameWidth, valueWidth, setValueWidth} = props

    const [isImageFieldExpanded, setIsImageFieldExpanded] = useState<boolean>(false)
    const [isSizeFieldExpanded, setIsSizeFieldExpanded] = useState<boolean>(false)
    const [previewImg, setPreviewImg] = useState<string>('')

    const dragNDropRef = useRef<HTMLDivElement | null>(null)
    const propNameRef = useRef<HTMLDivElement | null>(null)
    const propValueRef = useRef<HTMLDivElement | null>(null)
    const propDisplayRef = useRef<HTMLDivElement | null>(null)

    const [isDrag, setIsDrag] = useState<boolean>(false)
    const [currentPosition, setCurrentPosition] = useState<number>()

    const onImageClick = () => {
        if (field.propertyValue || previewImg !== '') {
            setIsImageFieldExpanded(!isImageFieldExpanded)
            setIsSizeFieldExpanded(false)
        }
    }

    const onSizeClick = () => {
        setIsSizeFieldExpanded(!isSizeFieldExpanded)
    }

    const dragNDrop2 = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault()

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(e: any) {
            let newLeft
            if (dragNDropRef.current) {
                newLeft = e.clientX - dragNDropRef.current.getBoundingClientRect().left;
            }
            // console.log(dragNDropRef.current?.getBoundingClientRect().width)
            console.log(newLeft)

            if (propNameRef.current) {
                // console.log(propNameRef)
            }


            // thumb.style.left = newLeft + 'px';

            if (propNameRef.current && newLeft) {
                // setNameWidth(nameWidth + Math.floor(newLeft))

                // propNameRef.current.style.left = Math.floor(newLeft) + 'px';
                // propNameRef.current.style.width = Math.floor(newLeft) + 'px'

                // console.log(propNameRef.current.style.width)
            }

        }

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    }
    const onMouseDown1 = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault()

        console.log(event.target)

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(e: any) {
            let newLeft
            if (dragNDropRef.current) {
                newLeft = e.clientX - dragNDropRef.current.getBoundingClientRect().left;
            }
            // console.log(dragNDropRef.current?.getBoundingClientRect().width)
            console.log(dragNDropRef.current?.getBoundingClientRect())

            if (propNameRef.current) {
                // console.log(propNameRef)
            }


            // thumb.style.left = newLeft + 'px';

            if (propNameRef.current && newLeft) {
                // setNameWidth(nameWidth + Math.floor(newLeft))

                // propNameRef.current.style.left = Math.floor(newLeft) + 'px';
                // propNameRef.current.style.width = Math.floor(newLeft) + 'px'

                // console.log(propNameRef.current.style.width)
            }

        }

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    }


    const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
        setCurrentPosition(e.clientX)
    }

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        // console.log(e)

        if (isDrag) {
            let newLeft
            if (dragNDropRef.current) {
                newLeft = e.clientX - dragNDropRef.current.getBoundingClientRect().left
            }

            // console.log(e.clientX)
            // console.log(dragNDropRef.current?.getBoundingClientRect())

            // if (newLeft && propNameRef.current && newLeft < e.clientX + 200) {
            //     newLeft = e.clientX + 200
            // }

            // if (newLeft && propValueRef.current && newLeft > propValueRef.current.getBoundingClientRect().left) {
            //     newLeft = propValueRef.current.getBoundingClientRect().left
            // }

            if (propNameRef.current && newLeft) {
                setNameWidth(Math.floor(propNameRef.current.offsetWidth + newLeft))
                console.log(Math.floor(newLeft))

                // propNameRef.current.style.width = (propNameRef.current.offsetWidth + newLeft).toString() + 'px'
                // propValueRef.current.style.width = (propValueRef.current.offsetWidth + propNameRef.current.offsetWidth + newLeft).toString() + 'px'
            }
            if (propValueRef.current && propDisplayRef.current && newLeft) {
                setValueWidth(Math.floor(propValueRef.current.offsetWidth - newLeft))

                console.log(Math.floor(newLeft))
            }
        }
    }

    const onMouseUp = (e: MouseEvent<HTMLDivElement>) => {
        setIsDrag(false)
    }

    const onDragStart = () => {
        return false
    }


    return (
        <>
            <div className={style.propertyDisplay} onMouseMove={onMouseMove} onMouseUp={onMouseUp} ref={propDisplayRef}>
                <div className={style.propertyName} ref={propNameRef} style={{width: `${nameWidth}px`}}>
                    <div className={style.wrap} tabIndex={0}>
                        <div className={style.allProp} onDoubleClick={onImageClick}>
                            {
                                field.propertyName === 'Изображение' && (field.propertyValue || previewImg !== '') &&
                                <Pointer isFieldExpanded={isImageFieldExpanded} onIconClick={onImageClick}
                                         type="imageFieldIcon"/>
                            }
                            {field.propertyName}
                        </div>
                    </div>
                    {
                        field.propertyName === 'Изображение' &&
                        <div className={style.sizeField} hidden={!isImageFieldExpanded}>
                            <div className={style.size} tabIndex={0} onDoubleClick={onSizeClick}>
                                <Pointer isFieldExpanded={isSizeFieldExpanded} onIconClick={onSizeClick}
                                         type="sizeFieldIcon"/>
                                Size
                            </div>

                            <div hidden={!isSizeFieldExpanded}>
                                <div className={style.widthHeightFields} tabIndex={0}>Width</div>
                                <div className={style.widthHeightFields} tabIndex={0}>Height</div>
                            </div>
                        </div>
                    }
                </div>

                <div onMouseDown={onMouseDown} onDragStart={onDragStart} draggable ref={dragNDropRef}
                     style={{cursor: 'col-resize', width: '2px'}}>
                </div>

                <div className={style.propertyValue} ref={propValueRef} style={{width: `${valueWidth}px`}}>
                    {field.fieldType === 'editableInput' &&
                    <EditableInput propertyValue={field.propertyValue}/>}

                    {field.fieldType === 'readOnlyInput' &&
                    <ReadOnlyInput propertyValue={field.propertyValue}/>}

                    {field.fieldType === 'openFileInput' &&
                    <OpenFileInput propertyValue={field.propertyValue}
                                   isImageFieldExpanded={isImageFieldExpanded}
                                   isSizeFieldExpanded={isSizeFieldExpanded}
                                   previewImg={previewImg}
                                   setPreviewImg={setPreviewImg}/>}

                    {field.fieldType === 'yesNoDropDown' &&
                    <YesNoDropDown propertyValue={field.propertyValue}/>}

                    {field.fieldType === 'multiDropDown' &&
                    <MultiDropDown propertyValue={field.propertyValue}/>}

                    {field.fieldType === 'simpleDropDown' &&
                    <SimpleDropDown propertyValue={field.propertyValue}
                                    propertyName={field.propertyName}/>}

                    {field.fieldType === 'enumDropDown' &&
                    <EnumDropDown propertyValue={field.propertyValue}/>}
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