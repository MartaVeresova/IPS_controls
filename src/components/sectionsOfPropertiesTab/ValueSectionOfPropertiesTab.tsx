import React, {FC} from 'react';

type ValueSectionOfPropertiesTabType = {
    showSize: boolean
    isImage: boolean
}

export const ValueSectionOfPropertiesTab: FC<ValueSectionOfPropertiesTabType> = props => {
    const {showSize, isImage} = props

    return (
        <>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input style={{color: 'gray'}} type="text" value="16; 16" readOnly/>
                {
                    showSize && isImage &&
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <input style={{color: 'gray'}} type="text" value="16" readOnly/>
                        <input style={{color: 'gray'}} type="text" value="16" readOnly/>
                    </div>
                }
            </div>

        </>
    )
}