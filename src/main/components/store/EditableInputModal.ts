import {Instance, types} from 'mobx-state-tree';


export const EditableInputModel = types
    .model('EditableInput', {
        value: types.optional(types.string, ''),
    })



export type EditableInput = Instance<typeof EditableInputModel>

