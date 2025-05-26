import { View, Text, Pressable } from 'react-native';

const moods = ['😄 Feliz', '😐 Neutro', '😴 Cansado', '😡 Enojado'];

export default function Mood() {
  return (
      <View className="flex-1 justify-center items-center px-4 bg-blue-200">
        <Text className="text-2xl font-bold mb-6">¿Cómo te sentís hoy?</Text>
        {moods.map((mood, idx) => (
          <Pressable
            key={idx}
            className="bg-white px-6 py-3 rounded-xl mb-4 shadow-md"
            onPress={() => alert(`Seleccionaste: ${mood}`)}
          >
            <Text className="text-lg">{mood}</Text>
          </Pressable>
        ))}
      </View>
  );
}
