import * as React from 'react';
import { View, Text } from 'react-native';

import MonoHeader from './components/MonoHeader'
import Page from './components/Page'

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <MonoHeader />
        {/* <WelcomeScreen /> */}
    
      </View>
      <View style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <Page/>
      </View>

    </>
  );
}