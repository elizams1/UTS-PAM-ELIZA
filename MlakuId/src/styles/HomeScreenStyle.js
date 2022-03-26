import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
  container: {
    height: '85%',
    justifyContent: 'center',
  },
  logoPlace:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20, 
    marginTop: 50,      
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
  group: {
    marginBottom: 10,
  },
  search: {
    paddingHorizontal:5,    
    flexDirection: 'row',        
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {    
    marginBottom: 5,
    fontSize: 16,
    fontFamily: "Ubuntu-Medium",
    color: '#283593',
  },
  input: {
    fontSize: 14,
    fontFamily: "Ubuntu-Light",
    borderWidth: 0.8,
    borderColor: '#283593',
    borderRadius: 5,
    color: '#283593',
    marginHorizontal: 10,
    paddingVertical: 5,    
    paddingHorizontal: 10,
    height: 30,
    width: 230,
  },
  buttonSubmit: {
    alignItems: 'center',
    backgroundColor: '#283593',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Ubuntu-Medium",
    color: '#fff',
  },
  inputDateTime: {
    fontSize: 14,
    fontFamily: "Ubuntu-Light", 
    color: '#283593'   
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",    
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    width:180,
    marginBottom:5,    
  },
  buttonOpen: {
    backgroundColor: "#283593",
  },
  buttonClose: {
    backgroundColor: "#283593",
  },
  textStyle: {
    color: "white",
    fontFamily: "Ubuntu-Medium",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 40,
    textAlign: "center",
    fontFamily: "Ubuntu-Medium",
    fontSize: 16,
    color: '#283593'
  }
});

export default styles;