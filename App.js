import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./screens/StartGame";

export default function App() {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={["#CA4E79", "#FFC18E"]}
    >
      <ImageBackground
        source={require("./assets/fox_paint_artwork_5k-720x1280.jpg")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
