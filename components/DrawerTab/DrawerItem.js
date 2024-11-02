import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';


export default function DrawerItem(props) {
  const { onNavigate, label, SvgComponent } = props; 
  return (
    <TouchableOpacity style={styles.drawerItem} onPress={()=> onNavigate}>
      <SvgComponent   />
      <Text style={styles.drawerItemText}>{label}</Text> 
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({


  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  drawerItemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
