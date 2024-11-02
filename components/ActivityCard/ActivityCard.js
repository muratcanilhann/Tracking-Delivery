import { StyleSheet, Text, View,SafeAreaView, TextInput,TouchableOpacity,Image} from 'react-native';


export default function ActivityCard({activity}){
    const { activityPlace, processText, ActivitySvg,activityTime } = activity;
    return(
        <View 
        id='histroyCard' style={{flexDirection:"row",justifyContent:"space-between",padding:20}}> 
          <ActivitySvg style={{color:'#FFFFFF',fontWeight:"bold"}}/>
          <View>
            <Text style={{color:'#FFFFFF'}}>{processText}</Text>
            <Text  style={{color:'#FFFFFF'}}>{activityPlace}</Text>
          </View>
            <Text style={{color:"white",fontSize:12,alignSelf:"flex-end"}}>{activityTime}</Text>
        </View>
    )
}