import { StyleSheet, View } from "react-native";

import StartGame from "./screens/StartGame";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FFC18E",
    flex:1
  },
});
