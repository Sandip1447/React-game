import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textTitle,
    textAlign: "center",
    padding: 8,
    borderColor: Colors.textTitle,
    borderWidth: 1,
  },
});
