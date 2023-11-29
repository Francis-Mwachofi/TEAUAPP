// RegisteredUnits.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RegisteredUnits = ({ registeredUnits }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registered Units</Text>
      <View style={styles.unitContainer}>
        {registeredUnits.map((unit) => (
          <Text key={unit} style={styles.unitText}>
            {unit}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  unitContainer: {
    alignItems: 'center',
  },
  unitText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default RegisteredUnits;
