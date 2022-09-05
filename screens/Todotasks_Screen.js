import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import Colors from './Colors'
import Todo_Data from './Todo_Data'
import TodoList from './TodoList'
import AddListModal from './AddListModal'
//import Fire from './Fire'

export default class Todotasks_Screen extends React.Component {
    
    state = {
        addTodoVisible: false,
        lists: Todo_Data,
        user: {}
    };

    // componentDidMount() {
    //     firebase = new Fire((error, user) => {
    //         if (error) {
    //             return alert("Something went wrong")
    //         }
    //     });
    // }

    toggleAddTodoModal = () => {
        this.setState({ addTodoVisible: !this.state.addTodoVisible });
    }

    renderList = list => {
        return <TodoList list={list} updateList={this.updateList} />
    }

    addList = list => {
        this.setState({lists: [...this.state.lists, {...list, id: this.state.lists.length + 1, todos: [] }]});
    };

    updateList = list => {
        this.setState({
            lists: this.state.lists.map(item => {
                return item.id === list.id ? list: item;
            })
        });
    };

    render() {
        return (
            <View style = {styles.container}>

                <Modal 
                    animationType="slide"
                    visible={this.state.addTodoVisible}
                    onRequestClose={() => this.toggleAddTodoModal()}
                >
                    <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList} />
                </Modal>

                <View style={{ flexDirection: "row"}}>
                    <View style={styles.divider} /> 
                    <Text style={styles.title}>
                        Tasks <Text style={{fontWeight: "300", color: "#68341e"}}>for today</Text>
                    </Text>
                    <View style={styles.divider} />
                </View>

                <View style={{marginVertical: 48}}>
                    <TouchableOpacity style={styles.addListblock} onPress={() => this.toggleAddTodoModal()}>
                        <AntDesign name = "plus" size={16} color={"#68341e"} />
                    </TouchableOpacity>

                    <Text style={styles.addlist}>Add Activity</Text>
                </View>

                <View style={{height: 275, paddingLeft: 32}}>
                    <FlatList 
                        data={this.state.lists}
                        keyExtractor={item => item.name}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem = {({ item }) => this.renderList(item)}
                        keyboardShouldPersistTaps="always"
                    />
                </View>

            </View>
            
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8496ba',
        alignItems: "center",
        justifyContent: "center",
    },
    divider: {
        backgroundColor: "#68341e",
        height: 1,
        flex: 1,
        alignSelf: "center",
    },
    title: {
        fontSize: 33,
        fontWeight: "800",
        color: Colors.black, 
        paddingHorizontal: 64,
    },
    addListblock: {
        borderWidth: 2,
        borderColor: "#68341e",
        borderRadius: 4,
        padding: 16,
        alignItems: "center",
        justifyContent: "center", 
    },
    addlist: {
        color: "#68341e",
        fontWeight: "600",
        fontSize: 14,
        marginTop: 8,
    },
})