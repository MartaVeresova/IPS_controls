import {Instance, types} from 'mobx-state-tree';


export const EnumDropDownModel = types
    .model('EnumDropDown', {
        enumSelectedName: types.optional(types.string, ''),
        isDropDownListOpened: types.optional(types.boolean, false),
    })
    .actions(self => ({
            setEnumDropDownSelectedName(name: string): void {
                self.enumSelectedName = name
            },
            setIsDropDownListOpened(value: boolean): void {
                self.isDropDownListOpened = value
            },
        })
    )

export type EnumDropDown = Instance<typeof EnumDropDownModel>
