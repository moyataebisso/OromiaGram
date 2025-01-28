import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

export default function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Dark Mode Setting */}
      <View style={styles.setting}>
        <Text style={styles.settingText}>Enable Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
        />
      </View>

      {/* Notifications Setting */}
      <View style={styles.setting}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(value) => setNotificationsEnabled(value)}
        />
      </View>

      {/* Reset Preferences Button */}
      <TouchableOpacity style={styles.resetButton} onPress={() => {
        setIsDarkMode(false);
        setNotificationsEnabled(true);
        alert('Preferences have been reset!');
      }}>
        <Text style={styles.resetButtonText}>Reset Preferences</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  settingText: {
    fontSize: 18,
  },
  resetButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
