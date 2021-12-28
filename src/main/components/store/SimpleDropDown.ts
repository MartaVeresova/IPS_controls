import {cast, Instance, types} from 'mobx-state-tree';

export interface SelectedItemType {
    id: number | null
    displayName: string
}

type SimpleType = {
    id: number | null
    displayName: string
}

export const SimpleDropDownItemModel = types
    .model('SimpleDropDownItem', {
        // id: types.optional(types.maybeNull(types.identifierNumber), -1),
        id: types.optional(types.maybeNull(types.number), null),
        displayName: types.optional(types.string, ''),
    })
    .actions(self => {
            return {
                // getSelectedItem(value: string): void {
                //     let selectedItem: SelectedItemType[] = []
                //     if (value === 'captionAttributeId') {
                //         selectedItem = [{id: 7, displayName: 'Описание'}] //post request for checked elem
                //     }
                //     if (value === 'defaultRelationTypeId') {
                //         selectedItem = [{id: 6, displayName: 'Изделие-заготовка'}] //post request for checked elem
                //     }
                //     if (value === 'storageId') {
                //         selectedItem = [{id: null, displayName: ''}] //post request for checked elem
                //     }
                //     self.displayName = selectedItem[0].displayName
                //     self.id = selectedItem[0].id
                // },
                // setSelectedItem(selectedId: number | null, selectedName: string): void {
                //     self.id = selectedId
                //     self.displayName = selectedName
                // },
            }
        }
    )

export const SimpleDropDownModel = types
    .model('SimpleDropDown', {
        simpleDropDownList: types.optional(types.array(SimpleDropDownItemModel), []),
        selectedElement: types.safeReference(SimpleDropDownItemModel),
    })
    .actions(self => {
        let selectedItem: SelectedItemType[] = []
        return {
            getSelectedItem(id: number, value: string): void {

                if (value === 'captionAttributeId') {
                    selectedItem = [{id: 7, displayName: 'Описание'}] //post request for checked elem
                }
                if (value === 'defaultRelationTypeId') {
                    selectedItem = [{id: 6, displayName: 'Изделие-заготовка'}] //post request for checked elem
                }
                if (value === 'storageId') {
                    selectedItem = [{id: null, displayName: ''}] //post request for checked elem
                }
                if (self.selectedElement) {
                    self.selectedElement.id = selectedItem[0].id
                    self.selectedElement.displayName = selectedItem[0].displayName
                }
            },
            setSelectedItem(selectedId: number | null, selectedName: string): void {
                if (self.selectedElement) {
                    self.selectedElement.id = selectedId
                    self.selectedElement.displayName = selectedName
                }
            },
            getDropDownList(value: string): void { //get request for list
                let checkedItem: SimpleType[] = []
                if (value === 'captionAttributeId') {
                    checkedItem = [
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
                if (value === 'defaultRelationTypeId') {
                    checkedItem = [
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
                if (value === 'storageId') {
                    checkedItem = [
                        {id: null, displayName: ''},
                        {id: 8, displayName: 'DOCUMS'},
                    ]
                }
                self.simpleDropDownList = cast(checkedItem)
            },
        }
    })


export type SimpleDropDownItem = Instance<typeof SimpleDropDownItemModel>
export type SimpleDropDown = Instance<typeof SimpleDropDownModel>


