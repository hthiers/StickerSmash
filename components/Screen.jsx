import { View } from "react-native";

// Main app screen View
export function Screen({ children }) {
  return <View className="flex-1 pt-4 px-2 mt">{children}</View>;
}