import {types} from 'mobx-state-tree';

const AssignedSubjectAreaTypes = types
    .model('AssignedSubjectAreaTypes', {
        id: types.identifier,
        name: types.string,
    })

const PropertyValueSection = types
    .model('PropertyValueSection', {
        globalKey: types.string,
        id: types.identifier,
        icon: types.string,
        isDefault: types.boolean,
        litera: types.string,
        name: types.string,
        assignedSubjectAreaTypes: types.array(AssignedSubjectAreaTypes),
        storageId: types.maybe(types.string),
    })

export const DataOfPropertiesTabField = types
    .model('DataOfPropertiesTabField', {
        id: types.identifier,
        hasNestedField: types.boolean,
        propertyName: types.string,
        propertyValue: types.safeReference(PropertyValueSection),
        fieldType: types.string,
    })

export const PropertiesControlStore = types
    .model('PropertiesControlStore', {
        dataOfPropertiesTab: types.maybe(types.array(DataOfPropertiesTabField)),
    })
    .actions(self => ({
        showTable() {
            console.log(self)
        }
    }))