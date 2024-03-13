import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import {useState} from 'react';
import MainLayout from '../layout/MainLayout';

export default function HomeScreen({navigation}) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const handleAddTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <MainLayout>
        <SafeAreaView>
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={handleAddTask} />
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </SafeAreaView>
      </MainLayout>
    </>
  );
}
