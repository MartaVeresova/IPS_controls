import React, {FC} from 'react';
import style from './NameSectionOfPropertiesTab.module.scss'
import {BsChevronDown, BsChevronRight} from 'react-icons/all';

type NameSectionOfPropertiesTabType = {
    expandImageField: boolean
    expandSizeField: boolean
    onSizeFieldClick: () => void
    hasIcon: boolean
}

export const NameSectionOfPropertiesTab: FC<NameSectionOfPropertiesTabType> = props => {
    const {expandImageField, expandSizeField, onSizeFieldClick, hasIcon} = props

    return (
        <>

            <div className={expandImageField ? style.openImageField : style.closeImageField}>

                {hasIcon && !expandSizeField && <BsChevronRight className={style.icon} onClick={onSizeFieldClick}/>}
                {hasIcon && expandSizeField && <BsChevronDown className={style.icon} onClick={onSizeFieldClick}/>}

                <input style={{paddingLeft: '40px'}} type="text" className={style.sizeField} value="Size" readOnly/>
                {
                    expandSizeField && hasIcon &&
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <input style={{paddingLeft: '60px'}} type="text" value="Width" readOnly/>
                        <input style={{paddingLeft: '60px'}} type="text" value="Height" readOnly/>
                    </div>
                }
            </div>

        </>
    )
}