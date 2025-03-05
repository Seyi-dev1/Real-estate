import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";
import { colors } from "@/app/_layout";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("All");
      router.setParams({ filter: "All" });
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              {
                alignItems: "flex-start",
                marginRight: 10,
                paddingHorizontal: 15,
                paddingVertical: 3,
                borderRadius: 20,
              },
              selectedCategory === item.category
                ? { backgroundColor: colors.primary[300] }
                : {
                    backgroundColor: colors.primary[100],
                    borderColor: colors.primary[200],
                  },
            ]}
            onPress={() => handleCategoryPress(item.category)}
          >
            <Text
              style={[
                { fontSize: 12 },
                selectedCategory === item.category
                  ? { color: "white", fontFamily: "Rubik-Bold", marginTop: 2 }
                  : { color: colors.black[300], fontFamily: "Rubik-Regular" },
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Filters;

const styles = StyleSheet.create({});
