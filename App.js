import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./screens/StartGame";

export default function App() {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={["#CA4E79", "#FFC18E"]}
    >
      <StartGame />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FFC18E",
    flex: 1,
  },
});
