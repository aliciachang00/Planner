import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React from 'react'
import Colors from './Colors'
import TodoModal from './TodoModal'

export default class extends React.Component {

  state = {
    showListVisible: false
  }

  toggleListModal (){
    this.setState({showListVisible: !this.state.showListVisible})
  }
  
  render() {
    const list = this.props.list;

    const completedNum = list.todos.filter(todo => todo.completed).length;
    const remainingNum = list.todos.length - completedNum;

    return (
        <View>

          <Modal
                animationType="slide"
                visible={this.state.showListVisible}
                onRequestClose={() => this.toggleListModal()}
          >
                <TodoModal
                    list = {list}
                    closeModal={() => this.toggleListModal()}
                    updateList={this.props.updateList}
                />
          </Modal>

          <TouchableOpacity
                style={[styles.listContainer, {backgroundColor: list.color}]}
                onPress={() => this.toggleListModal()}
            >
                <Text style={styles.listTitle} numberOfLines={1}>
                    {list.name}
                </Text>
    
                <View>
                    <View style = {{alignItems: "center"}}>
                        <Text style={styles.count}>{completedNum}</Text>
                        <Text style={styles.subtitle}>Completed</Text>
                    </View>
                    <View style = {{alignItems: "center"}}>
                        <Text style={styles.count}>{remainingNum}</Text>
                        <Text style={styles.subtitle}>Tasks Left</Text>
                    </View>
                </View>
          </TouchableOpacity>  
        </View>
        
      );

  }
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.white,
        marginBottom: 18,
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: Colors.white,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "700",
        color: Colors.white,
    }
})