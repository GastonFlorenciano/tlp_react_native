import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <Tabs screenOptions={{ headerShown: false }}>

        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="mood"
          options={{
            tabBarLabel: 'Estado',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="happy" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="quote"
          options={{
            tabBarLabel: 'Frase',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            tabBarLabel: 'Configuración',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="tasks"
          options={{
            tabBarLabel: 'Tareas',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="checkmark-done" size={size} color={color} />
            ),
          }}
        />

      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // necesario en Android
  },
});
