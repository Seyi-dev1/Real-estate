import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { colors } from "./_layout";
import icons from "@/constants/icons";
import { getCurrentUser, login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/globalProvider";
import { Redirect } from "expo-router";

const SignInScreen = () => {
  const [height, setHeight] = useState<number>(0);

  const { setError, setUser, setLoading } = useGlobalContext();

  const fetchUserAfterLogin = async () => {
    const response = await getCurrentUser();
    if (response) {
      const { email, $id, name, avatar } = response;
      const fetchedUser = {
        email,
        $id,
        name,
        avatar,
      };
      // console.log(fetchedUser);
      setUser(fetchedUser);
    }
  };
  const handleLogin = async () => {
    try {
      setLoading();
      const result = await login();

      if (result) {
        await fetchUserAfterLogin();
        setLoading();
        <Redirect href={"/explore"} />;
      }
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <SafeAreaView
      style={styles.container}
      onLayout={({ nativeEvent }) => {
        const { height } = nativeEvent.layout;
        setHeight(height);
      }}
    >
      <ScrollView>
        <Image
          source={images.onboarding}
          resizeMode="contain"
          style={{ height: height / 1.8, width: "auto" }}
        />

        <View style={styles.textView}>
          <Text style={styles.welcomeText}>Welcome To Restate</Text>
          <Text style={styles.actionCall}>
            Lets Get You Closer to {"\n"}
            <Text style={{ color: colors.primary[300] }}>Your Ideal Home</Text>
          </Text>
          <Text style={styles.googleLogin}>Login to ReState with Google</Text>
          <TouchableOpacity
            style={styles.googleLoginButton}
            onPress={handleLogin}
          >
            <View style={styles.googleButtonElements}>
              <Image
                source={icons.google}
                resizeMode="contain"
                style={styles.googleImage}
              />
              <Text>Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  welcomeText: {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Rubik-Regular",
    color: colors.black[200],
    fontWeight: 400,
  },
  actionCall: {
    fontFamily: "Rubik-Bold",
    fontSize: 19,
    color: colors.black[300],
    textAlign: "center",
    // marginTop: 2,
  },
  googleLogin: {
    fontFamily: "Rubik-Regular",
    color: colors.black[200],
    textAlign: "center",
    marginTop: 35,
  },
  googleLoginButton: {
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "black",
    paddingVertical: 15,
    borderRadius: 35,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  textView: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  googleImage: {
    width: 17,
    height: 17,
  },
  googleButtonElements: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
