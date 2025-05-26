import { View, Text } from 'react-native';

const frases = [
  "La creatividad es la inteligencia divirtiéndose.",
  "Cada día trae nuevas oportunidades.",
  "No cuentes los días, haz que los días cuenten.",
  "La simplicidad es la clave de la brillantez.",
];

const random = frases[Math.floor(Math.random() * frases.length)];

export default function Quote() {
  return (
      <View className="flex-1 justify-center items-center bg-blue-200 px-6">
        <Text className="text-2xl font-bold mb-6">Frase del día</Text>
        <Text className="text-lg italic text-center text-gray-800">
          “{random}”
        </Text>
      </View>
  );
}
