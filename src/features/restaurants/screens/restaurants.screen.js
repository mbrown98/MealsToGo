import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

import { RestaurantInfo } from "../components/restaurant-info-component";

import { Searchbar } from "react-native-paper";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  search: { padding: 16 },
  list: { flex: 1, padding: 16, backgroundColor: "blue" },
});
