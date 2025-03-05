import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import SignInScreen from "../signInScreen";
import { useGlobalContext } from "@/lib/globalProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../_layout";
import icons from "@/constants/icons";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => {
  return (
    <View style={styles.tabIconView}>
      <Image
        source={icon}
        tintColor={focused ? "#0061ff" : "#666876"}
        resizeMode="contain"
        style={{ width: 23, height: 23 }}
      />
      <Text
        style={[
          focused
            ? { color: colors.primary[300], fontFamily: "Rubik-Medium" }
            : { color: colors.black[200], fontFamily: "Rubik-Regular" },
          { fontSize: 10, textAlign: "center", marginTop: 1, width: "100%" },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

const RootLayout = () => {
  const { user, loading } = useGlobalContext();
  console.log(loading);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingView}>
        <ActivityIndicator size="large" color={colors.primary[300]} />
      </SafeAreaView>
    );
  }
  return user ? (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: "purple",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "white",
          shadowOpacity: 0,
          elevation: 0,
          // minHeight: 50,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} focused={focused} title="Explore" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.person} focused={focused} title="Profile" />
          ),
        }}
      />
    </Tabs>
  ) : (
    <SignInScreen />
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  tabIconView: {
    flex: 1,
    alignItems: "center",
    marginTop: 3,
    flexDirection: "column",
  },
});
