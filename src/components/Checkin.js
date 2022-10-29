import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";




const userValidationSchema=yup.object({
  drivername: yup
    .string()  
 ,
  vehiclenumber: yup,
//   .required("why not fill the username?"),
  checkindate: yup
  .date()
//   .required("Checkin date is important"),
,
  checkintime:yup
//   .required("Checkin time should be mentioned")
})


export default function Checkin(){

  const formik=useFormik({
    initialValues: {drivername: "",vehiclenumber: "",checkindate: "",checkintime:""},
    validationSchema: userValidationSchema,
    onSubmit: (newUser)=>{
    //  console.log("onSubmit",values);
     createUser(newUser)
    }
   })

   const createUser = (newUser)=>{

    console.log("createUser", newUser)
    fetch("https://63234c53bb2321cba916eb6e.mockapi.io/drivers",{
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((data) => data.json())
    .then(() => navigate("/"));
   }

   const navigate=useNavigate()

  return(
    <div className="add-user">
    <div className="container mt-2">
      <div className="w-50 mx-auto shadow p-5">
        <h1 className="text-center mb-4">Check In</h1>
       <form onSubmit={formik.handleSubmit}>
       <input 
       className="form-control form-control-lg" 
       id="drivername"
       name="drivername"
       type="text" 
       value={formik.values.drivername}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       placeholder="Enter your name" 
      />
            {formik.touched.drivername && formik.errors.drivername? formik.errors.drivername : ''}
            <br></br>

            <input 
            className="form-control form-control-lg" 
            id="vehiclenumber"
            name="vehiclenumber"
       type="vehiclenumber" 
       value={formik.values.vehiclenumber}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       placeholder="Enter your vehicle number" 
      />
          {formik.touched.vehiclenumber && formik.errors.vehiclenumber? formik.errors.vehiclenumber : ''}
          <br></br>
          <input
           className="form-control form-control-lg" 
           id="checkindate"
           name="checkindate"
       type="date" 
       value={formik.values.checkindate}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       placeholder="Enter checkin date" 
      />
          {formik.touched.checkindate && formik.errors.checkindate? formik.errors.checkindate : ''}
      <br></br>
          <input
           className="form-control form-control-lg" 
           id="checkintime"
           name="checkintime"
       type="time" 
       value={formik.values.checkintime}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       placeholder="Enter checkin time" 
      />
       {formik.touched.checkintime && formik.errors.checkintime? formik.errors.checkintime : ''}
    
         <div className="d-grid gap-2 col-6 mx-auto">

  <button onClick={createUser} className="btn btn-success mt-5" type="submit">Check In</button>
  
  </div>
         </form>
    </div>
    </div>
    </div>
  )
}