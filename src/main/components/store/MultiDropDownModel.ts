import {cast, types} from 'mobx-state-tree';
import {MultiDropDownType} from '../options/types/Types';


export const MultiDropDownDataItemModel = types
    .model('MultiDropDownDataItem', {
        id: types.optional(types.identifier, ''),
        displayName: types.optional(types.string, ''),
    })


export const MultiDropDownModel = types
    .model('MultiDropDown', {
        multiDropDownList: types.optional(types.array(MultiDropDownDataItemModel), []),
        isCheckedAll: types.optional(types.boolean, false),
        isDropDownListOpened: types.optional(types.boolean, false),
    })
    .actions(self => {
            let dropDownData: MultiDropDownType[] = []
            return {
                getMultiDropDownSelectedItem(ids: string[]): void {
                    dropDownData = [
                        {id: 'B', displayName: 'Архитектура и строительство'},
                        {id: 'C', displayName: 'Отладка'}
                    ]
                    self.multiDropDownList = cast([...dropDownData])
                },
                getMultiDropDownList(ids: string[]): void { //get request for list
                    dropDownData = [
                        {id: 'A', displayName: 'Конструкторская подготовка'},
                        {id: 'B', displayName: 'Архитектура и строительство'},
                        {id: 'C', displayName: 'Отладка'},
                        {id: 'D', displayName: 'Администрирование системы'},
                        {id: 'E', displayName: 'Технологическая подготовка'},
                        {id: 'F', displayName: 'Общая'},
                        {id: 'G', displayName: 'Производство'},
                        {id: 'H', displayName: 'Управление НСИ'},
                        {id: 'I', displayName: 'SubjectArea_test1_ui'},
                    ]
                    self.multiDropDownList = cast([...dropDownData])
                },
                setIsCheckedAll(value: boolean): void {
                    self.isCheckedAll = value
                },
                setIsDropDownListOpened(value: boolean): void {
                    self.isDropDownListOpened = value
                },
            }
        }
    )

