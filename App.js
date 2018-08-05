import React, { Component } from "react";
import { StatusBar, View, Platform } from "react-native";
import { Provider, connect } from "react-redux";
import { SwitchNavigator, StackNavigator } from 'react-navigation'; 
import { Drawer,Tabs, AuthStack } from "./src/Navigators";

class App extends Component {
  static navigationOptions = ({ navigation }) => {
    const auth = navigation.getParam('auth');
    console.log(auth)  

    return {};
  }

  render() {
    const navigation =this.props.navigation;
      return (
          <View style={{ flex: 1 }}>
            {Platform.OS === "ios" ? <Tabs /> : <Drawer />}
          </View>
    );
  }
}

export default SwitchNavigator(
  {
    App: App,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);