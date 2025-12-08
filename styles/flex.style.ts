import { StyleSheet } from "react-native";

export const flexStyles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  rowCenterStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowCenterEnd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  rowCenterBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowCenterEvenly: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
