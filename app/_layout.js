import { Link, Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerTitle: "App Soy Mamá",
          headerLeft: () => <Logo className="mb-2" />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          )
        }}
      />
    </View>
  )
}