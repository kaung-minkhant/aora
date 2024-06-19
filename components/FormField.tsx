import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@constants/index";
import tw from "@utils/tailwind";

interface IFormFieldProps extends Record<string, any> {
  title: string;
  placeholder?: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  error?: string | null;
}
const FormField = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyles,
  error,
  ...props
}: IFormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={tw.style("gap-3", otherStyles)}>
      <Text style={tw`text-base text-gray-100 font-pmedium`}>{title}</Text>
      <View
        style={tw`w-full h-16 px-4 bg-black-100 rounded-2xl  items-center border-2 border-black-200 focus:border-secondary flex-row`}
      >
        <TextInput
          style={tw`flex-1 text-white font-psemibold text-base`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              style={tw`w-6 h-6`}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={tw`text-red-300 ml-2 text-sm`}>{error}</Text>}
    </View>
  );
};

export default FormField;
