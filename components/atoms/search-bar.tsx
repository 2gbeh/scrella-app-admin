import { Pressable, StyleSheet, TextInput, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
//
import { shadowMixinStyles } from "@/styles";
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchBar: React.FC<Props> = ({
  value = "",
  onChange = () => undefined,
}) => {
  const isDirty = value.length > 0;
  const handleReset = () => onChange("");
  //
  return (
    <View style={sx.container}>
      <View style={sx.leftContent}>
        <FontAwesome6
          name="magnifying-glass"
          size={SIZES.listItemTrailingIcon}
          color={COLORS.icon}
        />
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder="Search..."
          placeholderTextColor={COLORS.muted}
          inputMode="search"
          keyboardType="web-search"
          enterKeyHint="search"
          autoFocus
          style={sx.input}
        />
      </View>
      {isDirty && (
        <Pressable onPress={handleReset}>
          <FontAwesome6
            name="xmark"
            size={SIZES.listItemTrailingIcon}
            color={COLORS.icon}
          />
        </Pressable>
      )}
    </View>
  );
};

const sx = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 100,
    paddingHorizontal: 16,
    height: 56,
    ...flexStyles.rowCenterBetween,
    gap: 16,
    ...shadowMixinStyles(),
  },
  leftContent: {
    ...flexStyles.rowCenterStart,
    flex: 1,
    gap: 16,
  },
  input: {
    width: "100%",
    height: 56,
    ...textStyles.bodyLarge,
  },
});
