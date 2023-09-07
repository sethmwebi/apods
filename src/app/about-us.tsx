import { View, Text } from 'react-native';
import React from 'react';
import Head from 'expo-router/head';

const AboutUs = () => {
  return (
    <View>
      <Head>
        <title>About Us</title>
        <meta name='description' content='This is about us' />
      </Head>
      <Text>AboutUs</Text>
    </View>
  );
};

export default AboutUs;
