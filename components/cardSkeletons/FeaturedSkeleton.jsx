import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SkeletonLoading from "expo-skeleton-loading";

const FeaturedSkeleton = () => {
  return (
    <SkeletonLoading background="#adadad" highlight="#efefef">
      <View>
        <View
          style={{
            width: 190,
            height: 200,
            backgroundColor: "#adadad",
            borderRadius: 12,
          }}
        ></View>
      </View>
    </SkeletonLoading>
  );
};

export default FeaturedSkeleton;

const styles = StyleSheet.create({});
