import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Main } from './components/Main';

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center justify-center">
        <StatusBar style="dark" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}