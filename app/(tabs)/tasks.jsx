import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const initialTasks = [
  { id: '1', title: 'Hacer las compras', completed: false },
  { id: '2', title: 'Pasear al perro', completed: true },
  { id: '3', title: 'Estudiar', completed: false }
];

export default function TasksScreen() {
    const [tasks, setTasks] = useState(initialTasks);

    const toggleTask = (id) => {
        setTasks(tasks =>
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const renderItem = ({ item }) => (
        <View className='flex-row items-center border p-4 m-2 bg-white rounded-lg shadow'>
            <Text
                onPress={() => toggleTask(item.id)}
                className={`mr-3 text-2xl ${item.completed ? 'text-green-500' : 'text-gray-400'}`}
            >
                {item.completed ? '✅' : '⬜'}
            </Text>
            <Text className={item.completed ? 'line-through text-gray-400' : ''}>
                {item.title}
            </Text>
        </View>
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