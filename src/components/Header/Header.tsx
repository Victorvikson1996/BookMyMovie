import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS } from "../../utils/Color/Colors";

const movieTypes = [
  {
    id: 0,
    name: "IMAX",
  },
  {
    id: 1,
    name: "4DX",
  },
  {
    id: 2,
    name: "PXL",
  },
  {
    id: 3,
    name: "GOLD",
  },
  {
    id: 4,
    name: "PLAYHOUSE",
  },
];

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
          <Text style={styles.cinemaText}>In Cinema Soon</Text>
          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.moviename}>IJAKU (BORN AGAIN)</Text>
              <Text style={styles.language}>U/A · ENGLISH</Text>
            </View>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>BOOK</Text>
            </Pressable>
          </View>
          <Text style={styles.genre}> Drama, Nollywood</Text>
        </Pressable>
      </ImageBackground>

      <View style={{ marginTop: 110 }} />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {movieTypes.map((item, index) => (
          <View style={styles.types} key={index}>
            <Text style={styles.itemname}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
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
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  moviename: {
    fontSize: 16,
    fontWeight: "bold",
  },
  language: {
    fontSize: 16,
    fontWeight: "400",
    color: COLORS.gray,
    marginTop: 4,
  },
  cinemaText: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.gray,
  },
  button: {
    backgroundColor: COLORS.red,
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: COLORS.white,
  },
  genre: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: "500",
  },
  types: {
    margin: 10,
    borderColor: "black",
    borderWidth: 0.4,
    borderRadius: 4,
    padding: 10,
  },
  itemname: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Header;
