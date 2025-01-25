import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import SignInScreen from "../signInScreen";

const RootLayout = () => {
  const [user, setUser] = useState<boolean>(false);

  return user ? (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: "purple",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={25}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Explore",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "airplane-sharp" : "airplane-outline"}
              size={25}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person-circle-sharp" : "person-circle-outline"}
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  ) : (
    <SignInScreen />
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
