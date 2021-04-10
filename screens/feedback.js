import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Button, Input,Image} from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler';
import {db} from '../firebase';

const feedback = () => {

    let arr= [];
    const [feedback, setFeedback]= useState([]);
    const [pin, setPin] = useState("");
    
    let pin1 = 1725;

    const showFeedback = () => {
        db
        .collection('users')
        .get()
        .then(querySnapshot => {
          console.log('total users', querySnapshot.size);
          querySnapshot.forEach(documentSnapshot => {
            arr.push(documentSnapshot.data());
          
          });
          setFeedback(arr);
        });
       
    } 

    const pinCheck = () => {
        if(pin1 == pin){
            showFeedback();
        }
    }

   

    return (
        <View>
            
            <Input placeholder = "Pin" 
                    autoFocus 
                    type = 'text'
                    value= {pin}
                    onChangeText = {(pin) => setPin(pin)}
                    />
            
            <Button style ={styles.button} title = 'View Feedback Data' onPress=  {pinCheck}/>
            
            <ScrollView>
                {feedback.map((index, i) => (
                        <View key={i} style={styles.item}>
                        <Text>NAME: {index.name}</Text> 
                        <Text>KNOWLEDGE OUT OF {index.knowledge}/3</Text>
                        <Text>ENVIRONMENT OF THE SALON : {index.environment}/3</Text>
                        <Text>SATISFACTION : {index.environment}/3</Text>
                        <Text>REVIEW: {index.value}</Text>
                    </View>))
                }   
            </ScrollView>

        </View> 
    )
            
}


export default feedback

const styles = StyleSheet.create({
    button:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
});


