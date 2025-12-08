import { PropsWithChildren } from "react";
import { Pressable, Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
//
import { Skeleton } from "@/components/atoms/skeleton";
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";
//
import { listItemStyles as sx } from "./styles.module";

/**
Icon
ImageThumbnail
VideoThumbnail
 */

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={sx.container}>{children}</View>;
};

interface AvatarProps {
  alt?: string | null;
}

export const Avatar: React.FC<AvatarProps> = ({ alt }) => {
  return (
    <View style={sx.avatar}>
      <Text style={sx.avatarText}>
        {alt ? alt.charAt(0).toUpperCase() : "N"}
      </Text>
    </View>
  );
};

export const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={sx.content}>{children}</View>;
};

interface ArticleProps extends PropsWithChildren {
  title: string;
  subtitle?: string | null;
  description?: string | null;
}

export const Article: React.FC<ArticleProps> = ({
  children,
  title,
  subtitle,
  description,
}) => {
  return (
    <View style={sx.article}>
      <View style={sx.titleWrapper}>
        <Text style={sx.title}>{title}</Text>
        {/* TRAILING SUPPORTNG TEXT */}
        {subtitle ? <Text style={sx.subtitle}>{subtitle}</Text> : null}
      </View>
      {/* SUPPORTING TEXT */}
      {children ? (
        children
      ) : description ? (
        <Text style={sx.description}>{description}</Text>
      ) : null}
    </View>
  );
};

interface TrailingIconProps {
  onClick?: () => void;
}

export const TrailingIcon: React.FC<TrailingIconProps> = ({
  onClick = () => undefined,
}) => {
  return (
    <Pressable onPress={onClick} style={sx.iconContainer}>
      <FontAwesome6
        name="caret-right"
        size={SIZES.listItemTrailingIcon}
        color={COLORS.icon}
      />
    </Pressable>
  );
};

export const renderSkeleton = (length = 10) => {
  return Array.from({ length }).map((_, i) => (
    <View key={i} style={sx.container}>
      <Skeleton w={40} h={40} r={40} />
      <View style={sx.content}>
        <View style={[sx.article, { gap: 8 }]}>
          <Skeleton w={200} h={15} />
          <Skeleton w={150} h={10} />
        </View>
        <Skeleton w={16} h={16} />
      </View>
    </View>
  ));
};
