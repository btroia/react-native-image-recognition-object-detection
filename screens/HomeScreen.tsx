import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Image Object Detection Demos</Text>
        </View>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            This app demonstrates several pre-trained deep convolutional neural
            network models to classify images and detect objects on mobile
            devices. It is developed using Expo/React Native, and works on both
            iOS and Android devices.
          </Text>

          <View style={styles.demoContainer}>
            <Text style={styles.demoText}>Demos:</Text>

            <Text style={styles.demoText}>
              <Text style={{ fontWeight: "bold" }}>Classify Image:</Text> image
              classification using TensorFlow.js w/ MobileNet model
            </Text>
            <Text style={styles.demoText}>
              <Text style={{ fontWeight: "bold" }}>Detect Objects:</Text>{" "}
              mutiple object detection using TensorFlow.js w/ COCO-SSD model
            </Text>
            <Text style={styles.demoText}>
              <Text style={{ fontWeight: "bold" }}>Food Detect:</Text> multiple
              food item detection using Clarifai Food model (remote API)
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  getStartedContainer: {
    marginTop: 30,
    alignItems: "center",
    marginHorizontal: 40,
  },
  codeHighlightContainer: {
    marginTop: 20,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    marginBottom: 20,
  },
  demoContainer: {
    alignItems: "flex-start",
  },
  demoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
