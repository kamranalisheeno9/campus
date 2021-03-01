import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Student from './student/student';
import Admin from './admin/admin';
import Company from './company/company';
// create a component
const Login = (props) => {
  return (
    <Container>
    {/* <Header hasTabs /> */}
    <Tabs>
      <Tab heading="Student">
        <Student props={props} student={"Student"} />
      </Tab>
      <Tab heading="Admin">
        <Admin props={props}  />
      </Tab>
      <Tab heading="Company">
        <Company props={props}  />
      </Tab>
    </Tabs>
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
});

//make this component available to the app
export default Login;







