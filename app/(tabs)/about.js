import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-50`}>
            <HomeIcon />
          </StyledPressable>
        </Link>

        <Text className="text-white font-bold mb-8 text-2xl">
          Acerca del Proyecto
        </Text>

        <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
        pellentesque vitae leo a tempor. Proin eros massa, varius vel nunc sed, 
        egestas fermentum libero. Vivamus dui purus, vehicula id sollicitudin eget, 
        ornare sed mi. Nulla non condimentum ante. Donec ornare, ex ac dignissim 
        molestie, elit purus placerat dolor, eget convallis sapien purus non mauris. 
        Nam vulputate tellus nec auctor lacinia.
        </Text>

        <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
        pellentesque vitae leo a tempor. Proin eros massa, varius vel nunc sed, 
        egestas fermentum libero. Vivamus dui purus, vehicula id sollicitudin eget, 
        ornare sed mi. Nulla non condimentum ante. Donec ornare, ex ac dignissim 
        molestie, elit purus placerat dolor, eget convallis sapien purus non mauris. 
        Nam vulputate tellus nec auctor lacinia.
        </Text>

        <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
        pellentesque vitae leo a tempor. Proin eros massa, varius vel nunc sed, 
        egestas fermentum libero. Vivamus dui purus, vehicula id sollicitudin eget, 
        ornare sed mi. Nulla non condimentum ante. Donec ornare, ex ac dignissim 
        molestie, elit purus placerat dolor, eget convallis sapien purus non mauris. 
        Nam vulputate tellus nec auctor lacinia.
        </Text>
      </ScrollView>
    </Screen>
  )
}