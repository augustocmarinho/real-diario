import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {LineChart,YAxis,Grid } from 'react-native-svg-charts'

import axios from 'axios';
import {baseUrl} from '../constants'

const MoneyInformsScreen = (props) => {
   
    const [data, setData] = useState({bid:[],ask:[],pctChange:[]});
    const [serverStatus, setServer] = useState(true);

    useEffect(() => {
      const fetchData = async () =>{
        try {
          await axios.get(`${baseUrl}money/period/${props.route.params.val}`).then((response) => {
            setData(response.data)
            setServer(true)
          })
        } catch (error) {
          setServer(false)
        }
      }

      fetchData();
    }, []);

    const contentInset = { top: 20, bottom: 20 }
    return (
      <ScrollView style={{padding:20,paddingTop:0}} >

        <Text style={styles.title} > {data.name} </Text>
        <Text style={styles.subTitle} > Variação no periodo de 15 dias </Text>

        <Text style={styles.titleGraph} >Valor de Compra:</Text>
        <View style={{ height: 200, flexDirection: 'row' }}>
          <YAxis
              data={data.bid}
              contentInset={contentInset}
              svg={{
                  fill: 'grey',
                  fontSize: 10,
              }}
              numberOfTicks={5}
              formatLabel={(value) => `${value}`}
          />

          <LineChart
            style={{ flex: 1, marginLeft: 16 }}
            data={data.bid}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
          >
              <Grid />
          </LineChart>
        </View>

        <Text style={styles.titleGraph}>Valor de Venda:</Text>
        <View style={{ height: 200, flexDirection: 'row' }}>
          <YAxis
              data={data.ask}
              contentInset={contentInset}
              svg={{
                  fill: 'grey',
                  fontSize: 10,
              }}
              numberOfTicks={5}
              formatLabel={(value) => `${value}`}
          />

          <LineChart
            style={{ flex: 1, marginLeft: 16 }}
            data={data.ask}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
          >
              <Grid />
          </LineChart>
        </View>

        <Text style={styles.titleGraph}>Porcentagem de Variação:</Text>
        <View style={{ height: 200, flexDirection: 'row',marginBottom:50 }}>
          <YAxis
              data={data.pctChange}
              contentInset={contentInset}
              svg={{
                  fill: 'grey',
                  fontSize: 10,
              }}
              numberOfTicks={5}
              formatLabel={(value) => `${value}`}
          />

          <LineChart
            style={{ flex: 1, marginLeft: 16 }}
            data={data.pctChange}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
          >
              <Grid />
          </LineChart>
        </View>

      </ScrollView>
    )
}

const styles = StyleSheet.create({
  title:{
    textAlign:'center',
    marginTop:18,
    fontSize:18,
    fontWeight:'bold'
  },
  subTitle:{
    textAlign:'center',
    marginBottom:18,
    fontSize:12,
    fontWeight:'bold'
  },
  titleGraph:{
    fontWeight:'bold',
    marginBottom:10,
    marginTop:30,
  }
});

export default MoneyInformsScreen;
