import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'home') iconName = 'home';
          else if (route.name === 'profile') iconName = 'person';
          else if (route.name === 'settings') iconName = 'settings';
          else if (route.name === 'mood') iconName = 'happy';
          else if (route.name === 'quote') iconName = 'book';


          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    />
  );
}
