import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {    
    justifyContent: 'center',
    height: '90%',
  },
  logoPlace:{
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20, 
  marginTop: 100,     
  },
  logo:{
    width: 155,
    height: 55,    
  },
  title: {    
    marginBottom: 5,
    fontSize: 20,
    fontFamily: "Ubuntu-Medium",
    color: '#283593',
    textAlign: "center"
  },
  card: {
    marginHorizontal: 20,
    backgroundColor:"#fff",
    padding: 10,
    borderRadius: 10, 
    marginVertical: 20,
  },
  subCard:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  rute:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  jadwal:{
    marginBottom: 10,
  },
  textBasic:{
    fontFamily: "Ubuntu-Medium",
    fontSize: 16, 
    color: '#283593',
  },
  textBasic1:{
    fontFamily: "Ubuntu-Medium",
    fontSize: 14,       
    color: '#283593', 
  },
  textIsi: {
    fontFamily: "Ubuntu-Light",
    fontSize: 14, 
    color: '#283593',    
  },
  textIsi2: {
    fontFamily: "Ubuntu-Light",
    fontSize: 14, 
    color: '#283593', 
    textAlign: "right",   
  },
})

export default styles;