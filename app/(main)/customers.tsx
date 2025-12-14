import { StyleSheet, View } from "react-native";
//
import { Header } from "@/components/organisms/header";
import { SearchBar } from "@/components/atoms/search-bar";
import { useDebouncedSearch } from "@/hooks/use-debounced-search";
import { UserDto } from "@/types/user.type";
import { COLORS } from "@/constants/COLORS";
//
import { CustomerList } from "@/components/species/customers/components/customers-list";
import { useCustomersScreen } from "@/components/species/customers/hooks/use-customers-screen";

export default function CustomersScreen() {
  const {
    searchText,
    setSearchText,
    debouncedText,
    data,
    setData,
    loading,
    setLoading,
  } = useDebouncedSearch<UserDto>();
  useCustomersScreen({ debouncedText, setData, setLoading });
  //
  return (
    <View style={sx.container}>
      <Header />
      <View style={sx.content}>
        <SearchBar value={searchText} onChange={setSearchText} />
      </View>
      <CustomerList data={data} loading={loading} />
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
    flex: 1,
    // gap: 16,
  },
  content: {
    paddingHorizontal: 16,
    gap: 16,
  },
});
