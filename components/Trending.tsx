import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { TPost } from '@models/posts'
import tw from '@utils/tailwind'

interface ITrendingProps {
  posts: TPost[];
}
const Trending = ({posts, }: ITrendingProps) => {
  return (
    <FlatList 
      data={posts}
      keyExtractor={item => item.id!.toString()}
      renderItem={({item}) => (
        <Text style={tw`text-2xl text-white`}>{item.id}</Text>
      )}
      horizontal
    />
  )
}

export default Trending