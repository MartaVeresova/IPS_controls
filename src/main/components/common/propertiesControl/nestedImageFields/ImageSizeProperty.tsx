import React, {FC} from 'react';
import style from './ImageSizeProperty.module.scss'
import {observer} from 'mobx-react-lite';
import {BsChevronDown, BsChevronRight} from 'react-icons/all';

type ImageSizePropertyType = {
    isImageFieldExpanded: boolean
    isSizeFieldExpanded: boolean
    onSizeFieldClick: () => void
    hasNestedField: boolean
}

export const ImageSizeProperty: FC<ImageSizePropertyType> = observer(props => {
    const {isImageFieldExpanded, isSizeFieldExpanded, onSizeFieldClick, hasNestedField} = props

    return (
        <>
            <div className={isImageFieldExpanded ? style.openImageField : style.closeImageField}>
                {hasNestedField && !isSizeFieldExpanded &&
                <BsChevronRight className={style.icon} onClick={onSizeFieldClick}/>}
                {hasNestedField && isSizeFieldExpanded &&
                <BsChevronDown className={style.icon} onClick={onSizeFieldClick}/>}

                <input style={{paddingLeft: '40px'}} type="text" className={style.sizeField} value="Size" readOnly/>

                {isSizeFieldExpanded && hasNestedField &&
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <input style={{paddingLeft: '60px'}} type="text" value="Width" readOnly/>
                    <input style={{paddingLeft: '60px'}} type="text" value="Height" readOnly/>
                </div>}
            </div>
        </>
    )
})