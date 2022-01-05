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
    fieldName: string
    fieldType: FieldTypes
}

export type MultiDropDownType = {
    id: string
    displayName: string
}

export type SimpleDropDownType = {
    id: number | null
    displayName: string
}

export type DataType = {
    propertyName: string
    propertyValue: any
    fieldName: string
    fieldType: FieldTypes
    additionalModel:
        | { inputValue: string, editMode: boolean }
        | { isImageFieldExpanded: boolean, isSizeFieldExpanded: boolean }
        | { yesNoSelectedName: string, isDropDownListOpened: boolean }
        | { multiDropDownList: MultiDropDownType[], isCheckedAll: boolean, isDropDownListOpened: boolean }
        | { simpleDropDownList: SimpleDropDownType[], isDropDownListOpened: boolean }
        | { enumSelectedName: string, isDropDownListOpened: boolean }
        | {}
}

