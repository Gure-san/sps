/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAPBOX_TOKEN_ACCESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}