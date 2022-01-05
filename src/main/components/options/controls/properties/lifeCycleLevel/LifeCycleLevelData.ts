import {PropertyDataType} from '../../../types/Types';

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

