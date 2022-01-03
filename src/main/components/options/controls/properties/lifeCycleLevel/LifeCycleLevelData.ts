import {MultiType, PropertyDataType, SimpleType} from '../../../types/Types';

//данные с сервака
export const storage: SimpleType[] = [
    {id: null, displayName: ''},
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
        fieldName: 'globalKey',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Идентификатор',
        propertyValue: null,
        fieldName: 'id',
        fieldType: 'readOnlyInput',
    },
    {
        propertyName: 'Изображение',
        propertyValue: null,
        fieldName: 'icon',
        fieldType: 'openFileInput',
    },
    {
        propertyName: 'Использовать в качестве первого шага',
        propertyValue: null,
        fieldName: 'isDefault',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Контроль подписей',
        propertyValue: null,
        fieldName: '[не настроен]',
        fieldType: 'readOnlyInput',
    },
    {
        propertyName: 'Литера',
        propertyValue: null,
        fieldName: 'litera',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Наименование',
        propertyValue: null,
        fieldName: 'name',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Предметная область',
        propertyValue: null,
        fieldName: 'assignedSubjectAreaIds',
        fieldType: 'multiDropDown',
    },
    {
        propertyName: 'Файловый шкаф',
        propertyValue: null,
        fieldName: 'storageId',
        fieldType: 'simpleDropDown',
    },
]


const arr = ['Глобальный идентификатор', 'Идентификатор']
const arr2 = ['globalKey', 'id']
const arr3 = ['editableInput', 'readOnlyInput']

const array = arr.map((item, i) => {
    return {
        propertyName: item,
        propertyValue: null,
        fieldName: arr2[i],
        fieldType: arr3[i],
        selectedItem: null,
    }
})