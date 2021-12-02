import {string} from 'mobx-state-tree/dist/types/primitives';

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
    id: number
    globalKey: string
    name: string
    shortName: string
    objectInstanceName: string
    note_Create: string
    icon: string | null
    versionMode: string
    defaultRelationTypeId: number
    captionAttributeId: string | null
    isAbleToAddAnyAttributes: boolean
    deletedObjectLifetimeInDays: number
    objectTypeClassifiedOptionId: number
    isCurrentProjectEnabled: boolean
    isNeedToCheckParentAccess: boolean
    isLocalObjectType: boolean
    isDisableManualCreate: boolean
    isAbleToCreateSnapshots: boolean
    isAutoContextEnabled: boolean
    isMandateAccess: boolean
    isNeedToIndexAttributes: boolean
    isAutoCreateSnapshots: boolean
    isDisablePrototyping: boolean
    isNotificationsEnabled: boolean
    isForumEnabled: boolean
    isExtendedAudit: boolean
    isEnableWebEdit: boolean
    assignedSubjectAreaTypes: AssignedSubjectAreaType[]
}

const propertyValueSection: PropertyValueSectionType = {
    id: 2039,
    globalKey: '037c4a0e-d1b4-4531-97dd-72cc5f7962d4',
    name: 'name_create',
    shortName: 'short_name_create',
    objectInstanceName: 'object_name_create',
    note_Create: 'note_Create',
    icon: null,
    versionMode: 'multiVersion',
    defaultRelationTypeId: 0,
    captionAttributeId: '',
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
    assignedSubjectAreaTypes: assignedSubjectAreaTypes,
}

type FieldTypes =
    | 'editableInput'
    | 'readOnlyInput'
    | 'openFileInput'
    | 'simpleDropDown'
    | 'multiDropDown'


export type ObjectTypesDataType = {
    propertyName: string
    propertyValue: any
    fieldType: FieldTypes
}

export const objectTypesData: ObjectTypesDataType[] = [
    {
        propertyName: 'Атрибут-описатель',
        propertyValue: propertyValueSection.captionAttributeId,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Версионность',
        propertyValue: propertyValueSection.versionMode,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Включать новые версии в текущий контекст редактирования',
        propertyValue: propertyValueSection.isAutoContextEnabled,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Возможна рассылка уведомлений о действиях над объектами',
        propertyValue: propertyValueSection.isNotificationsEnabled,
        fieldType: 'simpleDropDown',
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
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Запрет создания объектов по прототипу',
        propertyValue: propertyValueSection.isDisablePrototyping,
        fieldType: 'simpleDropDown',
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
        fieldType: 'simpleDropDown',
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
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Любой атрибут',
        propertyValue: propertyValueSection.isAbleToAddAnyAttributes,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Мандатное разграничение доступа',
        propertyValue: propertyValueSection.isMandateAccess,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Наименование',
        propertyValue: propertyValueSection.name,
        fieldType: 'editableInput',
    },
    {
        propertyName: 'Наследование прав доступа',
        propertyValue: propertyValueSection.isNeedToCheckParentAccess,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Объекты выпускаются в рамках текущего проекта',
        propertyValue: propertyValueSection.isCurrentProjectEnabled,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Объекты доступны для обсуждения',
        propertyValue: propertyValueSection.isForumEnabled,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Предметная область',
        propertyValue: propertyValueSection.assignedSubjectAreaTypes,
        fieldType: 'multiDropDown',
    },
    {
        propertyName: 'Разрешить редактирование объектов в IPS WebInterface',
        propertyValue: propertyValueSection.isEnableWebEdit,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Разрешить создание итераций',
        propertyValue: propertyValueSection.isAbleToCreateSnapshots,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Разрешить создание итераций в автоматическом режиме',
        propertyValue: propertyValueSection.isAutoCreateSnapshots,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Расширенная регистрация событий в журнале',
        propertyValue: propertyValueSection.isExtendedAudit,
        fieldType: 'simpleDropDown',
    },
    {
        propertyName: 'Связь по умолчанию',
        propertyValue: propertyValueSection.defaultRelationTypeId,
        fieldType: 'editableInput',
    },
]