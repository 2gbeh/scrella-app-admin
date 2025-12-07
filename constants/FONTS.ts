export type FontWeightType =
  | "black"
  | "bold"
  | "medium"
  | "regular"
  | "light"
  | "thin"
  | 900 // black
  | 800 // extra-bold
  | 700 // bold
  | 600 // semi-bold
  | 500 // medium
  | 400 // regular
  | 300 // light
  | 200 // extra-light
  | 100; // thin

export type FontFamilyType = Partial<Record<FontWeightType, string>>;

export const FONT = {
  primary: "RobotoFlex",
};

export const FONTS = {
  RobotoFlex: require("@/assets/fonts/RobotoFlex-VariableFont.ttf"),
};

