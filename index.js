/**
* @format
*/
import React from 'react'
import {AppRegistry,LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './store'
import { Provider } from 'react-redux'
// import { StackNavigator } from "react-native";

const MainFunc =()=>{
   return(

       <Provider store={store}>
       <App />
   </Provider>
       // return null;
       )
}


AppRegistry.registerComponent(appName, () => MainFunc);
LogBox.ignoreAllLogs()
// console.disableYellowBox = true;