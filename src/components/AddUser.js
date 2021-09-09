import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "@material-ui/lab/Alert";
import { useStyles, checkUserExists } from "../utils";

export const AddUser = ({ rows, onAdd }) => {
  const classes = useStyles();
  const [ addNotify, setAddNotify ] = useState("");
  const [errorNotify, setErrorNotify] = useState("");

  const { register, handleSubmit, reset, trigger, formState } = useForm({
    mode: "onChange",
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    const okToAdd = (
      checkUserExists(rows, "email", data.email) || 
      checkUserExists(rows, "phone", data.phone)
    );

    if (okToAdd) {
      setErrorNotify("Such a user already. Choose a different email and/or phone!");
    } else {
        onAdd(data);
        reset(
          {
            name: "",
            email: "",
            phone: "",
          },
          {
            keepErrors: false,
            keepDirty: false,
            keepIsSubmitted: false,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: false,
          }
        );
        setErrorNotify("");
        setAddNotify(`User "${data.name}" Added Successfully!`);
        
        setTimeout(() => {
          setAddNotify("");
        }, 4000);
    }
  };
  return (
    <div>
      <h3 className="heading">List of participants</h3>
      <h3 className="heading">
        { addNotify && (<div className={classes.root + " success__wrapper"}>
          <Alert variant="outlined" severity="success">
            {addNotify}
          </Alert>
        </div>
        )}
        { errorNotify && (<div className={classes.root + " success-wrapper"}>
          <Alert variant="outlined" severity="error">
            {errorNotify}
          </Alert>
        </div>
        )}
      </h3>
      <div className="table_start">
        <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Full name"
              className={`full__name ${errors.name && "invalid_class"}`}
              {...register("name", { required: true })}
              onKeyUp={() => {
                trigger("name");
              }}
            />
            <p className="name_error">
              {errors.name?.type === "required" && " name required"}
            </p>
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="E-mail address"
              className={`email__table ${errors.email && "invalid_class"}`}
              {...register("email", {
                required: "email required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email",
                },
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <p className="email__error">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone number"
              className={`${errors.phone && "invalid_class"}`}
              {...register("phone", { required: true })}
              onKeyUp={() => {
                trigger("phone");
              }}
            />
            <p className="name_error">
              {errors.phone?.type === "required" && "Phone No required"}
            </p>
          </div>
          <button type="submit" disabled = {errors.name || errors.email || errors.phone}>Add New</button>
        </form>
      </div>
    </div>
  );
}