<h1 align="center">IP Promise</h1>

<p align="center">
  Uso de serviços gratuitos de IP Geolocation
</p>

## Como utilizar
### Instalação

#### npm
```
$ npm install --save ip-promise
```

#### yarn
```
$ yarn add ip-promise
```

### Realizando uma consulta

``` js
const ip = require('./ip-promise');

ip('8.8.8.8')
  .then(console.log)

  //  {
  //    city: 'Mountain View',
  //    state: 'CA',
  //    country: 'US'
  //  }
```

### Quando o serviço não retorna resultados

``` js
const ip = require('./ip-promise');

ip('8.8.8.8113')
  .then(console.log)

  //{
  //  error: 'service_error',
  //  message: 'O serviço não retornou eventos para este ip.'
  //}
```

## Autor


| [<img src="https://avatars0.githubusercontent.com/u/53293017?v=3&s=115"><br><sub>@igorjunior</sub>](https://github.com/igorjunior) |
| :---: |