import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const PosaVasoImg = ({imgIndex}) => {

    const pathArray=[require("../assets/posaVasoRojo.jpg"),require("../assets/posaVasoAzul.jpg"),require("../assets/posaVasoVerde.jpg")]
    console.log(imgIndex)         
    return (
        <View >
            <Image style={styles.posaVasoStyle} source={pathArray[imgIndex]}/>
        </View>
    );
}


const styles = StyleSheet.create({
    posaVasoStyle: {
      width:350,
      height:350,
    },
});

export default PosaVasoImg;