import { Collection, Map } from 'immutable'

export type NetlifyWidgetProps<T> = {
  readonly value: T
  readonly field: Map<string, string>
  readonly forID: string
  readonly classNameWrapper: string
}

export type NetlifyPreviewWidgetProps<A, T> = {
  value: T, // Current preview value
  field: Map<string, any>, // Immutable map of current field configuration
  metadata: Map<string, string>, // Immutable map of any available metadata for the current field
  entry: Map<string, any>, // Immutable Map of all entry data
  fieldsMetaData: Map<string, string> // Immutable map of metadata from all fields.
  getAsset(path: string): A, // Function for retrieving an asset url for image/file fields
}

export type NetlifyControlWidgetProps<A, T> = NetlifyWidgetProps<T> & {
  value: T
  forID: string
  field: Map<string, any>,
  mediaPaths: Map<string, any>,
  classNameWrapper: string,
  onChange(value?: T): void
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