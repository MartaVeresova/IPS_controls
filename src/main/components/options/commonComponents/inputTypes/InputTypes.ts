import {types} from 'mobx-state-tree';


export const InputTypesModel = types
    .model('InputTypes', {
        globalKey: types.string,
        id: types.identifierNumber,
        icon: types.optional(types.maybeNull(types.string), ''),
        isDefault: types.boolean,
        litera: types.string,
        name: types.string,
        assignedSubjectAreaIds: types.array(types.string),
        storageId: types.optional(types.maybeNull(types.string), ''),
    })
    .actions(self => ({
        setInputValue(value: string): void {

        }
    }))