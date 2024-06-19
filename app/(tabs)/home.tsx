import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { images } from "@constants/index";
import SearchInput from "@components/SearchInput";
import Trending from "@components/Trending";
import EmptyState from "@components/EmptyState";
import tw from "@utils/tailwind";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };
  return (
    <SafeAreaView style={ tw`bg-primary h-full` }>
      <FlatList
        data={[{ id: 1 }, { id: 2 }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={ tw`text-white text-2xl px-5` }>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View style={tw`mt-6 px-6 gap-5`}>
            <View style={tw`justify-between items-start flex-row mb-6`}>
              <View>
                <Text style={tw`font-pmedium text-sm text-gray-100`}>
                  Welcome back,{" "}
                </Text>
                <Text style={tw`text-2xl font-psemibold text-white`}>
                  Polar
                </Text>
              </View>
              <View style={tw`mt-1.5`}>
                <Image
                  source={images.logoSmall}
                  style={tw`w-9 h-10`}
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View style={tw`w-full flex-1 pt-5 pb-8`}>
              <Text style={tw`text-gray-100 text-lg font-pregular mb-3`}>
                Latest Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subTitle="Be the first one to upload video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
