
const INITIAL_STATE = {
    students:[],
    company:[],
    admin:[],
    studentIdentification:[],
    adminIdentification:[],
    companyIdentification:[],


};

export default  (state = INITIAL_STATE,action) =>  {
    switch (action.type) {
        case "ADDSTUDENTS":
            // console.log(state.donners)
          return({
         
            ...state,
               students:action.payload
            }
            )
            case "IDENTIFICATION":
                // console.log(state.donners)
              return({
                  ...state,
                   studentIdentification:action.payload
                }
                )

                case "ADDCOMPANY":
                    // console.log(state.donners)
                  return({
                 
                    ...state,
                       company:action.payload
                    }
                    )
                    case "IDENTIFICATIONCOMPANY":
                      return({
                          ...state,
                        companyIdentification:action.payload
                        }
                        )
                case "ADDADMIN":
                    
                  return({
                 
                    ...state,
                       admin:action.payload
                    }
                    )
                    case "ADMINIDENTIFICATION":
                        
                      return({
                          ...state,
                        adminIdentification:action.payload
                        }
                        )
                  
 
                   }       return state;
}