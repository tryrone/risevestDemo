import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {DeleteIcon} from '../../assets/svgs';

interface PhonePadKeyboardProps {
  onKeyPress: (val: number | string) => void;
}

const PhonePadKeyboard = ({onKeyPress}: PhonePadKeyboardProps) => {
  const handleKeyPress = (key: number | string) => {
    if (onKeyPress) {
      onKeyPress(key);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(1)}>
          <Text style={styles.keyText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(2)}>
          <Text style={styles.keyText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(3)}>
          <Text style={styles.keyText}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(4)}>
          <Text style={styles.keyText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(5)}>
          <Text style={styles.keyText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(6)}>
          <Text style={styles.keyText}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(7)}>
          <Text style={styles.keyText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(8)}>
          <Text style={styles.keyText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(9)}>
          <Text style={styles.keyText}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress('.')}>
          <Text style={styles.keyText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(0)}>
          <Text style={styles.keyText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress('delete')}>
          <DeleteIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '90%',
  },
  key: {
    width: 72,
    height: 72,
    borderRadius: 40,
    backgroundColor: Colors.light_grey_2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  keyText: {
    fontSize: 30,
    color: Colors.primary,
    fontWeight: '600',
  },
});

export default PhonePadKeyboard;
