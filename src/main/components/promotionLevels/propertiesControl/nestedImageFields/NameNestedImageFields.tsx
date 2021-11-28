import React, {FC} from 'react';
import style from './NameNestedImageFields.module.scss'
import {observer} from 'mobx-react-lite';
import {BsChevronDown, BsChevronRight} from 'react-icons/all';

type NameNestedImageFieldsType = {
    expandImageField: boolean
    expandSizeField: boolean
    onSizeFieldClick: () => void
    hasNestedField: boolean
}

export const NameNestedImageFields: FC<NameNestedImageFieldsType> = observer(props => {
    const {expandImageField, expandSizeField, onSizeFieldClick, hasNestedField} = props

    return (
        <>
            <div className={expandImageField ? style.openImageField : style.closeImageField}>
                {hasNestedField && !expandSizeField &&
                <BsChevronRight className={style.icon} onClick={onSizeFieldClick}/>}
                {hasNestedField && expandSizeField &&
                <BsChevronDown className={style.icon} onClick={onSizeFieldClick}/>}

                <input style={{paddingLeft: '40px'}} type="text" className={style.sizeField} value="Size" readOnly/>

                {expandSizeField && hasNestedField &&
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <input style={{paddingLeft: '60px'}} type="text" value="Width" readOnly/>
                    <input style={{paddingLeft: '60px'}} type="text" value="Height" readOnly/>
                </div>}
            </div>
        </>
    )
})