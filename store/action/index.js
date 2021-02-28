import database from '@react-native-firebase/database';


export const getStudents =()=>{
return(dispatch)=>{
    const students =[]
    const identification =[]
    const companyidentification =[]
    const company=[]
    const admin=[]
    const adminIdentification=[]
    // console.log(company)
    database().ref("/student").on("child_added",(data)=>{
            students.push(data.val())
            identification.push(data.val().Student)
       
            // console.log(identification)
            dispatch({
                type:"ADDSTUDENTS",
                payload:students
    
            })
            dispatch({
                type:"IDENTIFICATION",
                payload:identification
    
            })
           
        database().ref("/company").on("child_added",(data)=>{
            company.push(data.val())

            companyidentification.push(data.val().Company)
            dispatch({
                type:"ADDCOMPANY",
                payload:company
            
            })
            dispatch({
                type:"IDENTIFICATIONCOMPANY",
                payload:companyidentification
            
            })
             
        
        })
        database().ref("/admin").on("child_added",(data)=>{
            admin.push(data.val())
            // console.log(data.val().Admin)
            adminIdentification.push(data.val().Admin)
            dispatch({
                type:"ADDADMIN",
                payload:admin
            
            })

            dispatch({
                type:"AIDENTIFICATION",
                payload:adminIdentification
            
            })
        
        })
          
        })
    }
}

