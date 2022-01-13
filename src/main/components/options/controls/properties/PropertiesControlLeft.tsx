import React, {FC} from 'react';
import style from './PropertiesControlLeft.module.scss'
import {Pointer} from '../../commonComponents/Pointer';
import {PropertyDataType} from '../../types/Types';
import {observer} from 'mobx-react-lite';


type PropsType = {
    field: PropertyDataType
    additionalModel: any
    //     {
    //     isImageFieldExpanded: boolean
    //     isSizeFieldExpanded: boolean
    //     setIsImageFieldExpanded: (value: boolean) => void
    //     setIsSizeFieldExpanded: (value: boolean) => void
    // }
}

export const PropertiesControlLeft: FC<PropsType> = observer(props => {
    const {field, additionalModel} = props


    const onImageDoubleClick = () => {
        if (field.propertyName === 'Изображение' && field.propertyValue) {
            additionalModel.setIsImageFieldExpanded(!additionalModel.isImageFieldExpanded)
            additionalModel.setIsSizeFieldExpanded(false)
        }
    }
    const onSizeDoubleClick = () => {
        additionalModel.setIsSizeFieldExpanded(!additionalModel.isSizeFieldExpanded)
    }


    return (
        <div className={style.propertyName}>
            <div className={style.imageField} tabIndex={0} onDoubleClick={onImageDoubleClick}>
                {field.propertyName === 'Изображение' && (field.propertyValue) &&
                    <Pointer isFieldExpanded={additionalModel.isImageFieldExpanded} onIconClick={onImageDoubleClick}
                             type="imageFieldIcon"/>}
                <div className={style.propertyNameField}>{field.propertyName}</div>
            </div>
            {field.propertyName === 'Изображение' &&
                <div className={style.additionalFields} hidden={!additionalModel.isImageFieldExpanded}>
                    <div className={style.sizeField} tabIndex={0} onDoubleClick={onSizeDoubleClick}>
                        <Pointer isFieldExpanded={additionalModel.isSizeFieldExpanded} onIconClick={onSizeDoubleClick}
                                 type="sizeFieldIcon"/>
                        Size
                    </div>
                    <div className={style.widthHeightFields} hidden={!additionalModel.isSizeFieldExpanded}
                         tabIndex={0}>Width
                    </div>
                    <div className={style.widthHeightFields} hidden={!additionalModel.isSizeFieldExpanded}
                         tabIndex={0}>Height
                    </div>
                </div>
            }
        </div>
    )
})
