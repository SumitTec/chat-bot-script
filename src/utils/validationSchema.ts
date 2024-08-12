import * as Yup from "yup";

// export const loginValidationSchema = () => {
//     const hasNumber = /(?=.*[0-9])/;
//     const upperCaseLetter = /(?=.*[A-Z])/;
//     const lowerCaseLetter = /(?=.*[a-z])/;
//     const specialCharacter = /(?=.*[!@#$%^&*])/;
//     // const minLength = /.{8,20}/;
  
//     return Yup.object().shape({
//       memberEmail: Yup.string()
//         .required("Email is required")
//         .matches(
//           /^[\w+-]+(\.[\w+-]+)*@([\w+-]+\.)+[a-zA-Z]{2,7}$/,
//           "Invalid email address"
//         ),
//       memberPassword: Yup.string()
//         .required("Password is required")
//         .matches(upperCaseLetter, "Please enter valid password")
//         .matches(lowerCaseLetter, "Please enter valid password")
//         .matches(hasNumber, "Please enter valid password")
//         .matches(specialCharacter, "Please enter valid password")
//         .min(8, "Please enter valid password")
//         .max(20, "Please enter valid password"),
//     });
//   };
