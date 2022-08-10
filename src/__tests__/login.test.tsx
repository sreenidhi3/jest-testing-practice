import {isValidEmail} from '../utils/validEmail'
import {LoginReducer, LoginState} from '../components/login/Login'



describe("check login email valid", ()=>{
    it("ab@abx.com must be valid", ()=>{
        expect(isValidEmail("abcs@ab.com")).toBe(true)
    });

    it("ab@abx must be invalid", ()=>{
        expect(isValidEmail("ab@abx")).toBe(false)
    });

    it("a must be invalid", ()=>{
        expect(isValidEmail("a")).toBe(false)
    });

    it("@in.co must be invalid", ()=>{
        expect(isValidEmail("@in.co")).toBe(false)
    });

    it("b@ must be invalid", ()=>{
        expect(isValidEmail("b@")).toBe(false)
    });

    it("sree@xyz.co.in must be invalid", ()=>{
        expect(isValidEmail("sree@xyz.co.in")).toBe(true)
    });
})



describe("check login reducer", ()=>{
    let state:LoginState;
    beforeEach(()=>{
        state ={
            email: {
              value: "",
              error: "",
              touched: false
            },
            password: {
              value: "",
              error: "",
              touched: false
            }
          }
        }
    )

    it("ON_EMAIL_CHANGE with valid email must be valid",()=>{
        let payload = "email@gmail.com"
        let validmail = expect(isValidEmail("abcs@ab.com"))
        let updatedState = {...state, email:{...state.email, value:payload }}
        if(validmail){
            expect(LoginReducer(state, { type: "ON_EMAIL_CHANGE", payload })).toEqual(updatedState);
        }
    })
    it("ON_EMAIL_CHANGE with invalid email must be error",()=>{
        let payload = "Enter a valid email"
        let validmail = expect(isValidEmail("abcs@ab.com"))
        let updatedState = {...state, email:{...state.email, error:payload }}
        if(!validmail){
            expect(LoginReducer(state, { type: "ON_EMAIL_CHANGE", payload })).toEqual(updatedState);
        }
    })

})

