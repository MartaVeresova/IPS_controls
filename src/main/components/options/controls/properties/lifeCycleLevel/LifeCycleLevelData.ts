import {MultiType, PropertyDataType, SimpleType} from '../../../types/Types';

//данные с сервака
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


//данные на фронте
export const lifeCycleLevelData: PropertyDataType[] = [
    {
        propertyName: 'Глобальный идентификатор',
        propertyValue: null,
        valueName: 'globalKey',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Идентификатор',
        propertyValue: null,
        valueName: 'id',
        fieldType: 'readOnlyInput',
    },
    {
        propertyName: 'Изображение',
        propertyValue: null,
        valueName: 'icon',
        fieldType: 'openFileInput',
    },
    {
        propertyName: 'Использовать в качестве первого шага',
        propertyValue: null,
        valueName: 'isDefault',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Контроль подписей',
        propertyValue: null,
        valueName: '[не настроен]',
        fieldType: 'readOnlyInput',
    },
    {
        propertyName: 'Литера',
        propertyValue: null,
        valueName: 'litera',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Наименование',
        propertyValue: null,
        valueName: 'name',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Предметная область',
        propertyValue: null,
        valueName: 'assignedSubjectAreaIds',
        fieldType: 'multiDropDown',
    },
    {
        propertyName: 'Файловый шкаф',
        propertyValue: null,
        valueName: 'storageId',
        fieldType: 'simpleDropDown',
    },
]