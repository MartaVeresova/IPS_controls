import React, {FC, memo} from 'react';
import style from './PropertiesControlLeft.module.scss'
import {Pointer} from '../../commonComponents/Pointer';
import {PropertyDataType} from '../../types/Types';


type PropsType = {
    field: PropertyDataType
    isImageFieldExpanded: boolean
    setIsImageFieldExpanded: (value: boolean) => void
    isSizeFieldExpanded: boolean
    setIsSizeFieldExpanded: (value: boolean) => void
    previewImg: string
}

export const PropertiesControlLeft: FC<PropsType> = memo(props => {
    const {
        field,
        isImageFieldExpanded,
        setIsImageFieldExpanded,
        isSizeFieldExpanded,
        setIsSizeFieldExpanded,
        previewImg
    } = props


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
            <div className={style.propertyName}>
                <div className={style.wrap} tabIndex={0}>
                    <div className={style.allProp} onDoubleClick={onImageClick}>
                        {field.propertyName === 'Изображение' && (field.propertyValue || previewImg !== '') &&
                                <Pointer isFieldExpanded={isImageFieldExpanded} onIconClick={onImageClick}
                                         type="imageFieldIcon"/>}
                        {field.propertyName}
                    </div>
                </div>
                {
                    field.propertyName === 'Изображение' &&
                    <div className={style.additionalField} hidden={!isImageFieldExpanded}>
                        <div className={style.sizeField} tabIndex={0} onDoubleClick={onSizeClick}>
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
        </>
    )
})
