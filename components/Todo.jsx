import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Checkbox } from 'native-base';

const Todo = ({item, handleToggle, isCompleted}) => {
    return(
        <View key={item.item.id} style={styles.todo}>
            {
                !isCompleted && 
                <Checkbox 
                    isChecked={item.item.completed} 
                    style={styles.checkbox} 
                    accessibilityLabel="check to complete the task"
                    onChange={() => handleToggle(item.item.id)}
                />
            }
            
            <Text style={styles.taskName}>{item.item.name}</Text>
        </View>
    );
}

export default Todo;

const styles = StyleSheet.create({
    todo: {
        padding: 10,
        flexDirection: 'row',
        marginTop: 10,
        width: '80%', 
        height: 50, 
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#B0E0E6',
        justifyContent: 'center'
      },
      checkbox: {
        justifyContent: 'flex-start'
      },
      taskName: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10
      },
});