//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button, ScrollView, Dimensions } from 'react-native';
import auth from '@react-native-firebase/auth'
import { Container, Header, Content, List, ListItem,Card, Left, Right, Icon } from 'native-base';
import {getStudents} from '../store/action/index'
import {connect} from 'react-redux'

// create a component
const AdminStudent = (props) => {
  const Logout=()=>{
    auth()
  .signOut()
  .then((user) =>
  
  console.log('User signed out!'));
    }
  return (
    // <ScrollView>
    <Container>
    <Content>
      <List>
        <ListItem itemHeader first>
          <Text >STUDENTS</Text>
        </ListItem>
        {props.students.map((value,index)=>{
          return(
            <Card style={{ width: Dimensions.get('screen').width*0.95,alignSelf:"center"}} key={index}>

          <ListItem  >
          <Text > Name : {value.Name}</Text>
        </ListItem>
          <ListItem  >
          <Text >Father Name : {value.Father}</Text>
        </ListItem>
          <ListItem  >
          <Text >Surname : {value.Surname}</Text>
        </ListItem>
          <ListItem  >
          <Text >Student Id : {value.StudentId}</Text>
        </ListItem>
          <ListItem  >
          <Text >Study Year : {value.Studyyear}</Text>
        </ListItem>
          <ListItem  >
          <Text >CGPA : {value.Cgpa}</Text>
        </ListItem>
          <ListItem  >
          <Text >Date : {value.Date}</Text>
        </ListItem>
          {/* <ListItem style={{alignSelf:"center"}} >
          <Text style={{color:"orange"}} >Email Us Your Resume</Text>
        </ListItem> */}
</Card>
          )
          
        })
      }


        
              </List>
              <Button onPress={Logout} title="LOGOUT"/>
    </Content>
  </Container>
    //   </ScrollView>
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
});

//make this component available to the app
const mapStateToProps = (state) => {
  return {
      students: state.students,
      company: state.company,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getStudents: () => dispatch(getStudents())
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminStudent);

