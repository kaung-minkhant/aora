import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@constants/index";
import FormField from "@components/FormField";
import CustomButton from "@components/CustomButton";
import { Link, router } from "expo-router";
import { TSignUpFormData, signUpWithEmail } from "@models/index";
import { TCustomError } from "@utils/index";
import tw from "@utils/tailwind";

const SignUp = () => {
  const [form, setForm] = useState<TSignUpFormData>({
    username: "",
    email: "",
    password: "",
  });
  // TODO: change implementation
  const [errors, setErrors] = useState<Map<string, string>>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    setIsSubmitting(true);
    try {
      const userData = await signUpWithEmail(form);
      setIsSubmitting(false);
      router.replace("/home");
    } catch (_e) {
      const error = _e as TCustomError
      console.log("Error in sign-up", error);
      if (error.data?.data) {
        setErrors(error.data.data);
      } else {
        Alert.alert("Error in sign-up " + error);
      }
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <ScrollView>
        <View  style={ tw`w-full min-h-[85vh] justify-center px-4 my-6` }>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={tw`w-[115px] h-[35px]`}
          />
          <Text style={ tw`text-2xl text-white font-semibold mt-10 font-psemibold` }>
            Sign up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) =>
              setForm({
                ...form,
                username: e,
              })
            }
            otherStyles="mt-10"
            error={errors && errors.get("username")}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
            error={errors && errors.get("email")}
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
            otherStyles="mt-7"
            error={errors && errors.get("password")}
          />
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            loading={isSubmitting}
          />
          <View style={ tw`justify-center pt-5 flex-row gap-2` }>
            <Text style={ tw`text-lg text-gray-100 font-pregular` }>
              Already have an account?
            </Text>
            <Text
              // href={"/sign-in"}
              onPress={() => router.navigate('sign-in')}
              style={tw`text-lg font-psemibold text-secondary`}
            >
              Sign In
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
