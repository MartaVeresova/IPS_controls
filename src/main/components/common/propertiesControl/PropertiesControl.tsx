import React, {FC, memo, useState} from 'react';
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
}

export const PropertiesControl: FC<PropsType> = memo(({field}) => {

    const [isImageFieldExpanded, setIsImageFieldExpanded] = useState<boolean>(false)
    const [isSizeFieldExpanded, setIsSizeFieldExpanded] = useState<boolean>(false)
    const [previewImg, setPreviewImg] = useState<string>('')


    const onImageClick = () => {
        if (field.propertyValue || previewImg !== '') {
            setIsImageFieldExpanded(!isImageFieldExpanded)
            setIsSizeFieldExpanded(false)
        }
    }

    const onSizeClick = () => {
        setIsSizeFieldExpanded(!isSizeFieldExpanded)
    }


    return (
        <>
            <div className={style.propertyDisplay}>
                <div className={style.propertyName}>
                    <div className={style.wrap}>
                        <div className={style.allProp} onDoubleClick={onImageClick}>
                            {
                                field.propertyName === 'Изображение' && (field.propertyValue || previewImg !== '') &&
                                    <Pointer isFieldExpanded={isImageFieldExpanded} onIconClick={onImageClick} type={'imageFieldIcon'} />
                            }
                            {field.propertyName}
                        </div>
                    </div>


                    {
                        field.propertyName === 'Изображение' &&
                        <div className={style.sizeField} hidden={!isImageFieldExpanded}>
                            <div className={style.size} onDoubleClick={onSizeClick}>
                                <Pointer isFieldExpanded={isSizeFieldExpanded} onIconClick={onSizeClick} type={'sizeFieldIcon'} />
                                Size
                            </div>

                            <div hidden={!isSizeFieldExpanded}>
                                <div className={style.widthHeightFields}>Width</div>
                                <div className={style.widthHeightFields}>Height</div>
                            </div>
                        </div>
                    }


                </div>


                <div className={style.propertyValue}>
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