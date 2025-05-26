import { View, Text, Pressable } from 'react-native';

export default function Inicio() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-200 p-4">
      <Text className="text-3xl font-bold mb-2">Inicio</Text>
      <Text className="text-lg mb-6 text-green-900">¡Bienvenido a la pantalla principal!</Text>
      <Pressable
        className="bg-blue-500 px-6 py-2 rounded-lg"
        onPress={() => alert('Botón presionado')}
      >
        <Text className="text-white text-lg">Presionar</Text>
      </Pressable>
    </View>
  );
}
