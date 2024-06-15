import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

interface ISearchInputProps extends Record<string, any> {
  value?: string;
  handleChangeText?: (text: string) => void;
  otherStyles?: string;
  error?: string;
}
const SearchInput = ({
  value,
  handleChangeText,
  otherStyles,
  error,
  ...props
}: ISearchInputProps) => {
  return (
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl  items-center border-2 border-black-200 focus:border-secondary flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={"Search for a video topic"}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />
      <TouchableOpacity>
        <Image source={icons.search} className='w-5 h-5' resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
