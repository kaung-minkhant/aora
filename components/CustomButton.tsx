import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "@utils/tailwind";

interface TCustomButtomProps {
  title: string;
  handlePress?: any;
  containerStyles?: string;
  textStyles?: string;
  loading?: boolean;
}
const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  loading,
}: TCustomButtomProps) => {
  return (
    <TouchableOpacity
      style={tw.style(
        "bg-secondary rounded-xl min-h-[62px] justify-center items-center",
        containerStyles,
        {
          "opacity-50": !!loading,
        }
      )}
      onPress={handlePress}
      disabled={loading}
      activeOpacity={0.7}
    >
      <Text style={tw.style("text-primary font-psemibold text-lg", textStyles)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
