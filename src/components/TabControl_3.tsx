import React, {FC, useCallback, useState} from 'react';
import style from './TabControl_3.module.scss'
import {EditableInput} from './promotionLevels/propertiesControl/fieldTypes/EditableInput';
import {ReadOnlyInput} from './promotionLevels/propertiesControl/fieldTypes/ReadOnlyInput';
import {OpenFileInput} from './promotionLevels/propertiesControl/fieldTypes/OpenFileInput';
import {BsChevronDown, BsChevronRight} from 'react-icons/all';
import {SingleDropDownSelect} from './promotionLevels/propertiesControl/fieldTypes/SingleDropDownSelect';
import {ValueNestedImageFields} from './promotionLevels/propertiesControl/nestedImageFields/ValueNestedImageFields';
import {NameNestedImageFields} from './promotionLevels/propertiesControl/nestedImageFields/NameNestedImageFields';

type dataOfPropertiesTabType = {
    id: number
    hasNestedField: boolean
    fieldType: string
    propertyName: string
    propertyValue: string
}

const dataOfPropertiesTab: dataOfPropertiesTabType[] = [
    {
        id: 1,
        hasNestedField: false,
        fieldType: 'editableInput',
        propertyName: 'Глобальный идентификатор',
        propertyValue: '7cx8vx5cv45c4-dkfj5ds-sdfsdas'
    },
    {id: 2, hasNestedField: false, fieldType: 'readOnlyInput', propertyName: 'Идентификатор', propertyValue: '1024'},
    {id: 3, hasNestedField: true, fieldType: 'openFileInput', propertyName: 'Изображение', propertyValue: '(Значок)'},
    {
        id: 4,
        hasNestedField: false,
        fieldType: 'singleDropDownSelect',
        propertyName: 'Использовать в качестве первого шага',
        propertyValue: 'нет'
    },
    {
        id: 5,
        hasNestedField: false,
        fieldType: 'openFileInput',
        propertyName: 'Контроль подписей',
        propertyValue: '[не настроен]'
    },
    {id: 6, hasNestedField: false, fieldType: 'editableInput', propertyName: 'Литера', propertyValue: 'литера'},
    {id: 7, hasNestedField: false, fieldType: 'editableInput', propertyName: 'Наименование', propertyValue: 'Test'},
    {
        id: 8,
        hasNestedField: false,
        fieldType: 'editableInput',
        propertyName: 'Предметная область',
        propertyValue: 'Администрирование системы'
    },
    {id: 9, hasNestedField: false, fieldType: 'editableInput', propertyName: 'Файловый шкаф', propertyValue: 'Выбрать'},
]

const nameSection = [
    {id: 1, hasNestedField: false, propertyName: 'Глобальный идентификатор', fieldType: 'editableInput'},
    {id: 2, hasNestedField: false, propertyName: 'Идентификатор', fieldType: 'editableInput'},
    {id: 3, hasNestedField: true, propertyName: 'Изображение', fieldType: 'editableInput'},
    {
        id: 4,
        hasNestedField: false,
        propertyName: 'Использовать в качестве первого шага',
        fieldType: 'singleDropDownSelect'
    },
    {id: 5, hasNestedField: false, propertyName: 'Контроль подписей', fieldType: 'openFileInput'},
    {id: 6, hasNestedField: false, propertyName: 'Литера', fieldType: 'editableInput'},
    {id: 7, hasNestedField: false, propertyName: 'Наименование', fieldType: 'editableInput'},
    {id: 8, hasNestedField: false, propertyName: 'Предметная область', fieldType: 'editableInput'},
    {id: 9, hasNestedField: false, propertyName: 'Файловый шкаф', fieldType: 'editableInput'},
]

const assignedSubjectAreaTypes = [
    {id: 'D', name: 'Администрирование системы'},
    {id: 'B', name: 'Архитектура и строительство'},
    {id: 'C', name: 'Отладка'},
]

const valueSection = [
    {
        globalKey: '7cx8vx5cv45c4-dkfj5ds-sdfsdas',
        id: 1,
        icon: '',
        isDefault: false,
        litera: 't',
        name: 'Test11331222323',
        assignedSubjectAreaTypes: assignedSubjectAreaTypes,
        storageId: '',
        fieldType: 'editableInput',
    }
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
                                    {field.hasNestedField && !expandImageField &&
                                    <BsChevronRight className={style.icon} onClick={onImageFieldClick}/>}
                                    {field.hasNestedField && expandImageField &&
                                    <BsChevronDown className={style.icon} onClick={onImageFieldClick}/>}
                                    <input type="text" value={field.propertyName} readOnly/>
                                    {
                                        expandImageField && field.hasNestedField &&
                                        <NameNestedImageFields expandImageField={expandImageField}
                                                               expandSizeField={expandSizeField}
                                                               onSizeFieldClick={onSizeFieldClick}
                                                               hasNestedField={field.hasNestedField}
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
                                        expandImageField && field.hasNestedField &&
                                        <ValueNestedImageFields expandSizeField={expandSizeField}
                                                                hasNestedField={field.hasNestedField}
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