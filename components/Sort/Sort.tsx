import React, { useState, useCallback } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { ListItemWrapper } from '../styled';
import { Picker } from '@react-native-picker/picker';
import { Order, Field } from '../../hooks/useSort';

export const Sort: React.FC<any> = ({
  setOrder,
  setField,
  order,
  field,
  from,
  to,
  setFrom,
  setTo,
  playersLength,
}) => {
  return (
    <View style={styles.container}>
      <Text>Order</Text>
      <View style={styles.block}>
        <Picker
          mode='dropdown'
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={order}
          onValueChange={(itemValue) => {
            setOrder(itemValue);
          }}
        >
          {Object.entries(Order).map((item) => (
            <Picker.Item label={item[0]} value={item[1]} />
          ))}
        </Picker>
      </View>
      <Text>Sort By</Text>
      <View style={styles.block}>
        <Picker
          mode='dropdown'
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={field}
          onValueChange={(itemValue) => {
            setField(itemValue);
          }}
        >
          {Object.entries(Field).map((item) => (
            <Picker.Item label={item[0]} value={item[1]} />
          ))}
        </Picker>
      </View>

      <Text>Number of items to show</Text>
      <View style={styles.block}>
        <Pressable onPress={(e) => {}}>
          <View style={styles.button}>
            <Text>From</Text>
          </View>
        </Pressable>
        <Picker
          mode='dropdown'
          style={styles.rangePicker}
          itemStyle={styles.pickerItem}
          selectedValue={from}
          onValueChange={(itemValue) => {
            if (itemValue < to) {
              setFrom(itemValue);
            }
          }}
        >
          {[...Array(playersLength)].map((_e, i) => (
            <Picker.Item label={i.toString()} value={i} key={i} />
          ))}
        </Picker>
        <Pressable onPress={(e) => {}}>
          <View style={styles.button}>
            <Text>To</Text>
          </View>
        </Pressable>
        <Picker
          mode='dialog'
          style={styles.rangePicker}
          itemStyle={styles.pickerItem}
          selectedValue={to}
          onValueChange={(itemValue) => {
            if (itemValue > from) {
              setTo(itemValue);
            }
          }}
        >
          {[...Array(playersLength)].map((_e, i) => (
            <Picker.Item label={i.toString()} value={i} key={i} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  block: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {},
  grid: {
    flexDirection: 'row',
  },
  button: {
    padding: 20,
  },
  picker: {
    width: 200,
    height: 44,
    backgroundColor: '#FFF0E0',
  },
  rangePicker: {
    width: 50,
    height: 44,
    backgroundColor: '#FFF0E0',
  },
  pickerView: {
    height: 400,
    flexDirection: 'row',
  },
  pickerItem: {
    height: 44,
    color: 'red',
  },
});
