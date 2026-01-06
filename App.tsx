import { StyleSheet, View } from 'react-native';
import BaseStack from './src/navigation/BaseStack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <BaseStack />
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
