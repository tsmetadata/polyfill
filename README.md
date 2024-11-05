# `Symbol.metadata` Polyfill

`@tsmetadata/polyfill` provides the necessary polyfill for legacy runtimes to properly use decorator metadata in TypeScript 5.2+.

In addition, the library provides the necessary global type declaration for `Symbol.metadata`.

- [🌱 Install](#-install)
- [⚙️ Usage](#️-usage)
- [🙏 Thanks](#-thanks)

## 🌱 Install
```bash
# `@tsmetadata/polyfill` is intended to be installed as a dev dependency.
npm install -D @tsmetadata/polyfill
```

## ⚙️ Usage
As early as possible, import the polyfill.
```typescript
import '@tsmetadata/polyfill';
```

After doing so, `Symbol.metadata` will be defined.

## 🙏 Thanks

Special thanks to Oleksandr Tarasiuk for implementing decorator metadata and to Andrew Branch for releasing an early version of this polyfill.