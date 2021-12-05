export type FieldTypes =
    | 'editableInput'
    | 'readOnlyInput'
    | 'openFileInput'
    | 'yesNoDropDown'
    | 'multiDropDown'
    | 'simpleDropDown'

export type AssignedSubjectAreaType = {
    id: string
    name: string
}

export type PropertyDataType = {
    propertyName: string
    propertyValue: any
    fieldType: FieldTypes
}