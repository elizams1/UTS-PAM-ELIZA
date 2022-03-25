import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logoPlace:{
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 20,      
  },
  logo:{
    width: 155,
    height: 55,    
  },
  card: {
    marginHorizontal: 20,
    backgroundColor:"#fff",
    padding: 20,
    borderRadius: 10, 
  },
  textBasic1:{
    fontFamily: "Ubuntu-Medium",
    fontSize: 16,  
    marginBottom: 20, 
    color: '#283593', 
  },
  textBasic:{
    fontFamily: "Ubuntu-Medium",
    fontSize: 16, 
    color: '#283593',
  },
  subCard: {
    borderColor: "#283593",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5, 
    marginBottom: 20,   
  },
  rute:{
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  jadwal:{
    marginBottom: 10,
  },
  textTittle: {
    fontFamily: "Ubuntu-Medium",
    fontSize: 14, 
    color: '#283593',
  },
  textIsi: {
    fontFamily: "Ubuntu-Light",
    fontSize: 14, 
    color: '#283593',
  },
  layanan:{
    marginBottom:20,
  },
  harga:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  line:{
    backgroundColor: "#283593",
    height:2,
    marginBottom: 20,
  },
  buttonBack: {    
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#283593",
  },
  buttonCont:{
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#283593"
  },
  buttonText1:{
    fontFamily: "Ubuntu-Medium",
    fontSize: 16, 
    color: '#ffff',
  },
});
export default styles;