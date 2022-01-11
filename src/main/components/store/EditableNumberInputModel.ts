import {types} from 'mobx-state-tree';


export const EditableNumberInputModel = types
    .model('EditableNumberInput', {
        numberInputValue: types.optional(types.number, 0),
        isEditMode: types.optional(types.boolean, false),
    })
    .actions(self => ({
            setInputValue(value: number): void {
                self.numberInputValue = value
            },
            setIsEditMode(value: boolean): void {
                self.isEditMode = value
            },
        })
    )

