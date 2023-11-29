// RegisterUnits.js
import React from 'react';
import { View, Text, Radio, StyleSheet } from 'react-native';

const RegisterUnits = () => {
  const [selectedUnit, setSelectedUnit] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Units</Text>
      <View style={styles.unitContainer}>
        <Radio
          value="unit1"
          status={selectedUnit === 'unit1' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedUnit('unit1')}
        />
        <Text style={styles.unitText}>Data Mining</Text>
      </View>
      <View style={styles.unitContainer}>
        <Radio
          value="unit1"
          status={selectedUnit === 'unit1' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedUnit('unit1')}
        />
        <Text style={styles.unitText}>Data Mining</Text>
      </View>
      <View style={styles.unitContainer}>
        <Radio
          value="unit1"
          status={selectedUnit === 'unit1' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedUnit('unit1')}
        />
        <Text style={styles.unitText}>Data Mining</Text>
      </View>
      <View style={styles.unitContainer}>
        <Radio
          value="unit1"
          status={selectedUnit === 'unit1' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedUnit('unit1')}
        />
        <Text style={styles.unitText}>Data Mining</Text>
      </View>
      <View style={styles.unitContainer}>
        <Radio
          value="unit1"
          status={selectedUnit === 'unit1' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedUnit('unit1')}
        />
        <Text style={styles.unitText}>Data Mining</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  unitText: {
    marginLeft: 10,
  },
});

export default RegisterUnits;
