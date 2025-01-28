import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Linking,
  TouchableOpacity,
} from 'react-native';

export default function NewsPage() {
  const newsData = [
    {
      id: '1',
      date: 'January 10, 2025',
      title: 'Earthquake Risk and Thunderstorms',
      content:
        'Reports indicate a risk of earthquakes and severe thunderstorms in various regions. For more details, visit the full report on YouTube.',
      link: 'https://youtu.be/mIJhU5goZks?si=qapNeA6D5yoi_Lxh',
    },
    {
      id: '2',
      date: 'January 10, 2025',
      title: 'Wildfire in Los Angeles',
      content:
        'A wildfire in Los Angeles has claimed at least 10 lives. Authorities fear that strong winds might worsen the situation. The wildfire has caused extensive damage across a large area.',
    },
    {
      id: '3',
      date: 'January 10, 2025',
      title: 'Social Program Restrictions in Arsi Zone',
      content:
        'Restrictions have been announced on social programs in districts of Arsi Zone, including Zuway Dugda, Robe Dida, Shirka, and Munessa. In Munessa, wedding programs have been halted by government forces.',
    },
    {
      id: '4',
      date: 'January 10, 2025',
      title: 'Additional Earthquake and Fire Reports',
      content:
        'Updates on the earthquake risks and Los Angeles fire incidents are available. These natural disasters have led to significant challenges across affected regions.',
      link: 'https://youtu.be/s9Je98bBBTg?si=0v_Kv3TVtMG-pbmm',
    },
  ];

  const openLink = (url) => {
    try {
      Linking.openURL(url);
    } catch (error) {
      console.error('Failed to open URL:', url, error);
    }
  };

  const renderNewsItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.newsDate}>{item.date}</Text>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsContent}>{item.content}</Text>
      {item.link && (
        <TouchableOpacity onPress={() => openLink(item.link)}>
          <Text style={styles.link}>Read More</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.newsContent}
        ListHeaderComponent={
          <>
            <Text style={styles.pageTitle}>Latest News in Oromia</Text>
            <Text style={styles.subtitle}>
              Stay updated with the most recent developments.
            </Text>
          </>
        }
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No news available at the moment.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  newsContent: {
    padding: 16,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: '#555',
  },
  newsItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  newsDate: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#999',
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsContent: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
  },
  link: {
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});
