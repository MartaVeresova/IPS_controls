import React, {FC} from 'react';
import style from './PropertiesControlLeft.module.scss'
import {Pointer} from '../../commonComponents/Pointer';
import {PropertyDataType} from '../../types/Types';
import {observer} from 'mobx-react-lite';


type PropsType = {
    field: PropertyDataType
    additionalModel: any
}

export const PropertiesControlLeft: FC<PropsType> = observer(props => {
    const {field, additionalModel} = props


    const onImageClick = () => {
        if (field.propertyValue) {
            additionalModel.setIsImageFieldExpanded(!additionalModel.isImageFieldExpanded)
            additionalModel.setIsSizeFieldExpanded(false)
        }
    }
    const onSizeClick = () => {
        additionalModel.setIsSizeFieldExpanded(!additionalModel.isSizeFieldExpanded)
    }


    return (
        <>
            <div className={style.propertyName}>
                <div className={style.wrap} tabIndex={0}>
                    <div className={style.allProp} onDoubleClick={onImageClick}>
                        {field.propertyName === 'Изображение' && (field.propertyValue) &&
                            <Pointer isFieldExpanded={additionalModel.isImageFieldExpanded} onIconClick={onImageClick}
                                     type="imageFieldIcon"/>}
                        {field.propertyName}
                    </div>
                </div>
                {
                    field.propertyName === 'Изображение' &&
                    <div className={style.additionalField} hidden={!additionalModel.isImageFieldExpanded}>
                        <div className={style.sizeField} tabIndex={0} onDoubleClick={onSizeClick}>
                            <Pointer isFieldExpanded={additionalModel.isSizeFieldExpanded} onIconClick={onSizeClick}
                                     type="sizeFieldIcon"/>
                            Size
                        </div>

                        <div hidden={!additionalModel.isSizeFieldExpanded}>
                            <div className={style.widthHeightFields} tabIndex={0}>Width</div>
                            <div className={style.widthHeightFields} tabIndex={0}>Height</div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
})
