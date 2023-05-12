import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      width: '100%', 
      top: 20,
      alignItems: 'center',
      justifyContent: 'center'

    },
    todosContainer: {
        flexDirection: 'column',
        height: 500,
        width: '100%',
        overflow: 'scroll',
        color: '#000',
    },
    addTodos: {
        height: 30,
        width: '100%',
        alignItems: 'center',
    },
    addBtn: {
        width: 80,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        height: 300,
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        top: '30%'
    },
    input: {
        height: 50,
        width: '80%',
        backgroundColor: 'lightgrey',
        marginBottom: 20,
        marginTop: 20
    }
  });
