import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const BottomNavBar = () => {
  const router = useRouter();

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Image source={require('@/assets/images/home-page.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/learn')}>
        <Image source={require('@/assets/images/book.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/map')}>
        <Image source={require('@/assets/images/mappp.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/news')}>
        <Image source={require('@/assets/images/news.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/settings')}>
        <Image source={require('@/assets/images/web-page.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default BottomNavBar;
