import React, { Component, useState,useEffect } from 'react';
import {StyleSheet,Dimensions, ScrollView} from 'react-native'
import { Container, View, Header,Text, Form, Item, Input, Label,Button,floatingLabel} from 'native-base';
import database from '@react-native-firebase/database';
import {getStudents} from '../../store/action/index'
// import {getCompany} from '../../store/action/index'

import {connect} from 'react-redux'

import auth from '@react-native-firebase/auth';

const RegisterStudent =(props) => {
  useEffect( () => {
    props.getStudents()
    },[]);
   
// console.log(props.students) 

    const KeyValue=Math.random()*123456
    const Key=KeyValue.toFixed()
    const [Email,setEmail] = useState("")
    const [Password,setPassword] =useState("")
    const [Name,setName] =useState("")
    const [Designation,setDesignation] =useState("")
    const [Admin,setAdmin] =useState("Admin")
    // const [ErrorEmail,setErrorEmail] =useState("")
    // const [ErrorPassword,setErrorPassword] =useState("")
    const Register =()=>{
        auth()
  .createUserWithEmailAndPassword(Email, Password)
  .then(() => {
    setEmail("")
    setPassword("")
        

}
  )
  database().ref("/admin" ).child(Key).set(Data)
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      setErrorEmail(error.message)
    }

    if (error.code === 'auth/invalid-email') {
      console.log(error.message);
    setErrorEmail(error.message)

    }

    console.error(error);
    setErrorPassword(error.message)
  });
    }

    
    const Data ={
      Email:Email,
      
      Admin:"Admin",
      Name:Name,
      Designation:Designation,
        Key:Key
    }


      return (
    <ScrollView>

    <Container style={styles.container} >
          <Form >
            <Item >
              <Input  value={Email}  placeholder="Email" placeholderTextColor={"black"} onChangeText={(text)=>setEmail(text)}  />
            </Item>
          
            <Item >
              <Input secureTextEntry={true} value={Password}  placeholder="Password" placeholderTextColor={"black"}  onChangeText={(text)=>setPassword(text)} />
            </Item>
            <Item >
              <Input  value={Name}  placeholder="Name" placeholderTextColor={"black"} onChangeText={(text)=>setName(text)}  />
            </Item>
            <Item >
              <Input  value={Designation}  placeholder="Designation" placeholderTextColor={"black"} onChangeText={(text)=>setDesignation(text)}  />
            </Item>
            
            
          <View   style={styles.buttonBox}          >
   

            <Button onPress={Register}   >
              <Text>Register</Text>
              </Button>
          </View>
           
           
          </Form>
      </Container>
    </ScrollView>

      
    );
  }


  const mapStateToProps = (state) => {
    return {
        students: state.students,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getStudents: () => dispatch(getStudents()),
    // getCompany: () => dispatch(getCompany())
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStudent);


const styles = StyleSheet.create({
    container :{
        display:"flex",
        justifyContent:"space-between",
        
        backgroundColor:"transparent",
    },
    
        buttonBox :{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
        },
       
   
  });