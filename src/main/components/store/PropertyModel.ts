import {cast, Instance, types} from 'mobx-state-tree';
import {DataType, PropertyDataType} from '../options/types/Types';
import {SimpleDropDownModel} from './SimpleDropDownModel';
import {EnumDropDownModel} from './EnumDropDownModel';
import {YesNoDropDownModel} from './YesNoDropDownModel';
import {MultiDropDownModel} from './MultiDropDownModel';
import {OpenFileModel} from './OpenFileModel';
import {EditableStringInputModel} from './EditableStringInputModel';
import {EditableNumberInputModel} from './EditableNumberInputModel';
import {RootModel} from './index';

const image: string = 'data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfHx8/3x8fP98fHz/fHx8/3x8fP98fHz/fHx8/3x8fP98fHz/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHx8fP98fHz/fHx8/3x8fP98fHz/fHx8/3x8fP98fHz/fHx8/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfHx8/3x8fP98fHz/fHx8/3x8fP98fHz/AAAAALl7X//Urp3//v7+//7+/v/+/v7/zKCL/7p9Yf8AAAAAAAAAAHx8fP98fHz/fHx8/3x8fP98fHz/fHx8/72CZ/+6fGD/3b+y//7+/v/+/v7//v7+/9Wwn/+6fGD/vYJn/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5el7/uXpe/+jSx//9/v7/3eLx//7+/v/fwrX/uHhb/7p8X/8AAAAAAAAAAAAAAAAAAAAA0g+r/9IPq//SD6v/3sCz/8CHbP/v4Nn/prXi/11xvf+3xen/6tTI/8CHbf/jyr7/AAAAAAAAAAAAAAAAAAAAANIPq//SD6v/0g+r/wAAAAAAAAAA2Njm/01bpf9BTI//WWiu/+bj6f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvfLj/hZbN/3F+uP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg5fT/4ud1v+FmNP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqLTd/4SX0v+Jm9T/g5bS/7O+4P8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIGJrP+JnNj/i53X/4mc2v+Eiqn/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRVHD/jqHf/4WWzv91hLf/PDpM/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXltk/yYmP/8gHjH/CgIN/3Frbv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUj4//a2Vo/62qrP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gCcQf4AnEH//5xB/8CcQYDAnEEAf5xBAHicQQB4nEHB/5xB4/+cQeP/nEHB/5xBwf+cQcH/nEHB/5xB4/+cQQ=='


const PropertyValueType = types.union(
    types.string,
    types.boolean,
    types.number,
    types.maybeNull(types.number),
    types.maybeNull(types.string),
    types.array(types.string)
)

const FieldTypesUnion = types.union(
    types.literal('editableStringInput'),
    types.literal('editableNumberInput'),
    types.literal('readOnlyInput'),
    types.literal('openFileInput'),
    types.literal('yesNoDropDown'),
    types.literal('multiDropDown'),
    types.literal('simpleDropDown'),
    types.literal('enumDropDown'),
)

export const AdditionalModelsType = types.union(
    EditableStringInputModel,
    EditableNumberInputModel,
    OpenFileModel,
    YesNoDropDownModel,
    MultiDropDownModel,
    SimpleDropDownModel,
    EnumDropDownModel,
)

export type IAdditionalModelsType = Instance<typeof AdditionalModelsType>;


export const PropertyItemModel = types
    .model('PropertyItem', {
        propertyName: types.optional(types.string, ''),
        propertyValue: types.optional(types.union(PropertyValueType), null),
        fieldName: types.optional(types.string, ''),
        fieldType: types.optional(FieldTypesUnion, 'editableStringInput'),
        additionalModel: types.optional(AdditionalModelsType, {}),
    })
    .actions(self => ({
        setSelectedItem(value: string | number | boolean | null | string[], fieldName: string): void {
            if (self.fieldName === fieldName) {
                self.propertyValue = value
            }
        },
    }))


export const PropertyControlModel = types
    .model('PropertyControl', {
        propertyData: types.optional(types.array(PropertyItemModel), []),
    })
    .actions(self => {
        let responseData: { [keys: string]: string | number | boolean | string[] | null }
        return {
            getLifeCycleLevelData(): void {
                responseData = {
                    globalKey: '7cx8vx5cv45c4-dkfj5ds-sdfsdas',
                    id: 1024,
                    icon: image,
                    isDefault: false,
                    litera: 'litera',
                    name: 'Test11331222323',
                    assignedSubjectAreaIds: ['B', 'C'],
                    storageId: 8,
                }
            },
            getObjectTypesData(): void {
                responseData = {
                    globalKey: '037c4a0e-d1b4-4531-97dd-72cc5f7962d4',
                    id: 2039,
                    name: 'name_create',
                    shortName: 'short_name_create',
                    objectInstanceName: 'object_name_create',
                    note_Create: 'note_Create',
                    icon: null,
                    versionMode: 'multiVersion',
                    defaultRelationTypeId: 6,
                    captionAttributeId: 7,
                    isAbleToAddAnyAttributes: false,
                    deletedObjectLifetimeInDays: 2,
                    objectTypeClassifiedOptionId: 0,
                    isCurrentProjectEnabled: true,
                    isNeedToCheckParentAccess: false,
                    isLocalObjectType: true,
                    isDisableManualCreate: false,
                    isAbleToCreateSnapshots: false,
                    isAutoContextEnabled: false,
                    isMandateAccess: false,
                    isNeedToIndexAttributes: true,
                    isAutoCreateSnapshots: false,
                    isDisablePrototyping: true,
                    isNotificationsEnabled: true,
                    isForumEnabled: true,
                    isExtendedAudit: true,
                    isEnableWebEdit: false,
                    assignedSubjectAreaIds: ['B', 'C'],
                }
            },
            init(data: PropertyDataType[]) {
                let newData: DataType[] = []

                data.forEach(item => {
                    let additionalModel = {}
                    if (item.fieldType === 'editableStringInput') {
                        additionalModel = EditableStringInputModel.create({
                            stringInputValue: '',
                            isEditMode: false,
                        })
                    }
                    if (item.fieldType === 'editableNumberInput') {
                        additionalModel = EditableNumberInputModel.create({
                            numberInputValue: 0,
                            isNumberMode: true,
                        })
                    }
                    if (item.fieldType === 'openFileInput') {
                        additionalModel = OpenFileModel.create({
                            isImageFieldExpanded: false,
                            isSizeFieldExpanded: false,
                        })
                    }
                    if (item.fieldType === 'yesNoDropDown') {
                        additionalModel = YesNoDropDownModel.create({
                            yesNoSelectedName: '',
                            isDropDownListOpened: false,
                        })
                    }
                    if (item.fieldType === 'multiDropDown') {
                        additionalModel = MultiDropDownModel.create({
                            multiDropDownList: [],
                            isCheckedAll: false,
                            isDropDownListOpened: false,
                        })
                    }
                    if (item.fieldType === 'simpleDropDown') {
                        additionalModel = SimpleDropDownModel.create({
                            simpleDropDownList: [],
                            isDropDownListOpened: false,
                        })
                    }
                    if (item.fieldType === 'enumDropDown') {
                        additionalModel = EnumDropDownModel.create({
                            enumSelectedName: '',
                            isDropDownListOpened: false,
                        })
                    }

                    const fieldModel: DataType = {
                        propertyName: item.propertyName,
                        propertyValue: responseData[item.fieldName],
                        fieldName: item.fieldName,
                        fieldType: item.fieldType,
                        additionalModel: additionalModel || {},
                    }
                    newData.push(fieldModel)
                })
                self.propertyData = cast(newData)
            },
            sentData(): void {
                const data = Object.fromEntries(self.propertyData.map(n => [n.fieldName, n.propertyValue]))
                console.log(data)
            },
        }
    })



