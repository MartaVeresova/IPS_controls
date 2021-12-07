//common
export type FieldTypes =
    | 'editableInput'
    | 'readOnlyInput'
    | 'openFileInput'
    | 'yesNoDropDown'
    | 'multiDropDown'
    | 'simpleDropDown'
    | 'enumDropDown'


export type PropertyDataType = {
    propertyName: string
    propertyValue: any
    fieldType: FieldTypes
}

//ObjectTypes
export type AssignedSubjectAreaType = {
    id: string
    name: string
}
export type DefaultRelationTypeType = {
    id: number
    name: string
}
export type CaptionAttributeType = {
    id: number
    displayName: string
}
export type ObjectTypesType = {
    id: number
    globalKey: string
    name: string
    shortName: string
    objectInstanceName: string
    note_Create: string
    icon: string | null
    versionMode: string
    defaultRelationTypeId: number
    captionAttributeId: number | null
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
    assignedSubjectAreaTypes: string[]
}

//LifeCycleLevel
export type LifeCycleLevelType = {
    globalKey: string
    id: number
    icon: string | null
    isDefault: boolean
    litera: string
    name: string
    assignedSubjectAreaIds: string[]
    storageId: string
}