import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { COLORS } from "../../utils/Color/Colors";

const Header = () => {
  return (
    <View>
      <ImageBackground
        style={styles.ImageStyle}
        source={{
          uri: "https://silverbirdcinemas.com/wp-content/uploads/2023/01/ijaku.jpg",
        }}
      >
        <Pressable style={styles.releaseText}>
          <Text>In Cinema Soon ...</Text>
          <View>
            <View>
              <Text>IJAKU</Text>
              <Text>U/A * ENGLISH</Text>
              <Pressable>
                <Text>BOOK</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    aspectRatio: 5 / 2,
    height: 170,
  },
  releaseText: {
    position: "absolute",
    height: 130,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 6,
    top: 140,
    left: 20,
    width: "82%",
  },
});

export default Header;
