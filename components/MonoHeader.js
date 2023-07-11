import { View, Text } from 'react-native';

export default function MonoHeader() {
  return (
    <View style={{ backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          padding: 20,
          marginTop: 10,
          borderRadius: 8,
          textTransform:'uppercase',
          fontSize: 30,
          color: '#495E57',
          textAlign: 'left',
        }}>
        Bet of the Day
      </Text>
    </View>
  );
}
