# fantastic-images

Ferramenta para gerar imagens.

## Dependências

- [fabric.js](https://github.com/fabricjs/fabric.js)

  - `npm install fabric` para a versão completa.

  - `npm install fabric@4.2.0-browser` para a versão para navegadores (leve para navegadores).

    > A versão `4.2.0` é uma mera referência. Fique livre para utilizar [outras versões](https://www.npmjs.com/package/fabric?activeTab=versions)
    > (4.x.x).

  Ambas as versões funcionam no navegador. Fique atento ao primeiro pacote, pois o mesmo irá consumir mais espaço em disco (foi feito para rodar no NodeJS).

## Exemplos

<details>
  <summary>Validar template</summary>

```ts
import { Template } from "@fantastic-images/core";

const template = {
  model: {
    sketch: {
      width: 0,
      height: 0,
    },
    staticImages: [],
    fabricExported: {
      objects: [],
    },
  },
};

Template.isValidTemplate(template);
```

</details>

<details>
  <summary>Gerar canvas (DOM)</summary>

```ts
import { fabric } from "fabric";
import { FabricCanvasByDom } from "@fantastic-images/core";

const template = {
  model: {
    sketch: {
      width: 0,
      height: 0,
    },
    staticImages: [],
    fabricExported: {
      objects: [],
    },
  },
};

const wrapper = document.getElementById("wrapper");

const getCanvas = FabricCanvasByDom.getCanvas(fabric)(window.document)(wrapper);

const canvas = getCanvas(template);
```

</details>

<details>
  <summary>Renderizar template</summary>

```ts
import { fabric } from "fabric";
import { FabricCanvasByDom, renderTemplate } from "@fantastic-images/core";

const template = {
  model: {
    sketch: {
      width: 0,
      height: 0,
    },
    staticImages: [],
    fabricExported: {
      objects: [],
    },
  },
};

const wrapper = document.getElementById("wrapper");

const getCanvas = FabricCanvasByDom.getCanvas(fabric)(window.document)(wrapper);

const canvas = getCanvas(template);

await renderTemplate(fabric)(canvas)(template);
```

</details>

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020, Gabriel Rodrigues
