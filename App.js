import React, {useState} from "react"
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Alert } from "react-native"



const currencyPerRupee = {
  DOLLAR: 0.013,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
  
};

const App = () =>{
  const [inputValue, setInputValue] = useState(0);
  const[resultValue, setResultValue] = useState(0);

  const buttonPressed = (currency) =>{
    if(!inputValue){
      <Alert>Please Enter The VAlue</Alert>
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency]
    setResultValue(result.toFixed(2));
  }

  return(
    <>
    <ScrollView backgroundColor="#1b262c" keyboardShouldPersistTaps="handled" contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
          
        </View>



        <View style={styles.inputContainer}>

          <TextInput style={styles.input} 
            keyboardType="numeric"
            placeholder="Enter Value"
            placeholderTextColor="#c1c1c1"
            value={inputValue}
            onChangeText={(inputValue)=>setInputValue(inputValue)}
        
          ></TextInput>
        </View>

        <View style = {styles.buttonContainer}> 
          {Object.keys(currencyPerRupee).map((currency)=>(
            <TouchableOpacity key={currency} style={styles.converterButton} onPress={()=>buttonPressed(currency)}>
              <Text style={styles.temp}>{currency}</Text>
            </TouchableOpacity>

          ))}
          
        </View>
      </SafeAreaView>
    </ScrollView>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,

  },
  resultContainer:{
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    borderColor: "#bbe1fa",
    borderWidth: 3,
    alignItems: "center",
    borderRadius: 5
  },
  resultValue:{
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold"
  },
  inputContainer:{
    height: 70,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#bbe1fa",
    borderRadius: 5,
  },
  input:{
    fontSize: 20,
    textAlign: "center",
    color: "#fff"
  },
  buttonContainer:{
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10
  },
  converterButton:{
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "33.3%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#bbe1fa",
    marginTop: 20,
    backgroundColor: "#0f4c75"
  },
  temp:{
    color: "#fff"
  }

})