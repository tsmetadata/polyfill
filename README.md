# `Symbol.metadata` Polyfill

`@tsmetadata/polyfill` provides the necessary polyfill for legacy runtimes to properly use decorator metadata in TypeScript 5.2+.

In addition, the library provides the necessary global type declaration for `Symbol.metadata`.

- [🌱 Install](#-install)
- [⚙️ Usage](#️-usage)
- [🙏 Thanks](#-thanks)

## 🌱 Install
```bash
npm install @tsmetadata/polyfill
```

## ⚙️ Usage
As early as possible, import the polyfill.
```typescript
import '@tsmetadata/polyfill';
```

After doing so, `Symbol.metadata` will be defined.

You may also need to configure your `tsconfig.json` to target <= ES2022 and include the `esnext.decorators` library. The easiest way to do this is to extend our included polyfill-ready configuration.

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": ["@tsmetadata/polyfill/lib/tsconfig.polyfill.json"],
}
```

## 🙏 Thanks

Special thanks to Oleksandr Tarasiuk for implementing decorator metadata and to Andrew Branch for releasing an early version of this polyfill.
