import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Adjusted `navigateTo` function to enforce strict typing and avoid the error
  const navigateTo = (path: '/news' | '/learn' | '/history' | '/map' | '/community' | '/settings') => {
    router.push(path);
  };

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="news" />
            <Stack.Screen name="learn" />
            <Stack.Screen name="history" />
            <Stack.Screen name="map" />
            <Stack.Screen name="community" />
            <Stack.Screen name="settings" />
          </Stack>
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => navigateTo('/news')} style={styles.navItem}>
            <Image source={require('../assets/images/news.png')} style={styles.icon} />
            <Text style={styles.navText}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('/learn')} style={styles.navItem}>
            <Image source={require('../assets/images/book.png')} style={styles.icon} />
            <Text style={styles.navText}>Learn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('/history')} style={styles.navItem}>
            <Image source={require('../assets/images/letter.png')} style={styles.icon} />
            <Text style={styles.navText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('/map')} style={styles.navItem}>
            <Image source={require('../assets/images/mappp.png')} style={styles.icon} />
            <Text style={styles.navText}>Map</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('/community')} style={styles.navItem}>
            <Image source={require('../assets/images/community.png')} style={styles.icon} />
            <Text style={styles.navText}>Community</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('/settings')} style={styles.navItem}>
            <Image source={require('../assets/images/web-page.png')} style={styles.icon} />
            <Text style={styles.navText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    height: 70,
  },
  navItem: {
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  navText: {
    fontSize: 12,
    color: '#333',
  },
});
