import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFEE0", // Putih kekuningan, terang & adem
        padding: 20,
      }}
    >
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 65,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "#FF3B3F", // Merah cerah
          marginBottom: 30,
        }}
      />

      <View
        style={{
          width: 210,
          height: 115,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 25,
          overflow: "hidden",
          borderWidth: 2,
          borderColor: "#FFD93D", // Kuning cerah
        }}
      >
        <Image
          source={require("../assets/logo_unismuh.jpg")}
          style={{ width: 210, height: 115 }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#45CB85", // Hijau terang
          borderRadius: 40,
          paddingVertical: 14,
          paddingHorizontal: 28,
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Ionicons
          name="school-outline"
          size={22}
          color="#ffffff"
          style={{ marginRight: 12 }}
        />
        <Text
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          105841114722
        </Text>
      </View>

      <Text
        style={{
          fontSize: 17,
          fontWeight: "700",
          color: "#FF914D", // Oranye cerah
        }}
      >
        Mutiara
      </Text>
    </View>
  );
}
