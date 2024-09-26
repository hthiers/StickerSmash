import { Tabs } from "expo-router";
import { HomeIcon, InfoIcon, HospIcon, BabyIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { },
        tabBarActiveTintColor: "#f5b1ad",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="perfilbebe"
        options={{
          title: "Mi Bebé",
          tabBarIcon: ({ color }) => <BabyIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="eventoslist"
        options={{
          title: "Vacunas",
          tabBarIcon: ({ color }) => <HospIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
