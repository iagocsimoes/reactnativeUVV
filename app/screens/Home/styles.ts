import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 24,
  },
  tittle: {
    fontSize: 24,
    fontWeight: "semibold",
    color: "black",
    marginTop: 48,
  },
  icon: {
    marginTop: 100,
    width: 80,
    height: 80,
    alignSelf: "center",
    color: "white",
    backgroundColor: "white",
  },
  input: {
    padding: 14,
    borderWidth: 0.7,
    borderColor: "gray",
    borderRadius: 8,
  },
  button: {
    marginTop: 24,
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#1E90FF",
    color: "white",
  },
  textInput: {
    color: "white",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "semibold",
  },
  links: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
