import {Instance, types} from 'mobx-state-tree';


export const EnumDropDownModel = types
    .model('EnumDropDown', {
        enumSelectedName: types.optional(types.string, ''),
        enumSelectedOption: types.optional(types.string, ''),
    })
    .actions(self => {
            return {
                setEnumDropDownSelectedItem(option: string, name: string): void {
                    self.enumSelectedOption = option
                    self.enumSelectedName = name
                },
            }
        }
    )

export type EnumDropDown = Instance<typeof EnumDropDownModel>
