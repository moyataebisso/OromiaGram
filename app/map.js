import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default function MapPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map of Oromia</Text>
      <Text style={styles.description}>
        Below is a map showing the Oromia region. Explore its geography and landmarks!
      </Text>
      <Image
        source={require('@/assets/images/oromia-map.png')}
        style={styles.mapImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  mapImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});
