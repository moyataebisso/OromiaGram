import { Image, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const links: { href: '/learn' | '/history' | '/map' | '/news' | '/settings'; img: any; label: string }[] = [
    { href: '/learn', img: require('@/assets/images/book.png'), label: 'Learn' },
    { href: '/history', img: require('@/assets/images/letter.png'), label: 'History' },
    { href: '/map', img: require('@/assets/images/mappp.png'), label: 'Map' },
    { href: '/news', img: require('@/assets/images/news.png'), label: 'News' },
    { href: '/settings', img: require('@/assets/images/web-page.png'), label: 'Settings' },
  ];

  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#E0F7FA', '#B2EBF2']}
        style={styles.backgroundGradient}
      />

      {/* Parallax Scroll View */}
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#B2EBF2', dark: '#A1CEDC' }}
        headerImage={
          <Image
            source={require('@/assets/images/home-page.png')}
            style={styles.reactLogo}
          />
        }
      >
        {/* Title Section */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome to the Oromia App</ThemedText>
        </ThemedView>

        {/* Navigation Links */}
        <View style={styles.bottomSection}>
          <View style={styles.pageLinksContainer}>
            {links.map((link, index) => (
              <View key={index} style={styles.linkContainer}>
                <Link href={link.href} style={styles.link}>
                  <Image source={link.img} style={styles.icon} />
                  <ThemedText style={styles.text}>{link.label}</ThemedText>
                </Link>
              </View>
            ))}
          </View>
        </View>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingTop: 20, // Adjusted for better positioning
  },
  reactLogo: {
    height: 150, // Reduced height
    width: '80%', // Reduced width
    resizeMode: 'contain', // Maintains proportional scaling
    alignSelf: 'center', // Centers the image
    marginTop: 20, // Adds spacing above the image
  },
  bottomSection: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  pageLinksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  linkContainer: {
    alignItems: 'center',
    marginBottom: 10,
    width: '25%',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  link: {
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333333',
  },
});
