import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import { colors } from "@/app/_layout";
import icons from "@/constants/icons";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500
  );

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.imageContainer}>
        <Image source={icons.search} style={{ width: 20, height: 20 }} />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          placeholderTextColor={colors.black[100]}
          style={{
            fontFamily: "Rubik-Regular",
            color: colors.black[300],
            marginLeft: 5,
            flex: 1,
            fontSize: 13,
          }}
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 12,
    backgroundColor: colors.accent[100],
    borderColor: colors.primary[100],
    borderStyle: "solid",
    // borderWidth: 2,
    paddingVertical: 5,
  },

  imageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 50,
  },
});
