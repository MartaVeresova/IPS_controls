import {types} from 'mobx-state-tree'
import {PropertiesControlStore} from './propertiesControl';

export const RootStore = types.model('RootStore', {
    propertiesControl: types.optional(PropertiesControlStore, {}),
})