import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function Game() {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
