import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
 const [selected, setSelected] = useState<'Food items'|'Restaurants'>('Food items');
 const handleTabChange=(tab:'Food items'|'Restaurants')=>{
    setSelected(tab);
 }


  return (
    <View style={styles.container}>
    <TouchableOpacity
      style={[
        styles.button,
        selected === 'Food items' && styles.selectedButton,
      ]}
      onPress={() => handleTabChange('Food items')}
    >
      <Text
        style={[
          styles.text,
          selected === 'Food items' && styles.selectedText,
        ]}
      >
        Food items
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.button,
        selected === 'Restaurants' && styles.selectedButton,
      ]}
      onPress={() => handleTabChange('Restaurants')}
    >
      <Text
        style={[
          styles.text,
          selected === 'Restaurants' && styles.selectedText,
        ]}
      >
        Restaurants
      </Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    borderWidth: 0.4,
    borderColor: 'grey',
    width: '85%',
    height: '19%',
    marginLeft: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
     paddingHorizontal:43,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical:13,
  },
  selectedButton: {
    backgroundColor: '#FE724C'
  },
  text: {
    fontSize: 18,
    color: '#FE724C',
  },
  selectedText: {
    color: 'white',
  },
});

export default Header;
