import * as YUP from 'yup';

let Adminschema=YUP.object({
    name:YUP.string().required("*"),
    username:YUP.string().required("*"),
    password:YUP.string().required("*"),
     repassword: YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password Should be same").required("*"),
})

export default Adminschema;