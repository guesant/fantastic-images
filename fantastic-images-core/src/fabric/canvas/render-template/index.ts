import { Canvas, Object as FabricObject } from "fabric/fabric-impl";
import { ITemplate } from "../../../types/ITemplate";
import { buildObject } from "../../objects/build-object";
import { buildStatic } from "../../static/build-static";
import { getStaticFromTemplate } from "../../static/get-static-from-template";
import { removeAllObjects } from "../remove-all-objects";

export const renderTemplate = (fabric: any) => (canvas: Canvas) => async (
  template: ITemplate,
  { clearCanvas = true }: { clearCanvas?: boolean } = {}
): Promise<void> => {
  const { model } = template;
  const { fabricExported } = model;
  const GetStatic = getStaticFromTemplate(template);
  const BuildStatic = buildStatic(fabric)(template);
  const BuildObject = buildObject(fabric);
  clearCanvas && removeAllObjects(canvas);
  await Promise.all([
    Promise.all(GetStatic("back").map(({ url }) => BuildStatic(url))),
    Promise.all(fabricExported.objects.map((obj: any) => BuildObject(obj))),
    Promise.all(GetStatic("front").map(({ url }) => BuildStatic(url))),
  ])
    .then((arr) => arr.flat(1) as FabricObject[])
    .then((objects) => objects.forEach((obj) => canvas.add(obj)));
  canvas.requestRenderAll();
};
