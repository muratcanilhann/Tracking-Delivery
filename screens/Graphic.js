import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import LeftArrow from "../assets/SVG/arrow-left.svg";
import { useNavigation } from '@react-navigation/native';
import ChartColumn from '../components/ChartColumn/ChartColumn';
import chartValues from "../InfoJSON/chartData.json";

export default function Graphic() {
  const navigation = useNavigation();

  const [chartData, setChartData] =useState([]);
  
  useEffect(() => {

    setChartData(chartValues);
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow width={24} height={24} />
        </TouchableOpacity>
        <View style={styles.circle} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Analytics</Text>
      </View>

      <View style={styles.chartContainer}>
      {chartData.map((item,index) => {
        return <ChartColumn key={index} columnInfo={item}/>
      })}
  
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071333',
  },
  header: {
    flexDirection: "row",
    padding: 30,
    justifyContent: "space-between",
  },
  circle: {
    backgroundColor: "gray",
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  content: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  chartContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "flex-end",
    marginTop: 20,
    justifyContent: "space-evenly",
  },
  chartCol: {
    width: 50,
    alignItems: "center",
  },
  chartLabel: {
    color: "#FFFFFF",
    fontSize: 15,
    marginTop: 5,
  },
});
