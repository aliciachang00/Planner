import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import {AntDesign} from '@expo/vector-icons';
import Colors from './Colors';
import Todo_Data from './Todo_Data';

export default class AddListModal extends React.Component {

  backgroundColors = ["#c076ad", "#a850af", "#5a53ac", "#59a1a6", "#4fb05a", "#d97e2d", "#de3b51" ];

  state = {
    name: "",
    color: this.backgroundColors[0]
  }

  createTodo = () => {
    const {name, color} = this.state

    const list = {name, color}

    this.props.addList(list);

    this.setState({name: ""})
    this.props.closeModal();
  }

  renderColors() {
    return this.backgroundColors.map(color => {
        return (
            <TouchableOpacity
                key = {color}
                style={[styles.colorSelect, {backgroundColor: color}]}
                onPress={() => this.setState({color})}
            />
        )
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style = {styles.container} behavior="padding">
        <TouchableOpacity style = {{position: "absolute", top: 64, right: 32}} onPress={this.props.closeModal}>
            <AntDesign name = "close" size={24} color={Colors.black} />
        </TouchableOpacity>

        <View style = {{ alignSelf: "stretch", marginHorizontal: 32 }}>
            <Text style = {styles.title}>Pick a color to add activity type:</Text>

            <TextInput
                style={styles.input}
                placeholder="Type of Activity?"
                onChangeText={text => this.setState({name: text})}
            />

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 12}}>{this.renderColors()}</View>

            <TouchableOpacity
                style={[styles.create, { backgroundColor: this.state.color }]}
                onPress={this.createTodo}
            >
                <Text style={{color: Colors.white, fontWeight: "600"}}>Add Activity</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a3bce5"
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#4e2717",
        alignSelf: "center",
        marginBottom: 16,
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#4e2717",
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18,

    },
    create: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4
    }
});
