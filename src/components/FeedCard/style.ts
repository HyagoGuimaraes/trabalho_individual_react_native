import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 12,
    color: '#777',
  },

  text: {
    marginBottom: 10,
    fontSize: 14,
  },

  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },

  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
    marginTop: 10,
  },

  action: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  actionLabel: {
    color: "#666",
    fontSize: 13,
  },
});