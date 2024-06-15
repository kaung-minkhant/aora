import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@constants/index";
import FormField from "@components/FormField";
import CustomButton from "@components/CustomButton";
import { Link, router } from "expo-router";
import { TSignUpFormData, signUpWithEmail } from "@models/index";

const SignUp = () => {
  const [form, setForm] = useState<TSignUpFormData>({
    username: '',
    email: "",
    password: "",
  });
  // TODO: change implementation
  const [errors, setErrors] = useState<Map<string, string>>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    setIsSubmitting(true)
    try {
      const userData = await signUpWithEmail(form)
      setIsSubmitting(false);
      router.replace("/home");
    } catch (error: any) {
      console.log("Error in sign-up", error);
      if (error.data) {
        setErrors(error.data);
      } else {
        Alert.alert("Error in sign-up " + error);
      }
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">
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
            error={errors && errors.get('username')}
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
            error={errors && errors.get('email')}
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
            error={errors && errors.get('password')}
          />
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            loading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href={"/sign-in"}
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
