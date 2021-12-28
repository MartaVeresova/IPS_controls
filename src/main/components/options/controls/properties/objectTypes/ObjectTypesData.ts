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
    {
        propertyName: 'Атрибут-описатель',
        propertyValue: null,
        valueName: 'captionAttributeId',
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Версионность',
        propertyValue: null,
        valueName: 'versionMode',
        fieldType: 'enumDropDown',
    },
    {
        propertyName: 'Включать новые версии в текущий контекст редактирования',
        propertyValue: null,
        valueName: 'isAutoContextEnabled',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Возможна рассылка уведомлений о действиях над объектами',
        propertyValue: null,
        valueName: 'isNotificationsEnabled',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Время жизни удалённых объектов (дней)',
        propertyValue: null,
        valueName: 'deletedObjectLifetimeInDays',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Глобальный идентификатор',
        propertyValue: null,
        valueName: 'globalKey',
        fieldType: 'readOnlyInput',
    },
    {
        propertyName: 'Запрет создания объектов командами Навигатора',
        propertyValue: null,
        valueName: 'isDisableManualCreate',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Запрет создания объектов по прототипу',
        propertyValue: null,
        valueName: 'isDisablePrototyping',
        fieldType: 'yesNoDropDown',
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
        propertyName: 'Имя объекта',
        propertyValue: null,
        valueName: 'objectInstanceName',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Индексировать таблицу атрибутов',
        propertyValue: null,
        valueName: 'isNeedToIndexAttributes',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Классификация создаваемых объектов',
        propertyValue: null,
        valueName: 'classification',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Комментарий',
        propertyValue: null,
        valueName: 'note_Create',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Краткое наименование',
        propertyValue: null,
        valueName: 'shortName',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Локальный тип объектов',
        propertyValue: null,
        valueName: 'isLocalObjectType',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Любой атрибут',
        propertyValue: null,
        valueName: 'isAbleToAddAnyAttributes',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Мандатное разграничение доступа',
        propertyValue: null,
        valueName: 'isMandateAccess',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Наименование',
        propertyValue: null,
        valueName: 'name',
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Наследование прав доступа',
        propertyValue: null,
        valueName: 'isNeedToCheckParentAccess',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Объекты выпускаются в рамках текущего проекта',
        propertyValue: null,
        valueName: 'isCurrentProjectEnabled',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Объекты доступны для обсуждения',
        propertyValue: null,
        valueName: 'isForumEnabled',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Предметная область',
        propertyValue: null,
        valueName: 'assignedSubjectAreaIds',
        fieldType: 'multiDropDown',
    },
    {
        propertyName: 'Разрешить редактирование объектов в IPS WebInterface',
        propertyValue: null,
        valueName: 'isEnableWebEdit',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Разрешить создание итераций',
        propertyValue: null,
        valueName: 'isAbleToCreateSnapshots',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Разрешить создание итераций в автоматическом режиме',
        propertyValue: null,
        valueName: 'isAutoCreateSnapshots',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Расширенная регистрация событий в журнале',
        propertyValue: null,
        valueName: 'isExtendedAudit',
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Связь по умолчанию',
        propertyValue: null,
        valueName: 'defaultRelationTypeId',
        fieldType: 'simpleDropDown',
    },
]