import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const AuthLayout = () => {
  return (
    <>
      <View className="flex-1 bg-primary">
        <Stack>
          <Stack.Screen
            name="sign-in"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="sign-up"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
        <StatusBar backgroundColor="#161622" style="light" />
      </View>
    </>
  );
};

export default AuthLayout;
