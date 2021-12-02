const image = 'data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfHx8/3x8fP98fHz/fHx8/3x8fP98fHz/fHx8/3x8fP98fHz/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHx8fP98fHz/fHx8/3x8fP98fHz/fHx8/3x8fP98fHz/fHx8/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfHx8/3x8fP98fHz/fHx8/3x8fP98fHz/AAAAALl7X//Urp3//v7+//7+/v/+/v7/zKCL/7p9Yf8AAAAAAAAAAHx8fP98fHz/fHx8/3x8fP98fHz/fHx8/72CZ/+6fGD/3b+y//7+/v/+/v7//v7+/9Wwn/+6fGD/vYJn/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5el7/uXpe/+jSx//9/v7/3eLx//7+/v/fwrX/uHhb/7p8X/8AAAAAAAAAAAAAAAAAAAAA0g+r/9IPq//SD6v/3sCz/8CHbP/v4Nn/prXi/11xvf+3xen/6tTI/8CHbf/jyr7/AAAAAAAAAAAAAAAAAAAAANIPq//SD6v/0g+r/wAAAAAAAAAA2Njm/01bpf9BTI//WWiu/+bj6f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvfLj/hZbN/3F+uP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg5fT/4ud1v+FmNP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqLTd/4SX0v+Jm9T/g5bS/7O+4P8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIGJrP+JnNj/i53X/4mc2v+Eiqn/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRVHD/jqHf/4WWzv91hLf/PDpM/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXltk/yYmP/8gHjH/CgIN/3Frbv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUj4//a2Vo/62qrP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gCcQf4AnEH//5xB/8CcQYDAnEEAf5xBAHicQQB4nEHB/5xB4/+cQeP/nEHB/5xBwf+cQcH/nEHB/5xB4/+cQQ=='


type AssignedSubjectAreaType = {
    id: string
    name: string
}

const assignedSubjectAreaTypes: AssignedSubjectAreaType[] = [
    {id: 'D', name: 'Администрирование системы'},
    {id: 'B', name: 'Архитектура и строительство'},
    {id: 'C', name: 'Отладка'},
]

type PropertyValueSectionType = {
    globalKey: string
    id: number
    icon: string | null
    isDefault: boolean
    litera: string
    name: string
    assignedSubjectAreaTypes: AssignedSubjectAreaType[]
    storageId: string
}

const propertyValueSection: PropertyValueSectionType = {
    globalKey: '7cx8vx5cv45c4-dkfj5ds-sdfsdas',
    id: 1024,
    icon: image,
    isDefault: false,
    litera: 'litera',
    name: 'Test11331222323',
    assignedSubjectAreaTypes: assignedSubjectAreaTypes,
    storageId: 'storageId',
}

type FieldTypes =
    | 'editableInput'
    | 'readOnlyInput'
    | 'openFileInput'
    | 'simpleDropDown'
    | 'multiDropDown'


export type LifeCycleLevelDataType = {
    propertyName: string
    propertyValue: any
    fieldType: FieldTypes
}

export const lifeCycleLevelData: LifeCycleLevelDataType[] = [
    {
        propertyName: 'Глобальный идентификатор',
        propertyValue: propertyValueSection.globalKey,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Идентификатор',
        propertyValue: propertyValueSection.id,
        fieldType: 'readOnlyInput',
    },
    {
        propertyName: 'Изображение',
        propertyValue: propertyValueSection.icon,
        fieldType: 'openFileInput',
    },
    {
        propertyName: 'Использовать в качестве первого шага',
        propertyValue: propertyValueSection.isDefault,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Контроль подписей',
        propertyValue: '[не настроен]',
        fieldType: 'readOnlyInput',
    },
    {
        propertyName: 'Литера',
        propertyValue: propertyValueSection.litera,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Наименование',
        propertyValue: propertyValueSection.name,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Предметная область',
        propertyValue: propertyValueSection.assignedSubjectAreaTypes,
        fieldType: 'multiDropDown',
    },
    {
        propertyName: 'Файловый шкаф',
        propertyValue: propertyValueSection.storageId,
        fieldType: 'editableInput',
    },
]