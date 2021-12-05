import React, {FC, memo} from 'react';
import style from './OpenFileInputExample.module.scss'

type OpenFileInputType = {
    propertyValue: string
    isImageFieldExpanded: boolean
    isSizeFieldExpanded: boolean
}

export const OpenFileInputExample: FC<OpenFileInputType> = memo((props) => {
    const {propertyValue, isImageFieldExpanded, isSizeFieldExpanded} = props

    const inputValue = () => {
        if (propertyValue) {
            return '(Значок)'
        }
        return '(отсутствует)'
    }


    return (
        <>
            <div className={style.inputField}>
                <img alt="" src={propertyValue}/>
                <input type="text" value={inputValue()} readOnly/>
                <input tabIndex={0} type="file" name="file" id="file" accept=".ico"/>
                <button>...</button>
            </div>

            <div className={style.openImageField} hidden={!isImageFieldExpanded}>
                <input type="text" value="16; 16" readOnly/>

                <div className={style.widthHeightValueFields} hidden={!isSizeFieldExpanded}>
                    <input type="text" value="16" readOnly/>
                    <input type="text" value="16" readOnly/>
                </div>
            </div>
        </>
    )
})


// useEffect(() => {
//     let elem = document.getElementsByTagName('img')
//     console.log(elem)
//     let theCSSprop = window.getComputedStyle(elem[0]).width;
//     console.log((parseInt(theCSSprop)).toString())
//     // @ts-ignore
//     document.getElementById('output').innerHTML = (parseInt(theCSSprop)).toString();
// }, [])


// const onChange = (e: any) => {
//     const files = e.target.files
//     console.log("file", files[0]);
//     let file = files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = _handleReaderLoaded
//         reader.readAsBinaryString(file)
//     }
// }

// const onFileSubmit = (e: any) => {
//     setIsLoading(true);
//     e.preventDefault()
//     console.log('bine', base64)
//     let payload = {image: base64}
//     console.log('payload', payload)
//
//     setTimeout(() => {
//         setIsLoading(false)
//     }, 2000)
// }