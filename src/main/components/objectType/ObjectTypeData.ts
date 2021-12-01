export type ObjectTypesDataType = {
    hasNestedField: boolean
    propertyName: string
    propertyValue: any
    fieldType: string
}

type AssignedSubjectAreaType = {
    id: string
    name: string
}


type PropertyValueSectionType = {
    id: number
    globalKey: string
    name: string
    shortName: string
    objectInstanceName: string
    note: string
    icon: string | null
    versionMode: string
    defaultRelationTypeId: number
    captionAttributeId: null
    isAbleToAddAnyAttributes: boolean
    deletedObjectLifetimeInDays: number
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

const assignedSubjectArea: AssignedSubjectAreaType[] = [
    {id: 'D', name: 'Администрирование системы'},
    {id: 'B', name: 'Архитектура и строительство'},
    {id: 'C', name: 'Отладка'},
]

const propertyValueSection: PropertyValueSectionType = {
    id: 2039,
    globalKey: '037c4a0e-d1b4-4531-97dd-72cc5f7962d4',
    name: 'name_create',
    shortName: 'short_name_create',
    objectInstanceName: 'object_name_create',
    note: 'note_Create',
    icon: null,
    versionMode: 'multiVersion',
    defaultRelationTypeId: 0,
    captionAttributeId: null,
    isAbleToAddAnyAttributes: true,
    deletedObjectLifetimeInDays: 0,
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
    assignedSubjectAreaTypes: assignedSubjectArea,
}


export const objectTypesData: ObjectTypesDataType[] = [
    {
        hasNestedField: false,
        propertyName: 'Атрибут-описатель',
        propertyValue: propertyValueSection.captionAttributeId,
        fieldType: 'editableInput',
    },
    {
        hasNestedField: false,
        propertyName: 'Версионность',
        propertyValue: propertyValueSection.versionMode,
        fieldType: 'readOnlyInput',
    },
    {
        hasNestedField: true,
        propertyName: 'Включать новые версии в текущий контекст редактирования',
        propertyValue: propertyValueSection.isAutoContextEnabled,
        fieldType: 'openFileInput',
    },
    {
        hasNestedField: false,
        propertyName: 'Возможна рассылка уведомлений о действиях над объектом',
        propertyValue: propertyValueSection.isNotificationsEnabled,
        fieldType: 'singleDropDown',
    },
    {
        hasNestedField: false,
        propertyName: 'Время жизни удалённых объектов (дней)',
        propertyValue: propertyValueSection.deletedObjectLifetimeInDays,
        fieldType: 'readOnlyInput',
    },

]