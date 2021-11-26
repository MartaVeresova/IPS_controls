import React, {FC} from 'react';
import style from './TabControl.module.scss'
import {PropertiesControl} from './propertiesControl/PropertiesControl';

export type dataOfPropertiesTabType = {
    id: number
    hasNestedField: boolean
    propertyName: string
    propertyValue: any
    fieldType: string
}


type assignedSubjectAreaTypesType = {
    id: string
    name: string
}

const assignedSubjectAreaTypes: assignedSubjectAreaTypesType[] = [
    {id: 'D', name: 'Администрирование системы'},
    {id: 'B', name: 'Архитектура и строительство'},
    {id: 'C', name: 'Отладка'},
]

type propertyValueSectionType = {
    globalKey: string
    id: number
    icon: string
    isDefault: boolean
    litera: string
    name: string
    assignedSubjectAreaTypes: assignedSubjectAreaTypesType[]
    storageId: string
    fieldType: string
}

const propertyValueSection: propertyValueSectionType = {
    globalKey: '7cx8vx5cv45c4-dkfj5ds-sdfsdas',
    id: 1,
    icon: 'icon',
    isDefault: false,
    litera: 'litera',
    name: 'Test11331222323',
    assignedSubjectAreaTypes: assignedSubjectAreaTypes,
    storageId: 'storageId',
    fieldType: 'editableInput',
}

const dataOfPropertiesTab: dataOfPropertiesTabType[] = [
    {
        id: 1,
        hasNestedField: false,
        propertyName: 'Глобальный идентификатор',
        propertyValue: propertyValueSection.globalKey,
        fieldType: 'editableInput'
    },
    {
        id: 2,
        hasNestedField: false,
        propertyName: 'Идентификатор',
        propertyValue: propertyValueSection.id,
        fieldType: 'readOnlyInput'
    },
    {
        id: 3,
        hasNestedField: true,
        propertyName: 'Изображение',
        propertyValue: propertyValueSection.icon,
        fieldType: 'editableInput'
    },
    {
        id: 4,
        hasNestedField: false,
        propertyName: 'Использовать в качестве первого шага',
        propertyValue: propertyValueSection.isDefault,
        fieldType: 'singleDropDownSelect'
    },
    {
        id: 5,
        hasNestedField: false,
        propertyName: 'Контроль подписей',
        propertyValue: '',
        fieldType: 'openFileInput'
    },
    {
        id: 6,
        hasNestedField: false,
        propertyName: 'Литера',
        propertyValue: propertyValueSection.litera,
        fieldType: 'editableInput'
    },
    {
        id: 7,
        hasNestedField: false,
        propertyName: 'Наименование',
        propertyValue: propertyValueSection.name,
        fieldType: 'editableInput'
    },
    {
        id: 8,
        hasNestedField: false,
        propertyName: 'Предметная область',
        propertyValue: propertyValueSection.assignedSubjectAreaTypes,
        fieldType: 'editableInput'
    },
    {
        id: 9,
        hasNestedField: false,
        propertyName: 'Файловый шкаф',
        propertyValue: propertyValueSection.storageId,
        fieldType: 'editableInput'
    },
]


export const TabControl: FC = () => {

    return (
        <>
            <div className={style.tabControlButtons}>
                <button>Свойства</button>
                <button>Безопасность</button>
                <button>Действия над объектом</button>
            </div>
            <div className={style.tabControlContainer}>
                {dataOfPropertiesTab.map(field => <PropertiesControl key={field.id} field={field}/>)}
            </div>
        </>
    )
}