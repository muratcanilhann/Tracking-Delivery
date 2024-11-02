import { StyleSheet, Text, View} from 'react-native';


export default function ChartColumn({columnInfo}){
    return(
        <View style={styles.chart}>
        <View style={{ width: 50, backgroundColor: '#FFFFFF', height:columnInfo.columnValue }} />
        <Text style={styles.chartLabel}>{columnInfo.ColName}</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    
    chartLabel: {
      color: "#FFFFFF",
      fontSize: 15,
      marginTop: 5,
    },
  });
  