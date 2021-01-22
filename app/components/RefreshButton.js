import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const RefreshButton = ({reload}) => {

  return(
    <TouchableOpacity style={styles.container} onPress={reload}>
      <Icon name="reload" size={40} color="#2a5b5e" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    left: 25,
  },
})

export default RefreshButton