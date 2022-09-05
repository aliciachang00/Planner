import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firesb'
import { useNavigation } from '@react-navigation/core'

const Home_Screen = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })

        .catch(error=> alert(error.message))
    }

  return (
    <View style = {styles.container}>
      <Text style = {styles.welcomeText}>Welcome!</Text>
      <Text style = {styles.subText}> ~ {auth.currentUser?.email} ~</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Calendar')}
        style={styles.button}
      >
        <Text style = {styles.buttonText}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Todotasks')}
        style={styles.button}
      >
        <Text style = {styles.buttonText}>Today's Tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSignOut}
        // style={styles.button}
        style={styles.button}
      >
        <Text style = {styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home_Screen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#8496ba",

    },
    welcomeText: {
        color: '#68341e',
        fontWeight: '700',
        fontSize: 35,
    },
    subText: {
      color: '#68341e',
      fontWeight: '700',
      fontSize: 16,
  },
    button: {
        backgroundColor: '#8a4528',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})