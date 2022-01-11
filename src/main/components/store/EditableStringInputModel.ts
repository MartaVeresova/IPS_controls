import {types} from 'mobx-state-tree';


export const EditableStringInputModel = types
    .model('EditableStringInput', {
        stringInputValue: types.optional(types.string, ''),
        isEditMode: types.optional(types.boolean, false),
    })
    .actions(self => ({
            setInputValue(value: string): void {
                self.stringInputValue = value
            },
            setIsEditMode(value: boolean): void {
                self.isEditMode = value
            },
        })
    )

