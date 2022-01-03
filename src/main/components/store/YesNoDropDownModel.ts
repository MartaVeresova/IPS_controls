import {Instance, types} from 'mobx-state-tree';


export const YesNoDropDownModel = types
    .model('YesNoDropDown', {
        selectedName: types.optional(types.string, ''),
        selectedOption: types.optional(types.boolean, false),
    })
    .actions(self => {
            return {
                setSelectedName(name: string): void {
                    self.selectedName = name
                },
                setSelectedOption(option: boolean): void {
                    self.selectedOption = option
                },
            }
        }
    )

export type YesNoDropDown = Instance<typeof YesNoDropDownModel>
