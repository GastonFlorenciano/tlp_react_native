import { View, Text, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function SubtaskDetailScreen() {
    const { subtask } = useLocalSearchParams();
    const subtaskObj = JSON.parse(subtask);

    const renderItem = ({ item }) => (
        <View
            style={{ padding: 10, borderBottomWidth: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
            <Text>{item.description}</Text>
        </View>
    );

    return (
        <View className='flex-1 bg-blue-200 p-6'>
            <View className='flex-row'>
                <Text className='text-2xl font-bold mb-4'>{subtaskObj.title}</Text>
                <Text className={`mx-2 text-2xl ${subtaskObj.completed ? 'text-green-500' : 'text-gray-400'}`}>
                    {subtaskObj.completed ? '✔️' : ''}
                </Text>
            </View>
            <FlatList
                data={[subtaskObj]}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListEmptyComponent={<Text>No hay detalles disponibles.</Text>}
            />
        </View>
    );

}