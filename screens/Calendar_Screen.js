import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'

import { Calendar } from 'react-native-calendars';

const Calendar_Screen = () => {
  return (
    <>
      <Calendar 
        style={{
          borderWidth: 2,
          height: "70%",
          borderColor: '#68341e',
          backgroundColor: "#816c93"
        }}
        theme={
          {
            backgroundColor: "#68341e",
            calendarBackground: "#816c93",
            dayTextColor: "black",
            arrowColor: "#68341e",
            todayTextColor: "#68341e",
            
            // selectedDayBackgroundColor: "white",
            // selectedDayTextColor: "black"
            
          }
        }

        markingType="multi-dot"
      />
    </>
  )
}

export default Calendar_Screen

const styles = StyleSheet.create({})