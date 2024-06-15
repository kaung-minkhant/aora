import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface TCustomButtomProps {
  title: string;
  handlePress?: any;
  containerStyles?: string;
  textStyles?: string;
  loading?: boolean
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
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${loading ? "opacity-50" : ""}`}
      onPress={handlePress}
      disabled={loading}
      activeOpacity={0.7}
    >
      <Text className={ `text-primary font-psemibold text-lg ${textStyles}` }>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
