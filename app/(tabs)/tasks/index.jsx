import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { tareas } from '../../../constants/tareas';

export default function TasksScreen() {
    const [tasks, setTasks] = useState(tareas);
    const router = useRouter();

    const toggleTask = (id) => {
        setTasks(tasks =>
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const goToSubtasks = (task) => {
        router.push({
            pathname: '/(tabs)/tasks/subtasks',
            params: { task: JSON.stringify(task) }
        });
    };

    const renderItem = ({ item }) => (
            <TouchableOpacity
                onPress={() => goToSubtasks(item)}
                className='flex-row items-center border p-4 m-2 bg-white rounded-lg shadow'>
                <Text
                    onPress={() => toggleTask(item.id)}
                    className={`mr-3 text-2xl ${item.completed ? 'text-green-500' : 'text-gray-400'}`}
                >
                    {item.completed ? '✅' : '⬜'}
                </Text>
                <Text className={item.completed ? 'line-through text-gray-400' : ''}>
                    {item.title}
                </Text>
            </TouchableOpacity>
    );

    return (
        <View className='flex-1 bg-blue-200 p-6'>
            <Text className='text-2xl font-bold mb-6 text-center'>Tareas</Text>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListEmptyComponent={<Text>No tasks available.</Text>}
            />
        </View>
    );
}