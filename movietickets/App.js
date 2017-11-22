// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';
import Movies from './src/Movies';

const RouteMapper = (route, navigator) => {
  if (route.name === 'movies') {
    return <Movies navigator={navigator} />;
  }
};

export default class App extends Component {
  render() {
    return (
      <Navigator
        // Default to movies route
        initialRoute={{ name: 'movies' }}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    );
  }
}
