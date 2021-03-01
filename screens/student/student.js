//import liraries
import React, { Component,useState } from 'react';
import { View,Dimensions, Text, StyleSheet } from 'react-native';
import {Container,Button,Content,Form, Item, Input, Label } from 'native-base'
import auth from '@react-native-firebase/auth';
import database from "@react-native-firebase/database";
const Student =({props,student}) => {
    const [Email,setEmail] = useState("")
    const [Password,setPassword] =useState("")
    const [ErrorUsername,setErrorUsername] =useState("")
    const [ErrorPassword,setErrorPassword] =useState("")
    const Login =()=>{
       
        auth()
        .signInWithEmailAndPassword(Email,Password)
            .then(()=>{
              



            })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              setErrorUsername("Email is already in use")
              console.log(error)
              
            }
            if(Email ==="" || Password===""){
                alert("Please Enter Values")
             }
            
            if (error.code === 'auth/invalid-email') {
                console.log(error.message);
                setErrorUsername("Email is badly formatted")
                console.log(error)
        
            }
        
            console.error(error);
            setErrorPassword(error.message)
            console.log(error)

          });
    }
    



    return (
        <Container >
        <Content>
        <Form >
            <Item  >
              <Input  value={Email}  placeholder="Email" placeholderTextColor={"black"} onChangeText={(text)=>setEmail(text)} />
            </Item>
            <View >
              <Text  >{ErrorUsername}</Text>
            </View>
          

          
            <Item  >
              <Input placeholder="Password" placeholderTextColor={"black"} secureTextEntry={true} value={Password} onChangeText={(text)=>setPassword(text)} />
            </Item>
            <View >
              <Text >{ErrorPassword}</Text>
            </View>
           
                  <View style={styles.btnBox}>

            <Button onPress={Login}  style={styles.Button} >
              <Text style={{color:"white"}}>Login</Text>
              </Button>

              <Button onPress={()=>props.navigation.navigate("Student Registration")}   style={styles.Button} >
              <Text style={{color:"white"}} >Register</Text>
              </Button>
              
              </View>
         
          </Form>
        </Content>
      </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    Button :{
        justifyContent:"center",
        marginTop:10,
        alignSelf:"center",
        width: Dimensions.get('window').width*.40,
    },
    btnBox :{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
    }
});

//make this component available to the app
export default Student;
