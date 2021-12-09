import {MultiType, ObjectTypesType, PropertyDataType, SimpleType} from '../../common/types/Types';


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

const propertyValueSection: ObjectTypesType = {
    id: 2039,
    globalKey: '037c4a0e-d1b4-4531-97dd-72cc5f7962d4',
    name: 'name_create',
    shortName: 'short_name_create',
    objectInstanceName: 'object_name_create',
    note_Create: 'note_Create',
    icon: null,
    versionMode: 'multiVersion',
    defaultRelationTypeId: 6,
    captionAttributeId: 18206,
    isAbleToAddAnyAttributes: true,
    deletedObjectLifetimeInDays: 0,
    objectTypeClassifiedOptionId: 1,
    isCurrentProjectEnabled: true,
    isNeedToCheckParentAccess: false,
    isLocalObjectType: true,
    isDisableManualCreate: true,
    isAbleToCreateSnapshots: true,
    isAutoContextEnabled: true,
    isMandateAccess: true,
    isNeedToIndexAttributes: true,
    isAutoCreateSnapshots: false,
    isDisablePrototyping: true,
    isNotificationsEnabled: true,
    isForumEnabled: true,
    isExtendedAudit: true,
    isEnableWebEdit: false,
    assignedSubjectAreaTypes: ['B', 'C'],
}

//данные на фронте
export const objectTypesData: PropertyDataType[] = [
    {
        propertyName: 'Атрибут-описатель',
        propertyValue: propertyValueSection.captionAttributeId,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Версионность',
        propertyValue: propertyValueSection.versionMode,
        fieldType: 'enumDropDown',
    },
    {
        propertyName: 'Включать новые версии в текущий контекст редактирования',
        propertyValue: propertyValueSection.isAutoContextEnabled,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Возможна рассылка уведомлений о действиях над объектами',
        propertyValue: propertyValueSection.isNotificationsEnabled,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Время жизни удалённых объектов (дней)',
        propertyValue: propertyValueSection.deletedObjectLifetimeInDays,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Глобальный идентификатор',
        propertyValue: propertyValueSection.globalKey,
        fieldType: 'readOnlyInput',
    },
    {
        propertyName: 'Запрет создания объектов командами Навигатора',
        propertyValue: propertyValueSection.isDisableManualCreate,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Запрет создания объектов по прототипу',
        propertyValue: propertyValueSection.isDisablePrototyping,
        fieldType: 'yesNoDropDown',
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
        propertyName: 'Имя объекта',
        propertyValue: propertyValueSection.objectInstanceName,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Индексировать таблицу атрибутов',
        propertyValue: propertyValueSection.isNeedToIndexAttributes,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Классификация создаваемых объектов',
        propertyValue: propertyValueSection.captionAttributeId,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Комментарий',
        propertyValue: propertyValueSection.note_Create,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Краткое наименование',
        propertyValue: propertyValueSection.shortName,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Локальный тип объектов',
        propertyValue: propertyValueSection.isLocalObjectType,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Любой атрибут',
        propertyValue: propertyValueSection.isAbleToAddAnyAttributes,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Мандатное разграничение доступа',
        propertyValue: propertyValueSection.isMandateAccess,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Наименование',
        propertyValue: propertyValueSection.name,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Наследование прав доступа',
        propertyValue: propertyValueSection.isNeedToCheckParentAccess,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Объекты выпускаются в рамках текущего проекта',
        propertyValue: propertyValueSection.isCurrentProjectEnabled,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Объекты доступны для обсуждения',
        propertyValue: propertyValueSection.isForumEnabled,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Предметная область',
        propertyValue: propertyValueSection.assignedSubjectAreaTypes,
        fieldType: 'multiDropDown',
    },
    {
        propertyName: 'Разрешить редактирование объектов в IPS WebInterface',
        propertyValue: propertyValueSection.isEnableWebEdit,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Разрешить создание итераций',
        propertyValue: propertyValueSection.isAbleToCreateSnapshots,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Разрешить создание итераций в автоматическом режиме',
        propertyValue: propertyValueSection.isAutoCreateSnapshots,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Расширенная регистрация событий в журнале',
        propertyValue: propertyValueSection.isExtendedAudit,
        fieldType: 'yesNoDropDown',
    },
    {
        propertyName: 'Связь по умолчанию',
        propertyValue: propertyValueSection.defaultRelationTypeId,
        fieldType: 'simpleDropDown',
    },
]