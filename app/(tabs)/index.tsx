import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../_layout";
import icons from "@/constants/icons";
import Search from "@/components/search/Search";
import { Card, FeaturedCard } from "@/components/cards/Cards";
import Filters from "@/components/filter/Filters";
import { useGlobalContext } from "@/lib/globalProvider";
import seed from "@/lib/seed";

const Index = () => {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 0 }}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 10 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ paddingHorizontal: 10 }}>
            <View style={styles.main}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: user?.avatar }}
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
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} style={{ width: 20, height: 20 }} />
            </View>
            <View style={{ marginTop: 15 }}>
              <Search />
            </View>
            <View style={{ marginVertical: 20 }}>
              <View style={styles.featuredSection}>
                <Text
                  style={{
                    fontFamily: "Rubik-Bold",
                    color: colors.black[300],
                    fontSize: 15,
                  }}
                >
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "Rubik-Bold",
                      color: colors.primary[300],
                    }}
                  >
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={[1, 2, 3]}
                renderItem={({ item }) => {
                  return <FeaturedCard />;
                }}
                keyExtractor={(item) => item.toString()}
                horizontal
                contentContainerStyle={{ gap: 10, marginTop: 10 }}
                bounces={false}
                showsHorizontalScrollIndicator={false}
              ></FlatList>
              <View style={styles.featuredContent}></View>
            </View>
            <View style={styles.recommendationSection}>
              <Text
                style={{
                  fontFamily: "Rubik-Bold",
                  color: colors.black[300],
                  fontSize: 15,
                }}
              >
                Our Recommendation
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "Rubik-Bold",
                    color: colors.primary[300],
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.filters}>
              <Filters />
            </View>
            <View style={styles.recommendationContent}></View>
          </View>
        }
      ></FlatList>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
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

  featuredSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  recommendationSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  featuredContent: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },

  recommendationContent: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  filters: {
    marginTop: 15,
    // marginBottom: 5,
  },
});
