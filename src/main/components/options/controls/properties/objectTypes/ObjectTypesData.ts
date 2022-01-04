import {MultiType, PropertyDataType, SimpleType} from '../../../types/Types';


//данные с сервака
export const defaultRelationType: SimpleType[] = [
    {id: 0, displayName: 'Аналоги'},
    {id: 1, displayName: 'Вложения'},
    {id: 2, displayName: 'Документация на изделие'},
    {id: 3, displayName: 'Дополняет извещение'},
    {id: 4, displayName: 'Журнал изменений на изделие'},
    {id: 5, displayName: 'Избранное IMBASE'},
    {id: 6, displayName: 'Изделие-заготовка'},
    {id: 7, displayName: 'Изменяемые объекты'},
    {id: 8, displayName: 'Изменяется по извещению'},
]

export const captionAttribute: SimpleType[] = [
    {id: null, displayName: ''},
    {id: 1425, displayName: 'SEARCH_ID_ARCHIVE'},
    {id: 18033, displayName: 'Автоматически размещающиеся в архиве типы документов'},
    {id: 1056, displayName: 'Глобальные идентификаторы типов объектов'},
    {id: 18206, displayName: 'Значения по умолчанию атрибутов структуры архива'},
    {id: 17491, displayName: 'Идентификатор активной итерации'},
    {id: 10, displayName: 'Наименование'},
    {id: 1031, displayName: 'Настройка подписей'},
    {id: 18523, displayName: 'Настройки колонок архива по умолчанию'},
    {id: 7, displayName: 'Описание'},
    {id: 18034, displayName: 'Пользователи, автоматически размещающие в архив документы'},
    {id: 17493, displayName: 'Режим использования списка типов файлов архива'},
    {id: 17487, displayName: 'Создавать версии документов в архиве'},
    {id: 1030, displayName: 'Структура архива'},
    {id: 1017, displayName: 'Файловый шкаф'},
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
    {id: 'I', displayName: 'SubjectArea_test1_ui'},
]


//данные на фронте
export const objectTypesData: PropertyDataType[] = [
    // {
    //     propertyName: 'Атрибут-описатель',
    //     propertyValue: null,
    //     fieldName: 'captionAttributeId',
    //     fieldType: 'simpleDropDown',
    //     // dropDownModel: {
    //     //     simpleDropDownList: [
    //     //         {id: 6, displayName: 'xcvc'}
    //     //     ]
    //     // }
    // },
    // {
    //     propertyName: 'Версионность',
    //     propertyValue: null,
    //     fieldName: 'versionMode',
    //     fieldType: 'enumDropDown',
    // },
    // {
    //     propertyName: 'Включать новые версии в текущий контекст редактирования',
    //     propertyValue: null,
    //     fieldName: 'isAutoContextEnabled',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Возможна рассылка уведомлений о действиях над объектами',
    //     propertyValue: null,
    //     fieldName: 'isNotificationsEnabled',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Время жизни удалённых объектов (дней)',
    //     propertyValue: null,
    //     fieldName: 'deletedObjectLifetimeInDays',
    //     fieldType: 'editableInput',
    // },
    // {
    //     propertyName: 'Глобальный идентификатор',
    //     propertyValue: null,
    //     fieldName: 'globalKey',
    //     fieldType: 'readOnlyInput',
    // },
    // {
    //     propertyName: 'Запрет создания объектов командами Навигатора',
    //     propertyValue: null,
    //     fieldName: 'isDisableManualCreate',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Запрет создания объектов по прототипу',
    //     propertyValue: null,
    //     fieldName: 'isDisablePrototyping',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Идентификатор',
    //     propertyValue: null,
    //     fieldName: 'id',
    //     fieldType: 'readOnlyInput',
    // },
    // {
    //     propertyName: 'Изображение',
    //     propertyValue: null,
    //     fieldName: 'icon',
    //     fieldType: 'openFileInput',
    // },
    // {
    //     propertyName: 'Имя объекта',
    //     propertyValue: null,
    //     fieldName: 'objectInstanceName',
    //     fieldType: 'editableInput',
    // },
    // {
    //     propertyName: 'Индексировать таблицу атрибутов',
    //     propertyValue: null,
    //     fieldName: 'isNeedToIndexAttributes',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Классификация создаваемых объектов',
    //     propertyValue: null,
    //     fieldName: 'classification',
    //     fieldType: 'editableInput',
    // },
    // {
    //     propertyName: 'Комментарий',
    //     propertyValue: null,
    //     fieldName: 'note_Create',
    //     fieldType: 'editableInput',
    // },
    // {
    //     propertyName: 'Краткое наименование',
    //     propertyValue: null,
    //     fieldName: 'shortName',
    //     fieldType: 'editableInput',
    // },
    // {
    //     propertyName: 'Локальный тип объектов',
    //     propertyValue: null,
    //     fieldName: 'isLocalObjectType',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Любой атрибут',
    //     propertyValue: null,
    //     fieldName: 'isAbleToAddAnyAttributes',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Мандатное разграничение доступа',
    //     propertyValue: null,
    //     fieldName: 'isMandateAccess',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Наименование',
    //     propertyValue: null,
    //     fieldName: 'name',
    //     fieldType: 'editableInput',
    // },
    // {
    //     propertyName: 'Наследование прав доступа',
    //     propertyValue: null,
    //     fieldName: 'isNeedToCheckParentAccess',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Объекты выпускаются в рамках текущего проекта',
    //     propertyValue: null,
    //     fieldName: 'isCurrentProjectEnabled',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Объекты доступны для обсуждения',
    //     propertyValue: null,
    //     fieldName: 'isForumEnabled',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Предметная область',
    //     propertyValue: null,
    //     fieldName: 'assignedSubjectAreaIds',
    //     fieldType: 'multiDropDown',
    // },
    // {
    //     propertyName: 'Разрешить редактирование объектов в IPS WebInterface',
    //     propertyValue: null,
    //     fieldName: 'isEnableWebEdit',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Разрешить создание итераций',
    //     propertyValue: null,
    //     fieldName: 'isAbleToCreateSnapshots',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Разрешить создание итераций в автоматическом режиме',
    //     propertyValue: null,
    //     fieldName: 'isAutoCreateSnapshots',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Расширенная регистрация событий в журнале',
    //     propertyValue: null,
    //     fieldName: 'isExtendedAudit',
    //     fieldType: 'yesNoDropDown',
    // },
    // {
    //     propertyName: 'Связь по умолчанию',
    //     propertyValue: null,
    //     fieldName: 'defaultRelationTypeId',
    //     fieldType: 'simpleDropDown',
    // },
]