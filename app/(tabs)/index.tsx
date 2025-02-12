import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { colors } from "../_layout";
import icons from "@/constants/icons";
import Search from "@/components/search/Search";

const Index = () => {
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={styles.main}>
          <View style={styles.imageContainer}>
            <Image
              source={images.avatar}
              style={{ width: 35, height: 35, borderRadius: 50 }}
            />
            <View style={styles.imageText}>
              <Text
                style={{
                  fontFamily: "Rubik-Regular",
                  fontSize: 13,
                  color: colors.black[100],
                }}
              >
                Good Morning
              </Text>
              <Text
                style={{
                  fontFamily: "Rubik-Medium",
                  color: colors.black[300],
                  marginTop: -5,
                }}
              >
                Adrian
              </Text>
            </View>
          </View>
          <Image source={icons.bell} style={{ width: 20, height: 20 }} />
        </View>
      </View>
      <Search />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageText: {
    alignItems: "flex-start",
    marginLeft: 10,
    justifyContent: "center",
  },
});
