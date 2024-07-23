// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $index from "./routes/index.tsx";
import * as $notes_slug_ from "./routes/notes/[slug].tsx";
import * as $notes_layout from "./routes/notes/_layout.tsx";
import * as $notes_index from "./routes/notes/index.tsx";

import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/_middleware.ts": $_middleware,
    "./routes/index.tsx": $index,
    "./routes/notes/[slug].tsx": $notes_slug_,
    "./routes/notes/_layout.tsx": $notes_layout,
    "./routes/notes/index.tsx": $notes_index,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
