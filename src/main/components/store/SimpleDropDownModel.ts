import {cast, Instance, types} from 'mobx-state-tree';


export interface SimpleDropDownType {
    id: number | null
    displayName: string
}

export const SimpleDropDownDataItemModel = types
    .model('SimpleDropDownDataItem', {
        id: types.optional(types.maybeNull(types.number), null),
        displayName: types.optional(types.string, ''),
    })


export const SimpleDropDownModel = types
    .model('SimpleDropDown', {
        simpleDropDownList: types.optional(types.array(SimpleDropDownDataItemModel), []),
        isDropDownListOpened: types.optional(types.boolean, false),
    })
    .actions(self => {
        let selectedItem: SimpleDropDownType[] = []
        let dropDownList: SimpleDropDownType[] = []
        return {
            getSimpleDropDownSelectedItem(id: number, fieldName: string): void {
                if (fieldName === 'captionAttributeId') {
                    selectedItem = [{id: 7, displayName: 'Описание'}]
                }
                if (fieldName === 'defaultRelationTypeId') {
                    selectedItem = [{id: 6, displayName: 'Изделие-заготовка'}]
                }
                if (fieldName === 'storageId') {
                    selectedItem = [{id: 8, displayName: 'DOCUMS'}]
                }
                self.simpleDropDownList = cast([...self.simpleDropDownList, ...selectedItem])
            },
            getSimpleDropDownList(id: number, fieldName: string): void { //get request for list
                if (fieldName === 'captionAttributeId') {
                    dropDownList = [
                        {id: null, displayName: ''},
                        {id: 1425, displayName: 'SEARCH_ID_ARCHIVE'},
                        {id: 18033, displayName: 'Автоматически размещающиеся в архиве типы документов'},
                        {id: 1056, displayName: 'Глобальные идентификаторы типов объектов'},
                        {id: 18206, displayName: 'Значения по умолчанию атрибутов структуры архива'},
                        {id: 17491, displayName: 'Идентификатор активной итерации'},
                        {id: 10, displayName: 'Наименование'},
                        {id: 1031, displayName: 'Настройка подписей'},
                        {id: 18523, displayName: 'Настройки колонок архива по умолчанию'},
                        {id: 7, displayName: 'Описание'},
                        {id: 18034, displayName: 'Пользователи, автоматически размещающие в архив документы'},
                        {id: 17493, displayName: 'Режим использования списка типов файлов архива'},
                        {id: 17487, displayName: 'Создавать версии документов в архиве'},
                        {id: 1030, displayName: 'Структура архива'},
                        {id: 1017, displayName: 'Файловый шкаф'},
                    ]
                }
                if (fieldName === 'defaultRelationTypeId') {
                    dropDownList = [
                        {id: 0, displayName: 'Аналоги'},
                        {id: 1, displayName: 'Вложения'},
                        {id: 2, displayName: 'Документация на изделие'},
                        {id: 3, displayName: 'Дополняет извещение'},
                        {id: 4, displayName: 'Журнал изменений на изделие'},
                        {id: 5, displayName: 'Избранное IMBASE'},
                        {id: 6, displayName: 'Изделие-заготовка'},
                        {id: 7, displayName: 'Изменяемые объекты'},
                        {id: 8, displayName: 'Изменяется по извещению'},
                    ]
                }
                if (fieldName === 'storageId') {
                    dropDownList = [
                        {id: null, displayName: ''},
                        {id: 8, displayName: 'DOCUMS'},
                    ]
                }
                self.simpleDropDownList = cast([...dropDownList])
            },
            setIsDropDownListOpened(value: boolean): void {
                self.isDropDownListOpened = value
            },
        }
    })

export type SimpleDropDownDataItem = Instance<typeof SimpleDropDownDataItemModel>
export type SimpleDropDown = Instance<typeof SimpleDropDownModel>

// onSnapshot(self.selectedElement, snapshot => console.log('snapshot: ', snapshot))
