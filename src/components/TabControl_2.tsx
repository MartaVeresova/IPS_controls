import React, {FC, useCallback, useState} from 'react';
import style from './TabControl_2.module.scss'
import {ReadOnlyInput} from './sectionsOfPropertiesTab/inputVarieties/ReadOnlyInput';
import {OpenFileInput} from './sectionsOfPropertiesTab/inputVarieties/OpenFileInput';
import {EditableInput} from './sectionsOfPropertiesTab/inputVarieties/EditableInput';
import {DropDownInput} from './sectionsOfPropertiesTab/inputVarieties/DropDownInput';

type dataOfPropertiesTabType = {
    id: number
    hasIcon: boolean
    propertyName: string
    propertyValue: string
}

const dataOfPropertiesTab: dataOfPropertiesTabType[] = [
    {id: 1, hasIcon: false, propertyName: 'Глобальный идентификатор', propertyValue: '7cx8vx5cv45c4-dkfj5ds-sdfsdas'},
    {id: 2, hasIcon: false, propertyName: 'Идентификатор', propertyValue: '1024'},
    {id: 3, hasIcon: true, propertyName: 'Изображение', propertyValue: '(Значок)'},
    {id: 4, hasIcon: true, propertyName: 'Size', propertyValue: '16; 16'},
    {id: 5, hasIcon: false, propertyName: 'Width', propertyValue: '16'},
    {id: 6, hasIcon: false, propertyName: 'Height', propertyValue: '16'},
    {id: 7, hasIcon: false, propertyName: 'Использовать в качестве первого шага', propertyValue: 'нет'},
    {id: 8, hasIcon: false, propertyName: 'Контроль подписей', propertyValue: '[не настроен]'},
    {id: 9, hasIcon: false, propertyName: 'Литера', propertyValue: 'литера'},
    {id: 10, hasIcon: false, propertyName: 'Наименование', propertyValue: 'Test'},
    {id: 11, hasIcon: false, propertyName: 'Предметная область', propertyValue: 'Администрирование системы'},
    {id: 12, hasIcon: false, propertyName: 'Файловый шкаф', propertyValue: 'Выбрать'},
]

export const TabControl_2: FC = () => {

    const [expandImageField, setExpandImageField] = useState(false)
    const [expandSizeField, setExpandSizeField] = useState(false)

    const onImageFieldClick = useCallback(() => {
        setExpandImageField(!expandImageField)
        setExpandSizeField(false)
    }, [expandImageField])

    const onSizeFieldClick = () => {
        setExpandSizeField(!expandSizeField)
    }

    return (
        <>
            <div className={style.tabControlButtons}>
                <button>Свойства</button>
                <button>Безопасность</button>
                <button>Действия над объектом</button>
            </div>
            <div className={style.tabControlContainer}>
                {
                    dataOfPropertiesTab.map(field => {

                        const nestedFieldsStyles =
                            field.propertyName === 'Width' || field.propertyName === 'Height'
                                ? style.sizesFieldItem
                                : field.propertyName === 'Size'
                                    ? style.sizesField
                                    : style.propertyName

                        return (
                            <div key={field.id} className={style.propertyDisplay}>
                                <div className={nestedFieldsStyles}>
                                    {field.hasIcon && <div className={style.icon} onClick={onImageFieldClick}>!</div>}
                                    <input type="text" value={field.propertyName} readOnly/>
                                </div>
                                <div className={style.propertyValue}>
                                    {
                                        field.propertyName === `Литера` &&
                                        <OpenFileInput propertyValue={field.propertyValue}/>
                                    }
                                    {/*<input type="text" value={field.propertyValue}/>*/}
                                    {/*<ReadOnlyInput propertyValue={field.propertyValue} />*/}
                                    {/*<OpenFileInput propertyValue={field.propertyValue} />*/}
                                    {/*<EditableInput propertyValue={field.propertyValue} />*/}
                                    {/*<DropDownInput />*/}


                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}