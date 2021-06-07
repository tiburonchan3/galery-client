const passwordSecure = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){1,20}$/;
export function isEmail(email) {
  const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailValidation.test(email)) {
    return false;
  }
  return true;
}

export function generateCode() {
  let result = "PRODUCTO ";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export function generateAdminCode(){
  let result = "EMP-SPC-";
  const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUV";
  const charactersLength = characters.length;
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export function isSecurePassword(password){
  if(passwordSecure.test(password)){
      return true
  }else{
      return false
  }
}