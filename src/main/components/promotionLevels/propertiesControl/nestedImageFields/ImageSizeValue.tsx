import React, {FC} from 'react';
import style from './ImageSizeValue.module.scss';
import {observer} from 'mobx-react-lite';

type ImageSizeValueType = {
    isSizeFieldExpanded: boolean
    hasNestedField: boolean
}

export const ImageSizeValue: FC<ImageSizeValueType> = observer(props => {
    const {isSizeFieldExpanded, hasNestedField} = props

    return (
        <>
            <div className={style.openImageField}>
                <input type="text" value="16; 16" readOnly/>

                {isSizeFieldExpanded && hasNestedField &&
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <input type="text" value="16" readOnly/>
                    <input type="text" value="16" readOnly/>
                </div>}
            </div>
        </>
    )
})