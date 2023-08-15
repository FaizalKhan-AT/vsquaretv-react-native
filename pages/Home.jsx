import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ItemCard from "../components/Cards/ItemCard";
import { Links } from "../data";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Welcome to Vsquare TV</Text>
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {Links.map((link, idx) => (
            <ItemCard data={link} key={idx * idx} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    marginTop: 60,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    padding: 25,
    textAlign: "center",
  },
  cardsContainer: {
    marginVertical: 20,
    flexGrow: 1,
  },
});

export default Home;
