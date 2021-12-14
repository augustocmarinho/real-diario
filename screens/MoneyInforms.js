import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import Moment from 'react-moment';

const { width } = Dimensions.get('screen');

import axios from 'axios';
import {baseUrl} from '../constants'

const MoneyInformsScreen = (props) => {

  const [data, setData] = useState([]);
  const [serverStatus, setServer] = useState(true);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        await axios.get(`${baseUrl}money/show/${props.route.params.val}`).then((response) => {
          setData(response.data[0])
          setServer(true)
        })
      } catch (error) {
        setServer(false)
      }
    }

    fetchData();
  }, []);

 
  return serverStatus ? avaliable(data,props) : notAvaliable()
}

const  avaliable= (dataList,props) => {
  return(
    <View style={{padding:10}} >
      <Text style={styles.title} > {dataList.name} </Text>
      <Moment format='D/M/Y - hh:mm' locale="br" element={Text} style={styles.date}>
        {dataList.create_date}
      </Moment>
      <Text style={styles.date} > Ultima data cotada </Text>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.cell}>
            <Text>Compra</Text>
          </View>
          <View style={{...styles.cell,alignItems: 'center'}}>
            <Text>{dataList.bid}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.cell}>
            <Text>Venda</Text>
          </View>
          <View style={{...styles.cell,alignItems: 'center'}}>
            <Text>{dataList.ask}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.cell}>
            <Text>Variação</Text>
          </View>
          <View style={{...styles.cell,alignItems: 'center'}}>
            <Text>{dataList.varBid}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.cell}>
            <Text>Porcentagem de Variação</Text>
          </View>
          <View style={{...styles.cell,alignItems: 'center'}}>
            <Text>{dataList.pctChange}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.cell}>
            <Text>Máximo</Text>
          </View>
          <View style={{...styles.cell,alignItems: 'center'}}>
            <Text>{dataList.high}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.cell}>
            <Text>Mínimo</Text>
          </View>
          <View style={{...styles.cell,alignItems: 'center'}}>
            <Text>{dataList.low}</Text>
          </View>
        </View>
      </View>

      <Button
        onPress={() => props.navigation.navigate('Gráfico da Moeda',{val: props.route.params.val})}
        title="Visualizar Gráfico"
        color="#1DB954"
      />

    </View>
  );
}

const notAvaliable= ()=> {
  return (
    <View style={{padding:10}} >
      <Text style={styles.title} > Sentimos muito, mas essa moeda não está disponível no momento, ou o servidor se encontra instavel. </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    textAlign:'center',
    marginTop:18,
    fontSize:18,
    fontWeight:'bold'
  },
  date:{
    textAlign:'center',
    fontSize:12,
    fontWeight:'bold'
  },
  table:{
    marginTop:25,
    marginBottom:25
  },
  tableRow:{
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  cell:{
    display:'flex',
    width:(width /2) -10,
    borderColor: 'gray',
    borderBottomWidth: 1,
    padding:10
  }
});

export default MoneyInformsScreen;
