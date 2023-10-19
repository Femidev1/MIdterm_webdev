import{useForm} from "react-hook-form";
import "./Signupuser.css";

function Signupuser() {
  const {
    register,
    handleSubmit,
    formState:{ errors },
    getValues
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    console.log(data);
  };

  return (
    <>
      <h1>
      Sign Up User
    </h1>
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label className="form_text">First Name</label>
      <input
        {...register("firstName", { required: "Firstname required" })}
        className="form_input"
      />
      {errors.firstName && <p className="form_error">{errors.firstName.message}</p>}
      
      <label className="form_text">Last Name</label>
      <input
        {...register("lastName", { required: "Lastname required" })}
        className="form_input"
      />
      {errors.lastName && <p className="form_error">{errors.lastName.message}</p>}
      
      <label className="form_text">Username</label>
      <input
        {...register("userName", { required: "Username required" })}
        className="form_input"
      />
      {errors.userName && <p className="form_error">{errors.userName.message}</p>}
      
      <label className="form_text">Email</label>
      <input
        type="email"
        className="form_input"
        {...register("email", { required: "Email required", pattern: {value: /^\S+@\S+$/i, message: "Email frmat not valid"} })}
      />
      {errors.email && <p className="form_error">{errors.email.message}</p>}

      <label className="form_text">Password</label>
      <input
        type="password"
        className="form_input"
        {...register("password", { required: "Password required" })}
      />
      {errors.password && <p className="form_error">{errors.password.message}</p>}
      
      <label className="form_text">Confirm Password</label>
      <input
        type="password"
        className="form_input"
        {...register("confirmPassword", { 
          required: "Confirm password",
          validate: value => value === getValues().password || "Password no match"
        })}
      />
      {errors.confirmPassword && <p className="form_error">{errors.confirmPassword.message}</p>}

         <button className="form_button" type="submit">
        Submit
      </button>
    </form>
    </>
  );
}

export default Signupuser;