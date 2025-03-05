import { colors } from "@/app/_layout";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "flex-start",
        width: 190,
        height: 200,
        position: "relative",
      }}
    >
      <Image
        source={images.japan}
        style={{ width: "100%", height: "100%", borderRadius: 12 }}
      />
      <Image
        source={images.cardGradient}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: 0,
          borderRadius: 12,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          paddingHorizontal: 7,
          paddingVertical: 2,
          borderRadius: 10,
          position: "absolute",
          top: 15,
          right: 15,
        }}
      >
        <Image source={icons.star} style={{ width: 11, height: 11 }} />
        <Text
          style={{
            color: colors.primary[300],
            fontFamily: "Rubik-Bold",
            fontSize: 11,
            marginLeft: 3,
          }}
        >
          4.4
        </Text>
      </View>
      <View
        style={{
          alignItems: "flex-start",
          position: "absolute",
          bottom: 10,
          paddingHorizontal: 5,
          // insetInline: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "Rubik-Bold",
            color: "#fff",
            fontSize: 13,
          }}
          numberOfLines={1}
        >
          Modern Apartment
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Rubik-Regular",
            color: colors.accent[100],
          }}
        >
          22 W 15th St, New York
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            style={{ fontFamily: "Rubik-Bold", color: "#fff", fontSize: 13 }}
          >
            $2,500
          </Text>
          <Image source={icons.heart} style={{ width: 16, height: 16 }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        width: "100%",
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: "white",
        position: "relative",
        elevation: 25,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 7,
          paddingVertical: 2,
          borderRadius: 10,
          position: "absolute",
          top: 15,
          right: 15,
          zIndex: 50,
          backgroundColor: "#fff",
        }}
      >
        <Image source={icons.star} style={{ width: 9, height: 9 }} />
        <Text
          style={{
            color: colors.primary[300],
            fontFamily: "Rubik-Bold",
            fontSize: 9,
            marginLeft: 1.5,
          }}
        >
          4.4
        </Text>
      </View>
      <Image
        source={images.newYork}
        style={{ width: "100%", height: 100, borderRadius: 10 }}
      />
      <View
        style={{
          marginTop: 10,
          // insetInline: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "Rubik-Bold",
            color: colors.black[300],
            fontSize: 13,
          }}
        >
          Cozy Studio
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Rubik-Regular",
            color: colors.black[200],
            marginTop: -3,
          }}
        >
          22 W 15th St, New York
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "Rubik-Bold",
              color: colors.primary[300],
              fontSize: 12,
            }}
          >
            $2,500
          </Text>
          <Image
            source={icons.heart}
            style={{
              width: 15,
              height: 15,
              marginRight: 5,
              tintColor: "#191d31",
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
