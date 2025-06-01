import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function SubtasksScreen() {
  const router = useRouter();
  const { task } = useLocalSearchParams();
  const taskObj = JSON.parse(task);
  const [tasks, setTasks] = useState(taskObj.subtasks);

  const toggleTask = (id) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const goToDetail = (subtask) => {
    router.push({
      pathname: '/(tabs)/tasks/subtaskDetail',
      params: { subtask: JSON.stringify(subtask) }
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => goToDetail(item)}
      style={{ padding: 10, borderBottomWidth: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Text
        onPress={() => toggleTask(item.id)}
        className={`mx-2 text-2xl ${item.completed ? 'text-green-500' : 'text-gray-400'}`}>
        {item.completed ? '✅' : '⬜'}
      </Text>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View className='flex-1 bg-blue-200 p-6'>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
        {taskObj.title}:
      </Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No hay subtareas.</Text>}
      />
    </View>
  );
}
