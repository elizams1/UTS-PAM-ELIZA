import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
  container: {    
    justifyContent: 'center',
    height: '85%',
  },
  logoPlace:{
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20, 
  marginTop: 40,     
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
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#283593",
    marginTop: 10,
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
  input: {
    fontSize: 14,
    fontFamily: "Ubuntu-Light",
    borderWidth: 0.8,
    borderColor: '#283593',
    borderRadius: 5,
    color: '#283593',    
    paddingVertical: 5,    
    paddingHorizontal: 10,
    height: 30,
    width: 325,
    marginTop:3,        
  },
  form:{
      marginBottom: 10,
  },
  textTittleForm:{
    fontFamily: "Ubuntu-Medium",
    fontSize: 16, 
    color: '#283593',
    marginBottom: 10,
  },
  textButton:{
    fontFamily: "Ubuntu-Medium",
    fontSize: 16, 
    color: '#ffff',
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",    
  },
  modalView: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#283593",
    elevation: 5,
    borderRadius: 10,        
    padding: 20,
    width: "80%",
      
  },
  modalText:{
    fontFamily: "Ubuntu-Medium",
    fontSize: 16, 
    color: '#283593',
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginBottom:5,
    justifyContent: "center",
    alignItems: "center",        
  },
  buttonOpen: {
    backgroundColor: "#fff",
  },
  buttonClose: {
    backgroundColor: "#283593",
  },
  buttonModal: {
    fontFamily: "Ubuntu-Medium",
    fontSize: 16, 
    color: '#ffff',    
    
  },

});
export default styles;