import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View,SafeAreaView, TextInput,TouchableOpacity,Image} from 'react-native';
import DeliveryCar from "../assets/SVG/Car.svg";

import { LeftArrow,NextSvg } from "../assets/SVG/index.js";


import ActivityCard from '../components/ActivityCard/ActivityCard';

export default function Tracking() {

  const activityCardInformations = [
    {
      activityPlace: "Istanbul",
      processText:"In process-recipient city",
      activityTime:"11.45PM",
      ActivitySvg: DeliveryCar,
    },
    
  
  ];



  return (
    <SafeAreaView style={styles.container}>

<View style={{flexDirection:"row", padding:30,
        justifyContent:"space-between",
       
      }}>
    
     <LeftArrow/>
   

      <View style={{backgroundColor:"gray",width:30,height:30
        ,borderRadius:50
      }}>
      

      </View>
      </View>

      <View style={{paddingHorizontal:20}}>

      <Text style={{color:"#FFFFFF", fontWeight:"bold"}}>
      Tracking
      </Text>

      <View style={{width:'100%',backgroundColor:'#786DF5',height:200,
        borderRadius:10,marginTop:20,padding:20,justifyContent:"space-between"
      }}>

        <Text style={{color:'white',fontWeight:"bold"}}>Eyüp,İstanbul</Text>
        <Text style={{color:'white',fontWeight:"bold"}}>No, 24123123</Text>

        <View style={{backgroundColor:"#5F77F5",width:'100%',height:40
        ,borderRadius:5, justifyContent:"center",alignItems:"center",
      flexDirection:"row",gap:20
      }}>
      <Text style={{color:"#FFFFFF",fontWeight:"bold",fontSize:20}}>
        -3.50 USD
        </Text>
        <Text style={{color:"#FFFFFF"}}>Our free</Text>
        

      </View>

      <View>
        <Text style={{color:'#FFFFFF',fontSize:20,fontWeight:'bold'}}>Istanbul,Turkey</Text>
        <Text style={{color:'#FFFFFF'}}>Parcel 25kg</Text>
      </View>


      </View>


      </View>

      <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}> 
        <Text style={{color:'#FFFFFF',fontWeight:"bold"}}>History</Text>
        <TouchableOpacity style={{flexDirection:"row",gap:10}}>
          <Text style={{color:"#C8482C",fontWeight:"bold"}}>Details</Text>
          <View style={{width:20,height:20}}>
          <NextSvg/>
          </View>

        </TouchableOpacity>

      
      </View>



   
      {activityCardInformations.map((item,index) => {
        return(
          <ActivityCard key={index} activity={item} />
        )
      })}
      

    
     

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#071333',
    width:'100%',
   
    
  }

});
