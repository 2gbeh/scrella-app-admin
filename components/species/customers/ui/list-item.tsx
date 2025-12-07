import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Pressable, StyleSheet, Text, View } from "react-native";
//
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";

export const ListItem: React.FC = () => {
  return (
    <View style={sx.container}>
      <View style={sx.avatar}>
        <Text style={sx.avatarText}>A</Text>
      </View>
      <View style={sx.rightContent}>
        <View style={sx.textContainer}>
          <View style={sx.titleWrapper}>
            <Text style={sx.title}>Headline</Text>
            <Text style={sx.subtitle}>100+</Text>
          </View>
          <Text style={sx.description}>Supporting text</Text>
        </View>
        {/* <Pressable style={sx.iconContainer}>
          <FontAwesome6
            name="caret-right"
            size={SIZES.listItemTrailingIcon}
            color={COLORS.icon}
          />
        </Pressable> */}
      </View>
    </View>
  );
};

const sx = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    height: SIZES.listItemContainer2,
    ...flexStyles.rowCenterStart,
    gap: 16,
  },
  avatar: {
    backgroundColor: COLORS.primaryContainer,
    borderRadius: SIZES.listItemAvatar,
    width: SIZES.listItemAvatar,
    height: SIZES.listItemAvatar,
    ...flexStyles.centerCenter,
  },
  avatarText: {
    color: COLORS.primaryDark,
    ...textStyles.titleMedium,
  },
  rightContent: {
    ...flexStyles.rowCenterBetween,
    flex: 1,
    gap: 16,
  },
  textContainer: {
    flex: 1,
  },
  titleWrapper: {
    ...flexStyles.rowCenterBetween,
    gap: 16,
  },
  title: {
    color: COLORS.black,
    ...textStyles.bodyLarge,
  },
  subtitle: {
    color: COLORS.muted,
    ...textStyles.labelSmall,
  },
  description: {
    color: COLORS.muted,
    ...textStyles.bodyMedium,
  },
  iconContainer: {
    ...flexStyles.centerCenter,
    width: SIZES.listItemTrailingIconContainer,
    height: SIZES.listItemTrailingIconContainer,
  },
});
