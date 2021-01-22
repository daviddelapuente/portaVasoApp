import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react'
import { StyleSheet, View,Image } from 'react-native';
import PosaVasoImg from './app/components/PosaVasoImg';
import RefreshButton from './app/components/RefreshButton';

export default function App() {

  const path="./app/assets/posaVasoRojo.jpg"
  const [posaVasosIndex, setPosaVasosIndex] = useState({ value: 0 })


  const reload=()=>{
    setPosaVasosIndex({value:(posaVasosIndex.value+1)%3});
  }


  return (
    <View style={styles.container}>
      <PosaVasoImg imgIndex={posaVasosIndex.value}/>
      <RefreshButton reload={reload}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
