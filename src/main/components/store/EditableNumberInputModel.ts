import {types} from 'mobx-state-tree';


export const EditableNumberInputModel = types
    .model('EditableNumberInput', {
        numberInputValue: types.optional(types.number, 0),
        isNumberMode: types.optional(types.boolean, true),
    })
    .actions(self => ({
            setInputValue(value: number): void {
                self.numberInputValue = value
            },
            setIsNumberMode(value: boolean): void {
                self.isNumberMode = value
            },
        })
    )

