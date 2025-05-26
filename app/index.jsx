import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 justify-center items-center bg-blue-200">
      <View className="bg-white p-12 rounded-xl shadow-lg">
        <Text className="text-2xl font-bold text-center mb-6">Inicio de sesión</Text>
        <TextInput className="border p-2 mb-4 w-64" placeholder="Usuario" value={user} onChangeText={setUser} />
        <TextInput className="border p-2 mb-6 w-64" placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />
        <TouchableOpacity
          className="bg-blue-500 p-3 rounded-xl"
          onPress={() => router.replace('/(tabs)/home')}
        >
          <Text className="text-white text-center font-bold">Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
