import React, {FC, memo} from 'react';
import style from './PropertiesControlLeft.module.scss'
import {Pointer} from '../../commonComponents/Pointer';
import {PropertyDataType} from '../../types/Types';
import {observer} from 'mobx-react-lite';


type PropsType = {
    field: PropertyDataType
    dropDownModel: any
}

export const PropertiesControlLeft: FC<PropsType> = observer(props => {
    const {field, dropDownModel} = props


    const onImageClick = () => {
        if (field.propertyValue) {
            dropDownModel.setIsImageFieldExpanded(!dropDownModel.isImageFieldExpanded)
            dropDownModel.setIsSizeFieldExpanded(false)
        }
    }
    const onSizeClick = () => {
        dropDownModel.setIsSizeFieldExpanded(!dropDownModel.isSizeFieldExpanded)
    }


    return (
        <>
            <div className={style.propertyName}>
                <div className={style.wrap} tabIndex={0}>
                    <div className={style.allProp} onDoubleClick={onImageClick}>
                        {field.propertyName === 'Изображение' && (field.propertyValue) &&
                            <Pointer isFieldExpanded={dropDownModel.isImageFieldExpanded} onIconClick={onImageClick}
                                     type="imageFieldIcon"/>}
                        {field.propertyName}
                    </div>
                </div>
                {
                    field.propertyName === 'Изображение' &&
                    <div className={style.additionalField} hidden={!dropDownModel.isImageFieldExpanded}>
                        <div className={style.sizeField} tabIndex={0} onDoubleClick={onSizeClick}>
                            <Pointer isFieldExpanded={dropDownModel.isSizeFieldExpanded} onIconClick={onSizeClick}
                                     type="sizeFieldIcon"/>
                            Size
                        </div>

                        <div hidden={!dropDownModel.isSizeFieldExpanded}>
                            <div className={style.widthHeightFields} tabIndex={0}>Width</div>
                            <div className={style.widthHeightFields} tabIndex={0}>Height</div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
})
