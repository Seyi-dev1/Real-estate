import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { colors } from "../_layout";
import SignInTab from "../signInScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontFamily: "Rubik-Regular" }}>Home Screen</Text>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
