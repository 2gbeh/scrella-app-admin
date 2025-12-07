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

export const FontMappings = {
  PoppinsRegular: require("@/assets/fonts/Poppins-Regular.ttf"),
  PoppinsMedium: require("@/assets/fonts/Poppins-Medium.ttf"),
  PoppinsSemiBold: require("@/assets/fonts/Poppins-SemiBold.ttf"),
  PoppinsBold: require("@/assets/fonts/Poppins-Bold.ttf"),
};

export const FONTS = {
  primary400: "PoppinsRegular",
  primary500: "PoppinsMedium",
  primary600: "PoppinsSemiBold",
  primary700: "PoppinsBold",
};
