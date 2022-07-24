import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState("");

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <Game />;
  }

  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={[Colors.primary, Colors.teal]}
    >
      <ImageBackground
        source={require("./assets/fox_paint_artwork_5k-720x1280.jpg")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
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
