# fantastic-images

Ferramenta para gerar imagens.

---

Antes de tudo, instale o fabricJS.

- `npm install fabric` para a versão completa (instala + dependências).

- `npm install fabric@4.2.0-browser` para a versão para navegadores (leve para navegadores).

  > A versão `4.2.0` é uma mera referência. Fique livre para utilizar [outras versões](https://www.npmjs.com/package/fabric?activeTab=versions)
  > (4.x.x).

Ambas as versões funcionam no navegador. Fique atento ao primeiro pacote, pois o mesmo irá consumir mais espaço em disco, feito para rodar no NodeJS.

## Exemplos

<details>
  <summary>Validar template</summary>

```ts
import { isValidTemplate } from "@fantastic-images/core/lib/fabric/template";

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

isValidTemplate(tempalte);
```

</details>

<details>
  <summary>Gerar canvas (DOM)</summary>

```ts
import { fabric } from "fabric";
import { canvasByDom } from "@fantastic-images/core/lib/fabric/canvas";

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

const canvas = canvasByDom(fabric)(window.document)(wrapper)(template);
```

</details>

<details>
  <summary>Renderizar template</summary>

```ts
import { fabric } from "fabric";
import {
  canvasByDom,
  renderTemplate,
} from "@fantastic-images/core/lib/fabric/canvas";

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

const canvas = canvasByDom(fabric)(window.document)(wrapper)(template);

await renderTemplate(fabric)(canvas)(template);
```

</details>

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020, Gabriel Rodrigues
