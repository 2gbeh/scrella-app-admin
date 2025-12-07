import { useState } from "react";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
//
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";

export const SearchBar: React.FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("Useless Text");
  //
  return (
    <View style={sx.container}>
      <View style={sx.leftContent}>
        <Pressable>
          <MaterialCommunityIcons
            name="arrow-left"
            size={SIZES.icon}
            color={COLORS.icon}
          />
        </Pressable>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="useless placeholder"
          placeholderTextColor={COLORS.primary}
          inputMode ="search"
          keyboardType="web-search"
          enterKeyHint="search"
          autoFocus
          style={sx.input}
        />
      </View>
      <Pressable>
        <FontAwesome6 name="xmark" size={SIZES.icon} color={COLORS.icon} />
      </Pressable>
    </View>
  );
};

const sx = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    borderWidth: 1,
    borderColor: "red",
    ...flexStyles.rowCenterBetween,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
  },
  leftContent: {
    ...flexStyles.rowCenterStart,
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "red",
    ...textStyles.bodyLarge,
  },
});
