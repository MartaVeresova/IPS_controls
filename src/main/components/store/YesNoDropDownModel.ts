import {types} from 'mobx-state-tree';
import {YesNoType} from '../options/types/Types';
import {YesNoMode} from './Enums';


export const YesNoDropDownModel = types
    .model('YesNoDropDown', {
        yesNoSelectedName: types.optional(types.string, ''),
        isDropDownListOpened: types.optional(types.boolean, false),
    })
    .views(() => ({
        get yesNoDropDownData(): YesNoType[] {
            return Object.values(YesNoMode)
        }
    }))
    .actions(self => ({
            setYesNoDropDownSelectedName(name: string): void {
                self.yesNoSelectedName = name
            },
            setIsDropDownListOpened(value: boolean): void {
                self.isDropDownListOpened = value
            },
        })
    )

