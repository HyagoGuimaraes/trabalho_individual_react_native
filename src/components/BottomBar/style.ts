import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 10,
  },

  item: {
    alignItems: "center",
  },

  label: {
    fontSize: 11,
    color: "#333",
    marginTop: 2,
  },
});