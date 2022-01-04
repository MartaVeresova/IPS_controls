import {Instance, types} from 'mobx-state-tree'
import {PropertyControlModel} from './PropertyModel';


export const RootModel = types.model('RootModel', {
    propertyControl: types.optional(PropertyControlModel, () => PropertyControlModel.create()),
})

export type RootInstance = Instance<typeof RootModel>;