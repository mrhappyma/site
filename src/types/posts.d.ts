declare interface postMetadata {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
}

declare interface postMetadataWithId extends postMetadata {
  id: string;
}
