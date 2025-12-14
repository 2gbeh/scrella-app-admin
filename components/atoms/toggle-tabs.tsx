import { StyleSheet, Pressable, View, Text } from "react-native";
//
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";

interface Props {
  data: string[];
  value?: number;
  onChange?: (index: number) => void;
}

export const ToggleTabs: React.FC<Props> = ({
  data,
  value = 0,
  onChange = () => undefined,
}) => {
  return (
    <View style={sx.container}>
      {data.map((item, i) => {
        const active = i === value;
        //
        return (
          <Pressable
            key={i}
            style={[
              sx.tab,
              { backgroundColor: active ? COLORS.white : undefined },
            ]}
            onPress={() => onChange(i)}
          >
            <Text
              style={[sx.label, { color: active ? COLORS.black : undefined }]}
            >
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const sx = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    backgroundColor: COLORS.background,
    borderRadius: 8,
    ...flexStyles.rowCenterStart,
  },
  tab: {
    borderColor: COLORS.background,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 32,
    ...flexStyles.centerCenter,
  },
  label: {
    color: COLORS.muted,
    ...textStyles.bodyMedium,
  },
});
