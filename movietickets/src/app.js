// import React, { Component } from 'react';

// import{
//     Navigator,
// } from 'react-native';
// import Movies from './Movies';
// import default from '../../MovieTicketsBackend/router';

// const RouteMapper = (route, navigator)=> {
//     if (route.name === 'movies'){
//         return <Movies navigator={navigator}/>
//     }
// };

// export default class App extends Component {
//     render() {
//         return (
//             <Navigator

//             initialRouter={{name: 'movies'}}

//             configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
//             // Pass a route mapper functions
//             renderScene={RouteMapper}
//           />
//         );
//     }
// }