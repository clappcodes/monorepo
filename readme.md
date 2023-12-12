# Acme Repository

## Create scoped packages in workspaces
```
npm init --scope=@acme -y -w ./packages/is-even
npm init --scope=@acme -y -w ./packages/is-odd
```

## Add dependency
```
npm install @acme/is-even -w ./packages/is-odd
```

## Build
```sh
npm run build -ws # build all packages
npm run build -- packages/is-even # build one package
```

## Publishing the packages
```
npm run compile -ws
npm publish --workspaces --access public
```

This repository was used to show how to publish @scoped TypeScript packages with workspaces. The blogpost can be viewed here: https://blog.frankdejonge.nl/setting-up-a-typescript-mono-repo-for-scoped-packages/
