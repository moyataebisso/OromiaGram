import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';

const HistoryPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Oromo People - History and Culture</Text>

      <Text style={styles.sectionHeader}>Origins and Nomenclature</Text>
      <Text style={styles.text}>
        The Oromo people are a Cushitic ethnic group native to Ethiopia and parts of Northern Kenya. 
        They speak Afaan Oromoo, part of the Afroasiatic language family. The Oromo are one of the 
        largest ethnic groups in Ethiopia, constituting approximately 35.8% of the population. 
        Historically, the Oromo were semi-pastoralist nomadic people who expanded their territories significantly.
      </Text>

      <Text style={styles.sectionHeader}>The Gadaa System</Text>
      <Text style={styles.text}>
        The Gadaa system is an egalitarian socio-political system of governance unique to the Oromo 
        people. Leaders are elected every eight years, and the system organizes the community’s political, 
        social, and economic life. It is considered a UNESCO-recognized intangible heritage.
      </Text>

      <Text style={styles.sectionHeader}>Historical Expansion</Text>
      <Text style={styles.text}>
        During the 16th century, the Oromo expansion, often called the "Great Oromo Migrations," 
        reshaped the demographics of Ethiopia. They established kingdoms in the Gibe regions and 
        played significant roles in the political landscape of the Ethiopian Empire. The Oromo 
        integrated into the empire, forming powerful dynasties such as the Yejju dynasty.
      </Text>

      <Text style={styles.sectionHeader}>Language</Text>
      <Text style={styles.text}>
        Afaan Oromoo, written using the Latin alphabet (Qubee), is the primary language of the Oromo 
        people. It is the most widely spoken Cushitic language and one of the official languages of Ethiopia. 
        It is used in education, media, and administration in the Oromia region.
      </Text>

      <Text style={styles.sectionHeader}>Cuisine</Text>
      <Text style={styles.text}>
        Oromo cuisine features diverse dishes, including Biddena (pancake-like bread), Maarqaa 
        (wheat porridge with honey and milk), and Chechebsaa (stir-fried Injera). Coffee cultivation 
        is believed to have originated with the Oromo, who recognize its energizing effects.
      </Text>

      <Text style={styles.sectionHeader}>Religion</Text>
      <Text style={styles.text}>
        The Oromo practice a mix of Islam (55–60%), Christianity (40–45%), and their traditional religion, 
        Waaqeffanna. The traditional religion venerates Waaqa, the supreme being, and emphasizes harmony with nature.
      </Text>

      <Text style={styles.sectionHeader}>Contemporary Issues</Text>
      <Text style={styles.text}>
        In recent history, the Oromo people have faced political marginalization and human rights issues. 
        Protests and movements for self-determination have been a recurring theme, with organizations 
        like the Oromo Liberation Front (OLF) advocating for Oromo rights and independence.
      </Text>

      <Text style={styles.citation}>
        Source: Wikipedia -{" "}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Oromo_people')}
        >
          Oromo People
        </Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#4A4A4A',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#555',
  },
  citation: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 20,
    color: '#888',
    textAlign: 'center',
  },
  link: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});

export default HistoryPage;
