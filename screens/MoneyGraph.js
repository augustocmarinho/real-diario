import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { DefaultContext } from '../context/DefaultContext';
import {LineChart,YAxis,Grid } from 'react-native-svg-charts'

import Money from '../constants/Money'

class MoneyInformsScreen extends React.Component {
  render() {
    const info = typeof Money[this.props.route.params.val] !== 'undefined' ?  Money[this.props.route.params.val] : false

    const bid = []
    const ask = []
    const pctChange = []
    info.forEach(element => {
      bid.push(parseFloat(element['bid']))
      ask.push(parseFloat(element['ask']))
      pctChange.push(parseFloat(element['pctChange']))
    });


    const contentInset = { top: 20, bottom: 20 }

    return (
      <ScrollView style={{padding:20,paddingTop:0}} >
        
        <Text style={styles.title} > {info[0].name} </Text>
        <Text style={styles.subTitle} > Variação no periodo de 15 dias </Text>

        <Text style={styles.titleGraph} >Valor de Compra:</Text>
        <View style={{ height: 200, flexDirection: 'row' }}>
          <YAxis
              data={bid}
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
            data={bid}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
          >
              <Grid />
          </LineChart>
        </View>

        <Text style={styles.titleGraph}>Valor de Venda:</Text>
        <View style={{ height: 200, flexDirection: 'row' }}>
          <YAxis
              data={ask}
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
            data={ask}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
          >
              <Grid />
          </LineChart>
        </View>

        <Text style={styles.titleGraph}>Porcentagem de Variação:</Text>
        <View style={{ height: 200, flexDirection: 'row',marginBottom:50 }}>
          <YAxis
              data={pctChange}
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
            data={pctChange}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
          >
              <Grid />
          </LineChart>
        </View>

      </ScrollView>
    )
    
  }
}
MoneyInformsScreen.contextType = DefaultContext;

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
