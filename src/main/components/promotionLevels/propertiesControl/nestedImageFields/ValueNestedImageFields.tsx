import React, {FC} from 'react';
import style from './ValueNestedImageFields.module.scss';
import {observer} from 'mobx-react-lite';

type ValueNestedImageFieldsType = {
    expandSizeField: boolean
    hasNestedField: boolean
}

export const ValueNestedImageFields: FC<ValueNestedImageFieldsType> = observer(props => {
    const {expandSizeField, hasNestedField} = props

    return (
        <>
            <div className={style.openImageField}>
                <input type="text" value="16; 16" readOnly/>
                {
                    expandSizeField && hasNestedField &&
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <input type="text" value="16" readOnly/>
                        <input type="text" value="16" readOnly/>
                    </div>
                }
            </div>
        </>
    )
})