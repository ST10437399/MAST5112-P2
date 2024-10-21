import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { useMenu } from '../screens/MenuContext'; 

const ChefsMenu = () => {
  const navigation = useNavigation();
  const { addDish } = useMenu(); 
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddDish = () => {
    if (!selectedCategory || !dishName || !description || !price) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const newDish = {
      id: Date.now().toString(),
      category: selectedCategory,
      name: dishName,
      description,
      price,
    };

    addDish(newDish); 

    setDishName('');
    setDescription('');
    setPrice('');
    setSelectedCategory(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewMenuButton} onPress={() => navigation.navigate('FullMenu')}>
        <Text style={styles.viewMenuButtonText}>View Menu</Text>
      </TouchableOpacity>

      <RNPickerSelect
        onValueChange={(value) => setSelectedCategory(value)}
        items={[
          { label: 'Starter', value: 'Starter' },
          { label: 'Main Course', value: 'Main Course' },
          { label: 'Dessert', value: 'Dessert' },
        ]}
        style={pickerSelectStyles}
        placeholder={{ label: 'Select a category...', value: null }}
      />

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddDish}>
        <Text style={styles.addButtonText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );
};





const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputAndroid: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  viewMenuButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  viewMenuButtonText: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  addButton: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  listContainer: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardPrice: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default ChefsMenu;
