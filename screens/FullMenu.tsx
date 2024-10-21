import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMenu } from '../screens/MenuContext'; // Import the context

const FullMenu = () => {
  const navigation = useNavigation();
  const { dishes } = useMenu(); // Get the dishes from the context
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? dishes
    : dishes.filter(item => item.category === selectedCategory);

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>R{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.totalDishesText}>Total Dishes: {dishes.length}</Text>

      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => setSelectedCategory('Starter')}>
          <Text style={selectedCategory === 'Starter' ? styles.selectedCategory : styles.category}>Starters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('Main Course')}>
          <Text style={selectedCategory === 'Main Course' ? styles.selectedCategory : styles.category}>Main Course</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('Dessert')}>
          <Text style={selectedCategory === 'Dessert' ? styles.selectedCategory : styles.category}>Dessert</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('All')}>
          <Text style={selectedCategory === 'All' ? styles.selectedCategory : styles.category}>All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.menuList}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  backButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  totalDishesText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: '#373737', 
    paddingVertical: 10,
    borderRadius: 5,
  },
  category: {
    fontSize: 16,
    color: '#fff', 
  },
  selectedCategory: {
    fontSize: 16,
    color: '#FFD700', 
    fontWeight: 'bold',
  },
  menuList: {
    flexGrow: 1,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    marginTop: 5,
    color: '#555',
  },
  itemPrice: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
  },
});

export default FullMenu;
