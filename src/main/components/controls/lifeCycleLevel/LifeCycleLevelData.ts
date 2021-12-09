import {LifeCycleLevelType, MultiType, PropertyDataType, SimpleType} from '../../common/types/Types';

//данные с сервака
const image: string = 'data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfHx8/3x8fP98fHz/fHx8/3x8fP98fHz/fHx8/3x8fP98fHz/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHx8fP98fHz/fHx8/3x8fP98fHz/fHx8/3x8fP98fHz/fHx8/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfHx8/3x8fP98fHz/fHx8/3x8fP98fHz/AAAAALl7X//Urp3//v7+//7+/v/+/v7/zKCL/7p9Yf8AAAAAAAAAAHx8fP98fHz/fHx8/3x8fP98fHz/fHx8/72CZ/+6fGD/3b+y//7+/v/+/v7//v7+/9Wwn/+6fGD/vYJn/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5el7/uXpe/+jSx//9/v7/3eLx//7+/v/fwrX/uHhb/7p8X/8AAAAAAAAAAAAAAAAAAAAA0g+r/9IPq//SD6v/3sCz/8CHbP/v4Nn/prXi/11xvf+3xen/6tTI/8CHbf/jyr7/AAAAAAAAAAAAAAAAAAAAANIPq//SD6v/0g+r/wAAAAAAAAAA2Njm/01bpf9BTI//WWiu/+bj6f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvfLj/hZbN/3F+uP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg5fT/4ud1v+FmNP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqLTd/4SX0v+Jm9T/g5bS/7O+4P8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIGJrP+JnNj/i53X/4mc2v+Eiqn/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRVHD/jqHf/4WWzv91hLf/PDpM/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXltk/yYmP/8gHjH/CgIN/3Frbv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUj4//a2Vo/62qrP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gCcQf4AnEH//5xB/8CcQYDAnEEAf5xBAHicQQB4nEHB/5xB4/+cQeP/nEHB/5xBwf+cQcH/nEHB/5xB4/+cQQ=='


export const storage: SimpleType[] = [
    {id: 8, displayName: 'DOCUMS'},
]

export const assignedSubjectAreaTypes: MultiType[] = [
    {id: 'A', displayName: 'Конструкторская подготовка'},
    {id: 'B', displayName: 'Архитектура и строительство'},
    {id: 'C', displayName: 'Отладка'},
    {id: 'D', displayName: 'Администрирование системы'},
    {id: 'E', displayName: 'Технологическая подготовка'},
    {id: 'F', displayName: 'Общая'},
    {id: 'G', displayName: 'Производство'},
    {id: 'H', displayName: 'Управление НСИ'},
    {id: 'I', displayName: 'SubjectArea_test1_ui'}
]

const propertyValueSection: LifeCycleLevelType = {
    globalKey: '7cx8vx5cv45c4-dkfj5ds-sdfsdas',
    id: 1024,
    icon: image,
    isDefault: false,
    litera: 'litera',
    name: 'Test11331222323',
    assignedSubjectAreaIds: ['B', 'C'],
    storageId: null,
}

//данные на фронте
export const lifeCycleLevelData: PropertyDataType[] = [
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
        fieldType: 'yesNoDropDown',
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
        propertyValue: propertyValueSection.assignedSubjectAreaIds,
        fieldType: 'multiDropDown',
    },
    {
        propertyName: 'Файловый шкаф',
        propertyValue: propertyValueSection.storageId,
        fieldType: 'simpleDropDown',
    },
]