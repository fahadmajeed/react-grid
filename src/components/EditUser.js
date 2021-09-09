import React from "react";
import { useForm } from "react-hook-form";

export const EditUser = ({ data, onSave, setEditMode }) => {
  const { register, handleSubmit, reset, trigger, formState } = useForm({
    mode: "onChange",
    defaultValues: data,
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    onSave({ ...data, id: data.id });
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
  };

  return (
    <td colSpan={4}>
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
        <div className="sav_cancel">
          <button onClick={() => setEditMode(0)}>Cancel</button>
          <button type="submit" className="save__button" disabled = {errors.name || errors.email || errors.phone}>
            Save 
          </button>
        </div>
      </form>
    </td>
  );
}