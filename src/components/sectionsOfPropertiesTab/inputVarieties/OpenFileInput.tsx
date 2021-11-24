import React, {ChangeEvent, FC, useState} from 'react';
import style from './OpenFileInput.module.scss'

type OpenFileInputType = {
    propertyValue: string
}

export const OpenFileInput: FC<OpenFileInputType> = ({propertyValue}) => {
    const [cursorToInput, setCursorToInput] = useState(false)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e)
        // e.currentTarget.onfocus && setCursorToInput(true)
    }

    return (
        <>
            <div className={style.inputField}>
                <input type="text" value={propertyValue} onChange={onInputChange}/>
                {/*{*/}
                {/*    cursorToInput &&*/}
                {/*    <>*/}
                        <input type="file" name="file" id="file" accept=".ico"/>
                        <button>...</button>
                {/*    </>*/}
                {/*}*/}
            </div>
        </>
    )
}