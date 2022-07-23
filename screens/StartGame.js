import { TextInput, Button, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGame() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Rest</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 100,
    padding: 16,
    backgroundColor: "orange",
  },
});
