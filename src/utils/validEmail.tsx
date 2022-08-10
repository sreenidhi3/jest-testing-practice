let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const isValidEmail=(email:string)=>emailRegex.test(email)