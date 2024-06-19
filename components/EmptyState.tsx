import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@constants/index";
import CustomButton from "@components/CustomButton";
import { router } from "expo-router";
import tw from "@utils/tailwind";

interface IEmptyStateProps {
  title: string;
  subTitle?: string;
}
const EmptyState = ({title, subTitle}: IEmptyStateProps) => {
  return (
    <View style={tw`justify-center items-center px-4`}>
      <Image
        source={images.empty}
        style={tw`w-[270px] h-[215px]`}
        resizeMode="contain"
      />
      <Text style={tw`text-xl text-center font-psemibold text-white`}>{title}</Text>
      <Text style={tw`font-pmedium text-sm text-gray-100 mt-2`}>{subTitle}</Text>
      <CustomButton title={'Create Video'} handlePress={() => router.push('/create')} containerStyles='w-full my-5' />
    </View>
  );
};

export default EmptyState;
