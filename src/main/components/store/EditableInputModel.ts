import {types} from 'mobx-state-tree';


export const EditableInputModel = types
    .model('EditableInput', {
        inputValue: types.optional(types.string, ''),
        editMode: types.optional(types.boolean, false),
    })
    .actions(self => ({
            setInputValue(value: string): void {
                self.inputValue = value
            },
            setEditMode(value: boolean): void {
                self.editMode = value
            },
        })
    )

