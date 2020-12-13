# fantastic-images

Ferramenta para gerar imagens.

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

const template = /*...*/;
const wrapper = document.getElementById("wrapper");
const canvas = canvasByDom(fabric)(window.document)(wrapper)(template);
```

</details>

<details>
  <summary>Renderizar template</summary>

```ts
import { fabric } from "fabric";
import { renderTemplate } from "@fantastic-images/core/lib/fabric/canvas";

const template = /*...*/;
const canvas = /*...*/;
await renderTemplate(fabric)(canvas)(template);
```

</details>

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020, Gabriel Rodrigues
