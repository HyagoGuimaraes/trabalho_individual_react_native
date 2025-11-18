import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9E9E9",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    marginLeft: 12,
    flex: 1,
  },

  searchText: {
    marginLeft: 6,
    color: "#555",
    fontSize: 14,
  },

  iconButton: {
    marginLeft: 14,
  },
});