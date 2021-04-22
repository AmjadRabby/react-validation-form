import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onTouched",
  });
  const password = useRef({});
  password.current = watch("password", "");

  console.log(isDirty, isValid);
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="App">
      <h4 className="text-center bg-white shadow p-3">React Validation Form</h4>
      <div className="container py-4">
        <div className="card border-0 shadow p-3 w-75 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.fullName,
                })}
                id="fullName"
                placeholder="Enter Your Full Name"
                {...register("fullName", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "please enter a minimum length 6 characters",
                  },
                })}
              />
              {errors.fullName && (
                <div className="invalid-feedback">
                  {errors.fullName.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.email,
                })}
                id="email"
                placeholder="Enter Your E-mail Address"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "please valid your email Address",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.phone,
                })}
                id="phone"
                placeholder="Enter Your Phone Number"
                {...register("phone", {
                  required: "This field is required",
                  pattern: {
                    value: /^\d{11}$/,
                    message: "please valid phone and 10 characters",
                  },
                })}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone.message}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={classNames("form-control", {
                  "is-invalid": errors.password,
                })}
                id="password"
                placeholder="Enter Your Password"
                {...register("password", {
                  required: "This field is required",
                  pattern: {
                    value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message:
                      " Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
                  },
                })}
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className={classNames("form-control", {
                  "is-invalid": errors.confirmPassword,
                })}
                id="confirmPassword"
                placeholder="Enter Your Confirm Password"
                {...register("confirmPassword", {
                  required: "This field is required",
                  validate: {
                    value: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  },
                })}
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="state">Choose Your State</label>
              <select
                className={classNames("form-control", {
                  "is-invalid": errors.state,
                })}
                id="state"
                {...register("state", {
                  required: "This field is required",
                })}
              >
                <option value="">--- Select Your State ---</option>
                <option value="dhaka">Dhaka</option>
                <option value="chattogram">Chattogram</option>
                <option value="comilla">Comilla</option>
                <option value="feni">Feni</option>
              </select>
              {errors.state && (
                <div className="invalid-feedback">{errors.state.message}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="mr-4">
                Choose Your Gender
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  {...register("gender", {
                    required: "This field is required",
                  })}
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  {...register("gender", {
                    required: "This field is required",
                  })}
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                  {...register("gender", {
                    required: "This field is required",
                  })}
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
              {errors.gender && (
                <div className="form-text text-danger">
                  {errors.gender.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="tnc"
                  {...register("termCondition", {
                    required: "This field is required",
                  })}
                />
                <label className="form-check-label" htmlFor="tnc">
                  I agree all terms & conditions
                </label>
              </div>
              {errors.termCondition && (
                <div className="text-form text-danger">
                  {errors.termCondition.message}
                </div>
              )}
            </div>
            {isValid ? (
              <button type="submit" className="btn btn-primary w-100">
                Create New Account
              </button>
            ) : (
              <button type="submit" className="btn btn-secondary w-100" disabled>
                Create New Account
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
