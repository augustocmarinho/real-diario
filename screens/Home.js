import React from 'react';
import { StyleSheet,Dimensions, Text, View, ScrollView, Image,ImageBackground,TextInput } from 'react-native';
import List from '../components/List'

const { width,height } = Dimensions.get('screen');
import {Images} from '../constants'

import  moedas  from '../constants/json/avaliable.json'


const HomeScreen = (props) => {

    const [search, onChangeText] = React.useState("");

    const lapsList = moedas.avaliable.filter(function(item) {
      return (
          Object.values(item)[0]).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          .includes(search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        }).map((data,i) => {
          return ( <List key={i} name={Object.values(data)[0]} value={Object.keys(data)[0]} screen="PrayerList" navigation={props.navigation} ></List> )})

    return (
      <View style={{marginTop:-100}}>
        <ScrollView
          showsVerticalScrollIndicator={false}>

          <ImageBackground source={Images.bg_home} style={styles.backgroundHome} >
            <Text style={styles.firstTitle}> Olá Investidor! </Text>
            <Image style={styles.image} source={Images.hands_coin} />
          </ImageBackground>

          <View style={styles.body}>

            <Text style={styles.title}> Confira as cotações dispiníveis para você </Text>

            <View style={styles.list}>

            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={search}
              placeholder="Pesquisar"
            />
              {lapsList}
            </View>

          </View>

        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  firstTitle:{
    marginLeft: 10,
    marginTop: 140,
    position:'absolute',
    zIndex:10,
    color: '#fff',
    fontWeight:'bold',
    fontSize:20
  },
  input:{
    borderColor:'gray',
    borderWidth:1,
    height:50,
    backgroundColor:'#fff',
    borderRadius:15,
    width:'100%',
    marginBottom:30,
    paddingLeft:15,
    elevation:5
  },
  body:{
    backgroundColor:'#F8F9FE',
    borderRadius:25,
    marginTop:-25,
  },
  backgroundHome: {
    width: width,
    height: height /1.5,
    paddingBottom: 0,
    paddingTop:100,
    resizeMode:'cover',
  },
  list: {
    padding:15,
  },
  title:{
    marginTop:25,
    marginBottom:15,
    fontSize:25,
    textAlign:'center',
    fontWeight:'bold',
    fontFamily: 'Roboto'
  },
  image:{
    marginTop:30,
    width: width,
    height:390,
    resizeMode:'stretch',
  }
});

export default HomeScreen;