import { Canvas, Object as FabricObject } from "fabric/fabric-impl";
import { ITemplate } from "../../types/ITemplate";
import { FabricObjects } from "../FabricObjects";
import { buildStatic } from "../static/buildStatic";
import { FabricStatic } from "../FabricStatic";
import { FabricCanvas } from "../FabricCanvas";

export const renderTemplate = (fabric: any) => (canvas: Canvas) => async (
  template: ITemplate,
  { clearCanvas = true }: { clearCanvas?: boolean } = {}
): Promise<void> => {
  const { model } = template;
  const { fabricExported } = model;
  const GetStatic = FabricStatic.getStaticFromTemplate(template);
  const BuildStatic = buildStatic(fabric)(template);
  const BuildObject = FabricObjects.buildObject(fabric);
  clearCanvas && FabricCanvas.removeAllObjects(canvas);
  await Promise.all([
    Promise.all(GetStatic("back").map(({ url }) => BuildStatic(url))),
    Promise.all(fabricExported.objects.map((obj: any) => BuildObject(obj))),
    Promise.all(GetStatic("front").map(({ url }) => BuildStatic(url))),
  ])
    .then((arr) => arr.flat(1) as FabricObject[])
    .then((objects) => objects.forEach((obj) => canvas.add(obj)));
  canvas.requestRenderAll();
};
