import {Instance, types} from 'mobx-state-tree';


export const OpenFileModel = types
    .model('OpenFile', {
        isImageFieldExpanded: types.optional(types.boolean, false),
        isSizeFieldExpanded: types.optional(types.boolean, false),
    })
    .volatile(() => ({
        selectedFile: null as File | null,
        sizeWidth: '' as string | number,
        sizeHeight: '' as string | number,
    }))
    .actions(self => ({
            setSelectedFile(file: File): void {
                self.selectedFile = file
            },
            setSizeImage(width: string | number, height: string | number): void {
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

export type OpenFile = Instance<typeof OpenFileModel>