export interface MovieType {
  id: number;
  attributes: Attributes;
}
export interface Attributes {
  titulo: string;
  sinopse: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  id_filme?: null;
  subtitulo: string;
  poster: Poster;
  imagens: Imagens;
}
export interface Poster {
  data: Data;
}
export interface Data {
  id: number;
  attributes: Attributes1;
}
export interface Attributes1 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}
export interface Formats {
  thumbnail: ThumbnailOrSmallOrMediumOrLarge;
  small: ThumbnailOrSmallOrMediumOrLarge;
  medium: ThumbnailOrSmallOrMediumOrLarge;
  large: ThumbnailOrSmallOrMediumOrLarge;
}
export interface ThumbnailOrSmallOrMediumOrLarge {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: null;
  width: number;
  height: number;
  size: number;
  url: string;
}
export interface Imagens {
  data?: (DataEntity)[] | null;
}
export interface DataEntity {
  id: number;
  attributes: Attributes2;
}
export interface Attributes2 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: Formats1;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}
export interface Formats1 {
  thumbnail: ThumbnailOrSmallOrMediumOrLarge;
  small: ThumbnailOrSmallOrMediumOrLarge;
  medium: ThumbnailOrSmallOrMediumOrLarge;
}
