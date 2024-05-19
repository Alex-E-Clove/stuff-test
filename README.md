# STUFF hemsida

## Requirements

1. [NodeJS](https://nodejs.org/en/download)

2. `pnpm` - [skaffa här](https://pnpm.io/installation)

- pnpm kan på MacOS enkelt installeras om man har [brew](https://brew.sh/) genom

  ```console
  brew install pnpm
  ```

## Installera

```console
pnpm install
```

## Utveckla lokalt

Starta en lokal utvecklingsserver genom att i terminalen skriva

```console
pnpm dev
```

Se sidan på addressen `http://localhost:3000`
och adminsidan för TinaCMS finns på `http://localhost:3000/admin/index.html`'

## Automatiska Typningar från Tina CMS

När du kör första `pnpm dev` gången eller efter att du har ändrat i Tina mappen kommer nya typer genereras i `tina/__generated__/types.ts`. Du kan importera dessa för lättare kunna Type:a i dina sidor och komponenter.

```typescript
import { PageBlocksHome } from "@/tina/__generated__/types";

export const Home = (props: { data: PageBlocksHome }) => {
  ...
```
