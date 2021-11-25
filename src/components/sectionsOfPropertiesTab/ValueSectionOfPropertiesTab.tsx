import React, {FC} from 'react';
import style from './ValueSectionOfPropertiesTab.module.scss';

type ValueSectionOfPropertiesTabType = {
    expandSizeField: boolean
    hasIcon: boolean
}

export const ValueSectionOfPropertiesTab: FC<ValueSectionOfPropertiesTabType> = props => {
    const {expandSizeField, hasIcon} = props

    return (
        <>

            <div className={style.openImageField}>
                <input type="text" value="16; 16" readOnly/>
                {
                    expandSizeField && hasIcon &&
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <input type="text" value="16" readOnly/>
                        <input type="text" value="16" readOnly/>
                    </div>
                }
            </div>

        </>
    )
}