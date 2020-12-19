import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().min(2, "Please Enter Name"), 
  pizzaSize: yup.string().required("Please Enter Role"),
  topPepperoni: yup.boolean(),//.oneOf([true], "Please Agree To Terms"),
  topSausage: yup.boolean(),//.oneOf([true], "Please Agree To Terms"),
  topMushrooms: yup.boolean(),//.oneOf([true], "Please Agree To Terms"),
  topOlives: yup.boolean(),//.oneOf([true], "Please Agree To Terms"),
  terms: yup.boolean().oneOf([true], "Please Agree To Terms"),
  special: yup.string(),
});