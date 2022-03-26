import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
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
  },
  modal: {
    height: '100%',
    width: '100%',
    fontFamily: "Ubuntu-Medium",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    color: '#283593',
  },
});

export default styles;