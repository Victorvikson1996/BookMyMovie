import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Header } from "../components/Header";
import { COLORS } from "../utils/Color/Colors";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.HomeScreenBackgroundColor,
    flex: 1,
  },
});

export default HomeScreen;
