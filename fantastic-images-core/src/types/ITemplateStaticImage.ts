export type ISupportedPositions = "back" | "front";

export type ITemplateStaticImage<SupportedPositions = ISupportedPositions> = {
  url: string;
  position: SupportedPositions;
};
