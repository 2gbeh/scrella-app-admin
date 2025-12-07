import { StyleSheet, View, Text, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
//
import { Header } from "@/components/organisms/header";
import * as ListItem from "@/components/atoms/lists/list-item";
import * as ListHeader from "@/components/atoms/lists/list-header";
import { SearchBar } from "@/components/organisms/search-bar";
import { useDebouncedSearch } from "@/hooks/use-debounced-search";
import { longDateFormat } from "@/utils";
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";
import { Skeleton } from "@/components/atoms/skeleton";

export default function CustomersScreen() {
  const { searchText, setSearchText, data, loading } = useDebouncedSearch();

  return (
    <View style={sx.container}>
      <Header history="/" />
      <View style={sx.content}>
        <SearchBar />
      </View>
      <ListHeader.Container title={longDateFormat()}>
      
      </ListHeader.Container>
      <View>
        <View>
          <Skeleton h={72} />
        </View>
        {data.map((item) => (
          <ListItem.Container key={item.id}>
            <ListItem.Avatar alt={item.name} />
            <ListItem.Content>
              <ListItem.Article
                title={item.name}
                description={item.email.toLowerCase()}
              />
              <ListItem.TrailingIcon />
            </ListItem.Content>
          </ListItem.Container>
        ))}
      </View>
    </View>
  );
}

const sx = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    backgroundColor: COLORS.background,
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
