import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

const LearnPage = () => {
  const flashcards = [
    { word: 'Nagaa', translation: 'Peace' },
    { word: 'Galata', translation: 'Thanks' },
    { word: 'Abbaa', translation: 'Father' },
    { word: 'Haadha', translation: 'Mother' },
    { word: 'Obboleessa', translation: 'Brother' },
    { word: 'Obboleettii', translation: 'Sister' },
    { word: 'Odeeffannoo', translation: 'Information' },
    { word: 'Hojii', translation: 'Work' },
    { word: 'Bara', translation: 'Year' },
    { word: 'Eenyummaa', translation: 'Identity' },
    { word: 'Jaalala', translation: 'Love' },
    { word: 'Simboo', translation: 'Gift' },
    { word: 'Mana', translation: 'House' },
    { word: 'Barumsa', translation: 'Education' },
    { word: 'Amala', translation: 'Character' },
    { word: 'Aramaa', translation: 'Wait' },
    { word: 'Eebbifamaa', translation: 'Blessed' },
    { word: 'Dubbii', translation: 'Speech' },
    { word: 'Beekumsa', translation: 'Knowledge' },
    { word: 'Gooftaa', translation: 'Lord' },
    { word: 'Bishaan', translation: 'Water' },
    { word: 'Qilleensa', translation: 'Air' },
    { word: 'Adii', translation: 'White' },
    { word: 'Diimaa', translation: 'Red' },
    { word: 'Magaala', translation: 'City' },
    { word: 'Lafti', translation: 'Earth' },
    { word: 'Lafa', translation: 'Land' },
    { word: 'Hiriyaa', translation: 'Friend' },
    { word: 'Fardi', translation: 'Horse' },
    { word: 'Gaari', translation: 'Good' },
    { word: 'Badii', translation: 'Bad' },
    { word: 'Alangee', translation: 'Stick' },
    { word: 'Goota', translation: 'Hero' },
    { word: 'Damma', translation: 'Honey' },
    { word: 'Qabeenya', translation: 'Wealth' },
    { word: 'Biyya', translation: 'Country' },
    { word: 'Marii', translation: 'Discussion' },
    { word: 'Qaama', translation: 'Body' },
    { word: 'Yeroo', translation: 'Time' },
    { word: 'Fiiguu', translation: 'Run' },
    { word: 'Nyata', translation: 'Food' },
    { word: 'Osoo', translation: 'While' },
    { word: 'Kaayyoo', translation: 'Goal' },
    { word: 'Baraarsa', translation: 'Salvation' },
    { word: 'Eenyuu', translation: 'Who' },
    { word: 'Maal', translation: 'What' },
    { word: 'Biyya', translation: 'Country' },
    { word: 'Deemuu', translation: 'Go' },
    { word: 'Dhufuu', translation: 'Come' },
    { word: 'Gosa', translation: 'Type' },
    { word: 'Dhuga', translation: 'Truth' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    setCurrentIndex((currentIndex + 1) % flashcards.length);
    setIsFlipped(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Learn</Text>
      <TouchableOpacity style={styles.card} onPress={flipCard}>
        <Text style={styles.cardText}>
          {isFlipped
            ? flashcards[currentIndex].translation
            : flashcards[currentIndex].word}
        </Text>
      </TouchableOpacity>
      <Button title="Next" onPress={nextCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '80%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LearnPage;
