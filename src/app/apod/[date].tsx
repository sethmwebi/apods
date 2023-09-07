import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Apod } from 'types';
import { fetchApod } from 'api/apods';
import ApodListItem from '@comp/ApodListItem';

const ApodDetails = () => {
  const { date } = useLocalSearchParams();
  const [apod, setApod] = useState<Apod>(null);

  useEffect(() => {
    fetchApod(date).then(setApod);
  }, [date]);

  if (!apod) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <ApodListItem apod={apod} />
      <Text
        style={{
          padding: 15,
          backgroundColor: 'white',
          lineHeight: 22,
          fontSize: 16,
          maxWidth: 500,
          width: '100%',
          alignSelf: 'center',
        }}
      >
        {apod.explanation}
      </Text>
    </ScrollView>
  );
};

export default ApodDetails;

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  console.log(process.cwd());

  return [
    { date: '2023-09-05' },
    { date: '2023-09-06' },
    { date: '2023-09-07' },
  ];
}
