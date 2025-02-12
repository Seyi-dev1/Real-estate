import {
  Alert,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import { colors } from "../_layout";
import { settings } from "@/constants/data";
import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/globalProvider";
import { router } from "expo-router";

interface SettingsItemProps {
  title: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
  textStyle?: object;
  showArrow?: boolean;
}

const SettingsItem = ({
  title,
  icon,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => {
  return (
    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
      <View style={styles.settingsItemProper}>
        <Image source={icon} style={{ width: 20, height: 20 }} />
        <Text
          style={[
            { fontFamily: "Rubik-Medium", color: colors.black[300] },
            { ...textStyle },
          ]}
        >
          {title}
        </Text>
      </View>

      {showArrow && (
        <Image
          source={icons.rightArrow}
          style={{ width: 15, height: 15, tintColor: colors.black[300] }}
        />
      )}
    </TouchableOpacity>
  );
};

const ProfileTab = () => {
  const { user } = useGlobalContext();
  const handleLogout = async () => {
    const result = await logout();

    if (result) {
      Alert.alert("Success", "You have been logged out successfully");
      router.replace("/signInScreen");
    } else {
      Alert.alert("Error", "An error occurred while trying to log you out");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: 16 }}
      >
        <View style={styles.heading}>
          <Text style={{ fontFamily: "Rubik-Bold" }}>Profile</Text>
          <Image source={icons.bell} style={{ width: 15, height: 15 }} />
        </View>

        <View style={styles.firstView}>
          <View style={styles.secondView}>
            <Image
              source={{ uri: user?.avatar }}
              style={{
                width: 100,
                height: 100,
                position: "relative",
                borderRadius: 50,
              }}
            />
            <TouchableOpacity>
              <Image
                source={icons.edit}
                style={{
                  width: 20,
                  height: 20,
                  position: "absolute",
                  bottom: 5,
                  right: -52,
                }}
              />
            </TouchableOpacity>
            <Text style={styles.profileName}>{user?.name}</Text>
          </View>
        </View>
        <View style={styles.settingsItems}>
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>
        <View style={styles.otherSettingsItems}>
          {settings.slice(2).map((item, index) => {
            return (
              <SettingsItem key={index} icon={item.icon} title={item.title} />
            );
          })}
        </View>

        <View style={styles.logout}>
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            onPress={handleLogout}
            textStyle={{ color: colors.danger }}
            showArrow={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  firstView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  secondView: {
    alignItems: "center",
    marginTop: 10,
    position: "relative",
  },

  profileName: {
    fontFamily: "Rubik-Bold",
    fontSize: 16,
    marginTop: 10,
  },

  settingsItems: {
    marginTop: 30,
  },

  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  settingsItemProper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  otherSettingsItems: {
    marginTop: 30,
    paddingTop: 10,
    borderColor: colors.primary[200],
  },

  logout: {
    marginTop: 30,
    color: colors.danger,
  },
});
