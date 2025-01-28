import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function CommunityPage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  const handlePost = () => {
    if (input.trim()) {
      setPosts((prevPosts) => [
        { id: Date.now().toString(), content: input },
        ...prevPosts,
      ]);
      setInput('');
    }
  };

  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <Text style={styles.postContent}>{item.content}</Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome to the Community Page</Text>
      <Text style={styles.subtitle}>
        Share your thoughts, photos, or videos with the community!
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write something..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.postList}
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={
        <Text style={styles.emptyMessage}>
          No posts yet. Be the first to share!
        </Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginRight: 8,
    backgroundColor: '#fff',
  },
  postButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postList: {
    paddingHorizontal: 16,
  },
  post: {
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
  postContent: {
    fontSize: 16,
    color: '#333',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 16,
  },
});
