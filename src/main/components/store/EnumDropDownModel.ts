import {types} from 'mobx-state-tree';
import {VersionMode} from './Enums';


export const EnumDropDownModel = types
    .model('EnumDropDown', {
        enumSelectedName: types.optional(types.string, ''),
        isDropDownListOpened: types.optional(types.boolean, false),
    })
    .views(() => ({
        get enumDropDownData(): Array<string[]> {
            return Object.entries(VersionMode)
        },
    }))
    .actions(self => ({
            setEnumDropDownSelectedName(name: string): void {
                self.enumSelectedName = name
            },
            setIsDropDownListOpened(value: boolean): void {
                self.isDropDownListOpened = value
            },
        })
    )

