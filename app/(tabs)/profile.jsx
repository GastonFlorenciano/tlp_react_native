import { View, Text, Image } from 'react-native';
import profilePic from '../../assets/levi.png'; // Asegúrate de tener una imagen en esta ruta

export default function Profile() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-200">
      <Image
        source={profilePic}
        className="w-32 h-32 rounded-full mb-4"
      />
      <Text className="text-xl font-semibold">Levi Ackerman</Text>
      <Text className="text-gray-600">Desarrollador móvil</Text>
    </View>
  );
}
