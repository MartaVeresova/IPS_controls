import {types} from 'mobx-state-tree';


export const OpenFileModel = types
    .model('OpenFile', {
        isImageFieldExpanded: types.optional(types.boolean, false),
        isSizeFieldExpanded: types.optional(types.boolean, false),
        sizeWidth: types.optional(types.number, -1),
        sizeHeight: types.optional(types.number, -1),
    })
    .volatile(() => ({
        selectedFile: null as File | null,
    }))
    .actions(self => ({
            setSelectedFile(file: File): void {
                self.selectedFile = file
            },
            setSizeImage(width: number, height: number): void {
                self.sizeWidth = width
                self.sizeHeight = height
            },
            setIsImageFieldExpanded(value: boolean) {
                self.isImageFieldExpanded = value
            },
            setIsSizeFieldExpanded(value: boolean) {
                self.isSizeFieldExpanded = value
            },
        })
    )