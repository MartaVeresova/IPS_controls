import {types} from 'mobx-state-tree';


export const YesNoDropDownModel = types
    .model('YesNoDropDown', {
        yesNoSelectedName: types.optional(types.string, ''),
        isDropDownListOpened: types.optional(types.boolean, false),
    })
    .actions(self => ({
            setYesNoDropDownSelectedName(name: string): void {
                self.yesNoSelectedName = name
            },
            setIsDropDownListOpened(value: boolean): void {
                self.isDropDownListOpened = value
            },
        })
    )

