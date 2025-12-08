import { View, Text, FlatList, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
//
import * as ListItem from "@/components/molecules/list-builder/list-item";
import * as ListHeader from "@/components/molecules/list-builder/list-header";
import { dateUtil } from "@/utils/date.util";
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { UserDto } from "@/types/user";
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";

interface Props {
  data?: UserDto[];
  loading?: boolean;
}

export const CustomerList: React.FC<Props> = ({ data = [], loading }) => {
  return loading ? (
    <ScrollView style={{ flex: 1 }}>{ListItem.renderSkeleton()}</ScrollView>
  ) : (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderCustomerListItem}
      ListHeaderComponent={
        data.length ? (
          <ListHeader.Container title={dateUtil.asLongDate()}>
            <ListHeader.SeeAll />
          </ListHeader.Container>
        ) : null
      }
      ListEmptyComponent={
        <View style={[flexStyles.centered, { gap: 8 }]}>
          <MaterialCommunityIcons
            name="map-search-outline"
            size={SIZES.iconContainer}
            color={COLORS.icon}
          />
          <Text style={[textStyles.bodyLarge, { color: COLORS.icon }]}>
            No data
          </Text>
        </View>
      }
      contentContainerStyle={{ flex: 1 }}
    />
  );
};

const renderCustomerListItem = ({ item }: { item: UserDto }) => (
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
);
