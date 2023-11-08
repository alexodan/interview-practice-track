"use client";

// start time 18.05
// end time 18.40
import { FormEvent, useState } from "react";
import styles from "./styles.module.css";

type FormErrors = {
  email: string;
  password: {
    "length-error": string;
    "special-character-error": string;
  };
};

type FormData = {
  email: string;
  password: string;
};

const submitForm = (formData: FormData) => {
  console.log("Submitting form...", formData);
};

const validateForm = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): { errors: FormErrors; hasErrors: boolean } => {
  const errors = {
    email: "",
    password: {},
  } as FormErrors;
  let hasErrors = false;

  if (!email.includes(".")) {
    errors.email = "Invalid email";
    hasErrors = true;
  }
  if (password.length < 8 || !/\d+/.test(password)) {
    errors.password["length-error"] = "One number and be at least 8 characters";
    hasErrors = true;
  } else {
    errors.password["length-error"] = "";
  }
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!specialChars.test(password)) {
    console.log("special character");
    errors.password["special-character-error"] =
      "One number and be at least 8 characters";
    hasErrors = true;
  } else {
    errors.password["special-character-error"] = "";
  }
  return { errors, hasErrors };
};

export default function SignUpForm() {
  const [formErrors, setFormErrors] = useState<FormErrors | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as FormData;
    const { errors, hasErrors } = validateForm(formData);
    if (hasErrors) {
      setFormErrors(errors);
    } else {
      submitForm(formData);
      setFormErrors(null);
    }
  };

  return (
    <main className={styles.main}>
      <h1>Sign Up</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className={styles.formInput}
            type="email"
            name="email"
            placeholder="email@domain.com"
            required
          />
          {formErrors?.email && (
            <ul>
              <li
                className={
                  formErrors?.email ? styles.formInputError : undefined
                }
              >
                Need to include a {"."}
              </li>
            </ul>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            className={styles.formInput}
            type="text"
            name="password"
            placeholder="A strong password"
            required
          />
          <ul>
            <li
              className={
                formErrors?.password["length-error"]
                  ? styles.formInputError
                  : undefined
              }
            >
              One number and be at least 8 characters
            </li>
            <li
              className={
                formErrors?.password["special-character-error"]
                  ? styles.formInputError
                  : undefined
              }
            >
              At least one special character
            </li>
          </ul>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}
