import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SkeletonLoading from "expo-skeleton-loading";

const Skeleton = () => {
  return (
    <SkeletonLoading background="#adadad" highlight="#efefef">
      <View>
        <View
          style={{
            width: 160,
            height: 170,
            backgroundColor: "#adadad",
            borderRadius: 8,
            marginTop: 10,
          }}
        ></View>
      </View>
    </SkeletonLoading>
  );
};

export default Skeleton;

const styles = StyleSheet.create({});
