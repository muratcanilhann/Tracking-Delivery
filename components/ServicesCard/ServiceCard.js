import { SvgUri } from 'react-native-svg';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


export default function ServiceCard({serviceDetail}){
    const {SvgComponent,title,subtitle} = serviceDetail;
    return(

        <View style={styles.serviceCard}>
          <SvgComponent  />
          <Text style={styles.serviceCardTitle}>{title}</Text>
          <Text style={styles.serviceCardSubtitle}>{subtitle}</Text>
        </View>

    )
}



const styles = StyleSheet.create({
  
    serviceCard: {

      backgroundColor: '#162140',
      width: 120,
      height: 140,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
    },
    serviceCardTitle: {
      color: "#FFFFFF",
      fontWeight: "bold",
      marginTop:3
    },
    serviceCardSubtitle: {
      color: "#FFFFFF",
    },
  });
  