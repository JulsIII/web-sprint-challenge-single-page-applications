import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().min(2, "Please Enter Name"), 
  email: yup
    .string()
    .email("Please Enter A Vaild Email Address")
    .required("Please Enter An Email Address"),
  password: yup.string().required("Please Enter A Password"),
  //pizzaSize: yup.string().required("Please Enter Role"),
  topPepperoni: yup.boolean(),//.oneOf([true], "Please Agree To Terms"),
  topSausage: yup.boolean(),//.oneOf([true], "Please Agree To Terms"),
  topMushrooms: yup.boolean(),//.oneOf([true], "Please Agree To Terms"),
  topOlives: yup.boolean(),//.oneOf([true], "Please Agree To Terms"),
  terms: yup.boolean().oneOf([true], "Please Agree To Terms"),
  special: yup.string(),
});