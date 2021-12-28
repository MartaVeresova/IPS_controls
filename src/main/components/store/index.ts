import {Instance, types} from 'mobx-state-tree'
import {PropertyControlModel, PropertyItemModel} from './PropertyModal';
import {SimpleDropDownItemModel, SimpleDropDownModel} from './SimpleDropDown';
import {YesNoDropDownModel} from './YesNoDropDown';


export const RootModel = types.model('RootModel', {
    propertyControl: types.optional(PropertyControlModel, {}),
    propertyItem: types.optional(PropertyItemModel, {}),
    simpleDropDownItem: types.optional(SimpleDropDownItemModel, {}),
    simpleDropDown: types.optional(SimpleDropDownModel, {}),
    yesNoDropDown: types.optional(YesNoDropDownModel, {}),
})

export type RootInstance = Instance<typeof RootModel>;