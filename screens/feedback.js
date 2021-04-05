import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Button, Input,Image} from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler';
import {db} from '../firebase';

const feedback = () => {

    let arr= [];
    const [feedback, setFeedback]= useState([]);
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

    return (
        <View>
            <Button style ={styles.button} title = 'View Feedback Data' onPress = {showFeedback}/>
            <ScrollView>
                {feedback.map((index, i) => (
                    <View key={i} style={styles.item}>
                        <Text>NAME: {index.name}</Text> 
                        <Text >KNOWLEDGE OUT OF {index.knowledge}/5</Text>
                        <Text>ENVIRONMENT OF THE SALON : {index.environment}</Text>
                        <Text>SATISFACTION : {index.environment}</Text>
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


