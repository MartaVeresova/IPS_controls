import React, {FC, useCallback, useState} from 'react';
import style from './TabControl_3.module.scss'
import {NameSectionOfPropertiesTab} from './sectionsOfPropertiesTab/NameSectionOfPropertiesTab';
import {ValueSectionOfPropertiesTab} from './sectionsOfPropertiesTab/ValueSectionOfPropertiesTab';
import {EditableInput} from './sectionsOfPropertiesTab/inputVarieties/EditableInput';
import {ReadOnlyInput} from './sectionsOfPropertiesTab/inputVarieties/ReadOnlyInput';
import {OpenFileInput} from './sectionsOfPropertiesTab/inputVarieties/OpenFileInput';
import {BsChevronDown, BsChevronRight} from 'react-icons/all';
import {SingleDropDownSelect} from './sectionsOfPropertiesTab/inputVarieties/SingleDropDownSelect';

type dataOfPropertiesTabType = {
    id: number
    hasIcon: boolean
    fieldType: string
    propertyName: string
    propertyValue: string
}

const dataOfPropertiesTab: dataOfPropertiesTabType[] = [
    {id: 1, hasIcon: false, fieldType: 'editableInput', propertyName: 'Глобальный идентификатор', propertyValue: '7cx8vx5cv45c4-dkfj5ds-sdfsdas'},
    {id: 2, hasIcon: false, fieldType: 'readOnlyInput', propertyName: 'Идентификатор', propertyValue: '1024'},
    {id: 3, hasIcon: true, fieldType: 'openFileInput', propertyName: 'Изображение', propertyValue: '(Значок)'},
    {id: 4, hasIcon: false, fieldType: 'singleDropDownSelect', propertyName: 'Использовать в качестве первого шага', propertyValue: 'нет'},
    {id: 5, hasIcon: false, fieldType: 'openFileInput', propertyName: 'Контроль подписей', propertyValue: '[не настроен]'},
    {id: 6, hasIcon: false, fieldType: 'editableInput', propertyName: 'Литера', propertyValue: 'литера'},
    {id: 7, hasIcon: false, fieldType: 'editableInput', propertyName: 'Наименование', propertyValue: 'Test'},
    {id: 8, hasIcon: false, fieldType: 'editableInput', propertyName: 'Предметная область', propertyValue: 'Администрирование системы'},
    {id: 9, hasIcon: false, fieldType: 'editableInput', propertyName: 'Файловый шкаф', propertyValue: 'Выбрать'},
]

export const TabControl_3: FC = () => {

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
                        return (
                            <div key={field.id} className={style.propertyDisplay}>
                                <div className={style.propertyName}>
                                    {field.hasIcon && !expandImageField &&
                                    <BsChevronRight className={style.icon} onClick={onImageFieldClick}/>}
                                    {field.hasIcon && expandImageField &&
                                    <BsChevronDown className={style.icon} onClick={onImageFieldClick}/>}
                                    <input type="text" value={field.propertyName} readOnly/>
                                    {
                                        expandImageField && field.hasIcon &&
                                        <NameSectionOfPropertiesTab expandImageField={expandImageField}
                                                                    expandSizeField={expandSizeField}
                                                                    onSizeFieldClick={onSizeFieldClick}
                                                                    hasIcon={field.hasIcon}
                                        />
                                    }
                                </div>
                                <div className={style.propertyValue}>

                                    {
                                        field.propertyName === 'Глобальный идентификатор' &&
                                        <EditableInput propertyValue={field.propertyValue}/>
                                    }
                                    {
                                        field.propertyName === 'Идентификатор' &&
                                        <ReadOnlyInput propertyValue={field.propertyValue}/>
                                    }
                                    {
                                        field.propertyName === 'Изображение' &&
                                        <OpenFileInput propertyValue={field.propertyValue}/>
                                    }
                                    {
                                        field.propertyName === 'Использовать в качестве первого шага' &&
                                        <SingleDropDownSelect/>
                                    }
                                    {
                                        field.propertyName === 'Контроль подписей' &&
                                        <OpenFileInput propertyValue={field.propertyValue}/>
                                    }
                                    {
                                        field.propertyName === 'Литера' &&
                                        <EditableInput propertyValue={field.propertyValue}/>
                                    }
                                    {
                                        field.propertyName === 'Наименование' &&
                                        <EditableInput propertyValue={field.propertyValue}/>
                                    }
                                    {
                                        field.propertyName === 'Предметная область' &&
                                        <EditableInput propertyValue={field.propertyValue}/>
                                    }
                                    {
                                        field.propertyName === 'Файловый шкаф' &&
                                        <EditableInput propertyValue={field.propertyValue}/>
                                    }


                                    {/*<input type="text" value={field.propertyValue}/>*/}


                                    {
                                        expandImageField && field.hasIcon &&
                                        <ValueSectionOfPropertiesTab expandSizeField={expandSizeField}
                                                                     hasIcon={field.hasIcon}
                                        />
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}