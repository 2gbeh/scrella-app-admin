import { PropsWithChildren } from "react";
import { Pressable, Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
//
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
  alt?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ alt = "N" }) => {
  return (
    <View style={sx.avatar}>
      <Text style={sx.avatarText}>{alt.charAt(0).toUpperCase()}</Text>
    </View>
  );
};

export const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={sx.content}>{children}</View>;
};

interface ArticleProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  description?: string;
}

export const Article: React.FC<ArticleProps> = ({
  children,
  title,
  subtitle,
  description,
}) => {
  return (
    <View style={sx.textContainer}>
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
  onClick?: VoidFunction;
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
