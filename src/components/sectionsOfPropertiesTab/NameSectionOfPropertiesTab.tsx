import React, {FC} from 'react';
import style from './NameSectionOfPropertiesTab.module.scss'

type NameSectionOfPropertiesTabType = {
    showImage: boolean
    showSize: boolean
    onSizeClick: () => void
    isImage: boolean
}

export const NameSectionOfPropertiesTab: FC<NameSectionOfPropertiesTabType> = props => {
    const {showImage, showSize, onSizeClick, isImage} = props

    return (
        <>

            <div className={showImage ? style.openImageBlock : style.closeImageBlock}>
                {isImage && <div className={style.icon} onClick={onSizeClick}>!</div>}
                <input className={style.sizeInput} type="text" value="Size" readOnly/>
                {
                    showSize && isImage &&
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <input type="text" value="Width" readOnly/>
                        <input type="text" value="Height" readOnly/>
                    </div>
                }
            </div>

        </>
    )
}