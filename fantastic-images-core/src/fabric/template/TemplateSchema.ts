import { array, number, object, string } from "yup";

export const TemplateSchema = object()
  .shape({
    model: object()
      .shape({
        sketch: object()
          .shape({ width: number().min(0), height: number().min(0) })
          .default(() => ({ width: 0, height: 0 })),
        staticImages: array()
          .of(
            object().shape({
              url: string(),
              position: string(),
            })
          )
          .default(() => []),
        fabricExported: object()
          .shape({
            objects: array()
              .of(object())
              .default(() => []),
          })
          .default(() => ({})),
      })
      .default(() => ({})),
  })
  .default(() => ({}));
