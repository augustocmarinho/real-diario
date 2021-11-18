import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import { DefaultContext } from '../context/DefaultContext';

class ComumList extends React.Component {
  renderList = () => {

    return (
      <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Informações da Moeda',{val: this.props.value})}>
        <View style={styles.list_color} ></View>

        <View style={styles.text} >
          <Text style={styles.title} >{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
        this.renderList()
    );
  }
}

const styles = StyleSheet.create({
  item:{
    flexDirection: 'row',
    backgroundColor: "#fff",
    color: "#fff",
    width:"100%",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 7, 
    padding: 10
  },
  list_color: {
    width: 7,
    height: '100%',
    borderRadius: 10,
    marginRight: 10,
    backgroundColor:'green'
  },
  text: {
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  },
  description:{
    fontSize:12,
    marginBottom:5,
  },

});

ComumList.contextType = DefaultContext;

export default ComumList;
