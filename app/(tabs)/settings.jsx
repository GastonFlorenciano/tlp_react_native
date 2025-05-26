import { View, Text, Switch, TextInput } from 'react-native';
import { useState } from 'react';

export default function Settings() {
  const [notificaciones, setNotificaciones] = useState(true);
  const [sonido, setSonido] = useState(true);

  return (
    <View className="flex-1 bg-blue-200 p-6">
      <Text className="text-2xl font-bold mb-6 text-center">Configuración</Text>

      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl">Notificaciones</Text>
        <Switch
          value={notificaciones}
          onValueChange={setNotificaciones}
          trackColor={{ false: '#767577', true: '#81aff4' }}
          thumbColor={notificaciones ? '#0B57D0' : '#f4f3f4'}
        />
      </View>

      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl">Sonido</Text>
        <Switch
          value={sonido}
          onValueChange={setSonido}
          trackColor={{ false: '#767577', true: '#81aff4' }}
          thumbColor={sonido ? '#0B57D0' : '#f4f3f4'}
        />
      </View>

      <View className="mb-4">
        <Text className="text-xl mb-1">Nombre de usuario</Text>
        <TextInput
          className="bg-white rounded-md p-2 text-lg"
          value='Levi_AOT'
          editable={false}
        />
      </View>

      <View className="mb-4">
        <Text className="text-xl mb-1">Email</Text>
        <TextInput
          className="bg-white rounded-md p-2 text-lg"
          value="levi@ackerman.com"
          editable={false}
        />
      </View>
    </View>
  );
}
