import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-200">
      <View className="bg-white p-12 border border-gray-300 rounded-xl shadow-lg">
        <View className="p-5 bg-blue-400 rounded-2xl mb-8 shadow-[0px_8px_5px_-3px_#b8b8b8]">
          <Text className="text-white text-2xl text-center font-bold">
            Inicio de Sesión
          </Text>
        </View>

        <View className="px-4">
          <TextInput
            className="border border-gray-400 rounded p-2 mb-4"
            placeholder="Usuario"
          />
          <TextInput
            className="border border-gray-400 rounded p-2 mb-4"
            placeholder="Contraseña"
            secureTextEntry
          />

          <TouchableOpacity className="bg-blue-400 rounded-xl shadow-[0px_10px_12px_-3px_#b8b8b8] p-3">
            <Text className="text-white text-center text-lg font-bold">Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
