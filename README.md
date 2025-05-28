# Fake Store CLI

Cliente sencillo para la Fake Store API.

## Instalación

```sh
npm install
```

## Uso

```sh
npm run start <MÉTODO> <endpoint> [args]
```

## Ejemplos

```sh
npm run start GET products
npm run start GET products/5
npm run start POST products "Título" 10.5 electronics
npm run start DELETE products/5
```

## Archivos clave

- [index.js](index.js)  
- [ApiService.js](ApiService.js)  
- [package.json](package.json)  

## Licencia

MIT