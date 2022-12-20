import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/milky-way-2695569_1280.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>New app!</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 32,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
