import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.innerBox}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  innerBox: {
    width: 20,
    height: 20,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('App', () => App);

