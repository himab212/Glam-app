import React,{ Component, useEffect, useLayoutEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Button, Input,Image} from "react-native-elements";
import {StatusBar} from "expo-status-bar";
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {db} from '../firebase';
import { ScrollView } from 'react-native-gesture-handler';



const loginscreen = ({navigation}) => {
    
    const[name, setName] =  React.useState("");

    const [satisfaction, setSatisfaction] = useState(0);
    const [knowledge, setKnowledge] = useState(0);
    const [environment, setEnvironment] = useState(0);
    const [value, setValue] = useState('');  

    const [REACTIONS, setReactions] = useState([
        
        { id: 1, label: "Happy", src: require('../screens/images/smile.png'), bigSrc: require('../screens/images/smile_big.png') },
        { id: 2, label: "Satisfactory", src: require('../screens/images/ambitious.png'), bigSrc: require('../screens/images/ambitious_big.png') },
        { id: 3, label: "Not Happy", src: require('../screens/images/sad.png'), bigSrc: require('../screens/images/sad_big.png') },
        // { id: 4,label: "Never Again", src: require('../screens/images/worried.png'), bigSrc: require('../screens/images/worried_big.png') },
      ]);
    
    let satis = (e1)=>{
        setSatisfaction(e1)
    }
    let know = (e2)=>{   
        setKnowledge(e2)
    }
    let envi = (e3)=>{    
        setEnvironment(e3)
    }

    const saveName =() => {
        db.collection("users").add({
            name: name,
            satisfaction: satisfaction,
            knowledge: knowledge,
            environment: environment,
            value: value

        }).catch((error) => alert(error));
    } 
    
    const redirect = () => {
        navigation.navigate("feedback")
    }
    return (
        <ScrollView>
        <KeyboardAvoidingView behavior = 'padding' style= {styles.container}>
            <StatusBar style= "light" />
            <Image
                source= {{
                    uri: "https://glamindiabeautysalon.com/wp-content/uploads/2018/08/cropped-logo.png",
                }}  
                style={{width: 230, height: 120, 
                
                }}
                />
                <View style={styles.inputContainer}>
                  
                    <Input placeholder = "Name" 
                    autoFocus 
                    type = 'text'
                    value= {name}
                    onChangeText = {(name) => setName(name)}
                    />
                    
                </View>
        
            <View style={styles.container}>
            <Text style={{fontFamily:"Chalkboard SE", fontSize: 20, fontWeight: "bold"}}>How satisfied are you with your service today?</Text>
            <View style={styles.innercontainer}>{REACTIONS.map(reactions => (
                            <TouchableOpacity key={reactions.id} onPress={()=> satis(reactions.id)} style={{padding: 10, alignItems: 'center',}}>
                            <Image  style={ (satisfaction == reactions.id)? {width: 70, height: 70} : {width: 50, height: 50}}
                                source={(satisfaction == reactions.id)? reactions.bigSrc : reactions.src} />
                            <Text>{reactions.label}</Text>                 
                    </TouchableOpacity>
            ))}
            </View>

            <Text style={{ fontFamily: "Chalkboard SE",fontSize: 20, fontWeight: "bold"}}>The stylist was knowledgeable and you are happy with her service</Text>
            <View style={styles.innercontainer}>{REACTIONS.map(reactions => (
                            <TouchableOpacity key={reactions.id} onPress={()=> know(reactions.id)} style={{padding: 10, alignItems: 'center',}}>
                            <Image  style={ (knowledge == reactions.id)? {width: 70, height: 70} : {width: 50, height: 50}}
                                source={(knowledge == reactions.id)? reactions.bigSrc : reactions.src} />
                            <Text>{reactions.label}</Text>                 
                    </TouchableOpacity>
            ))}
            </View>

            <Text style={{fontFamily: "Chalkboard SE",fontSize: 20, fontWeight: "bold"}}>The salon environment was welcoming and you are happy with our sanitation</Text>
            <View style={styles.innercontainer}>{REACTIONS.map(reactions => (
                            <TouchableOpacity key={reactions.id} onPress={()=> envi(reactions.id)} style={{padding: 10, alignItems: 'center',}}>
                            <Image  style={ (environment == reactions.id)? {width: 70, height: 70} : {width: 50, height: 50}}
                                source={(environment == reactions.id)? reactions.bigSrc : reactions.src} />
                            <Text>{reactions.label}</Text>                 
                    </TouchableOpacity>
            ))}
            </View>
            <Text style={{fontFamily: "Chalkboard SE",fontSize: 20, fontWeight: "bold"}}>How can we improve? We appreciate all feedback and suggestions</Text>
            <TextInput
            style={{backgroundColor:"white", width:"100%"}}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setValue(text)}
                value={value}
                placeholder={"Enter your review"}/>
        
            <Button title="SUBMIT" onPress={saveName}></Button>
        </View>         
                
        <Button title="Get Feedback results" onPress={redirect}></Button>
        
        </KeyboardAvoidingView>
        </ScrollView>
    );
       
 };

 export default loginscreen

const styles = StyleSheet.create({
    container:{
        fontFamily:"sans-serif",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,


    },
    inputContainer: {
        width: 300,
    },
    button:{
        width: 100,
        marginTop: 100,
        marginBottom: 20,
        
    },
    innercontainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
      
});

