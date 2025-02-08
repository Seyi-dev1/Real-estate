import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/lib/globalProvider";

const Index = () => {
  const { setLoading } = useGlobalContext();
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{ fontFamily: "Rubik-SemiBold", fontSize: 20 }}
        onPress={setLoading}
      >
        Welcome to ReState
      </Text>
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
