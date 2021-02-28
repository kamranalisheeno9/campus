import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth';
import AdminStudents from '../screens/AdminStudent'
import AdminCompany from '../screens/AdminCompany'
import AdminAdmin from '../screens/AdminAdmin'
import Login from '../screens/login'
import RegisterAdmin from '../screens/admin/Register'
import RegisterStudent from '../screens/student/Register'
import RegisterCompany from '../screens/company/Register'
import {getStudents} from '../store/action'
// import {getCompany} from '../store/action'
import {connect} from 'react-redux'
import database from "@react-native-firebase/database" ;
const Stack = createStackNavigator();




function Navigate(props) {
    // console.log(props.companyIdentification)

    useEffect( () => {
        props.getStudents()
        // props.getCompany()
        },[]);
       
    const [initializing,
        setInitializing] = useState(true);
    const [user,
        setUser] = useState();


    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) 
            setInitializing(false);
        }
    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        // console.log(user)

        return subscriber; // unsubscribe on unmount
    }, []);
    if (initializing) 
        return null;
    return (
        <NavigationContainer>
            <Stack.Navigator >
                {
                // (user && props.studentIdentification[0] ==="Student")
                //     ? <Stack.Screen
                //             options={{
                //             title: 'Welcome',
                //             headerStyle: {
                //                 backgroundColor: '#580000',
                //                 height: 50
                //             },
                //             headerTintColor: '#fff',
                //             headerTitleStyle: {}
                //         }}
                //             name="Admin"
                //             component={AdminStudents}/>
                //     :
                // console.log(props.status)
                    (user )
                    ? <Stack.Screen
                            options={{
                            title: 'Welcome',
                            headerStyle: {
                                backgroundColor: '#580000',
                                height: 50
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {}
                        }}
                            name="Admin"
                            component={AdminAdmin}/>
                    :
                    // (user && props.companyIdentification[0] ==="Company")
                    // ? <Stack.Screen
                    //         options={{
                    //         title: 'Welcome',
                    //         headerStyle: {
                    //             backgroundColor: '#580000',
                    //             height: 50
                    //         },
                    //         headerTintColor: '#fff',
                    //         headerTitleStyle: {}
                    //     }}
                    //         name="Admin"
                    //         component={AdminCompany}/>
                    // :
                    <Stack.Screen
                    options={{
                    title: 'Login',
                    // headerStyle: {
                    //     backgroundColor: '#580000',
                    //     height: 50
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {}
                }}
                    name="Please Login"
                    component={Login}/>
       }
       
            <Stack.Screen
                        options={{
                      
                    }}
                        name="Company Registration"
                        component={RegisterCompany}/>
               
                <Stack.Screen
                            options={{
                            
                        }}
                            name="Student Registration"
                            component={RegisterStudent}/>
                     
                <Stack.Screen
                           
                            name="Admin Registration"
                            component={RegisterAdmin}/>
                     
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const mapStateToProps = (state) => {
    return {
        students: state.students,
        company:state.company,
        studentIdentification: state.studentIdentification,
        companyIdentification: state.companyIdentification,
        adminIdentification: state.adminIdentification,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getStudents: () => dispatch(getStudents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigate);










const styles = StyleSheet.create({
    loginHeader: {

        backgroundColor: "black",
        color: "red"
    }
});