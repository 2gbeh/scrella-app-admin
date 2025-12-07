import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
//
import { Header } from "@/components/organisms/header";
import { ListItem } from "@/components/species/customers/ui/list-item";
import { SearchBar } from "@/components/organisms/search-bar";
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { longDateFormat } from "@/utils";
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";

export default function CustomersScreen() {
  const router = useRouter();

  return (
    <View style={sx.container}>
      <Header />
      <View style={sx.content}>
        <SearchBar />
      </View>
      <View style={sx.section}>
        <Text style={sx.title}>{longDateFormat()}</Text>
        <Pressable style={sx.subtitleWrapper}>
          <Text style={sx.subtitle}>See all</Text>
          <FontAwesome6
            name="chevron-right"
            size={SIZES.appBarAvatarText}
            color={COLORS.icon}
          />
        </Pressable>
      </View>
      <ListItem />
      <ListItem />
    </View>
  );
}

const sx = StyleSheet.create({
  __: {},
  container: {
    gap: 16,
  },
  content: {
    paddingHorizontal: 16,
    gap: 16,
  },
  section: {
    ...flexStyles.rowCenterBetween,
    paddingHorizontal: 16,
  },
  title: {
    color: COLORS.black,
    ...textStyles.titleMedium,
  },
  subtitle: {
    color: COLORS.icon,
    ...textStyles.bodyLarge,
  },
  subtitleWrapper: {
    ...flexStyles.rowCenterStart,
    gap: 8,
  },
});
