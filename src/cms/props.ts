import { Collection, Map } from 'immutable'

export type NetlifyWidgetProps<T> = {
  readonly value: T
  readonly forId: string
  readonly field: Map<string, string>
  readonly forID: string
  readonly classNameWrapper: string
}

export type NetlifyControlWidgetProps<A, T> = NetlifyWidgetProps<T> & {
  field: Map<string, any>,
  mediaPaths: Map<string, any>,
  classNameWrapper: string,
  onChange(value: T): void
  getAsset(path: string): A
  onAddAsset(asset: A): void
  onRemoveAsset(asset: A): void
  onRemoveInsertedMedia(id: string): void
  onRemoveMediaControl(id: string): void
  onClearMediaControl(id: string): void
  onOpenMediaLibrary(params: {
    controlID: string,
    forImage: boolean,
    privateUpload: any,
    value: T,
    allowMultiple: boolean,
    config: object,
  }): void,
}

export type NetlifyPreviewTemplateProps = {
  entry: Collection<any, any>
}