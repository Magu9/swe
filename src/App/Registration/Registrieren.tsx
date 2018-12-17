
import * as React from "react";
import { SFC, ChangeEvent, FormEvent, useState } from "react";
import "./register.css";
export interface IRegDaten {
  Name: string;
  email: string;
}
export interface IRegklappt {
  success: boolean;
  message: string;
}

interface IProps {
  onRegistrieren: (data: IRegDaten) => IRegklappt;
}

export const Registrieren: SFC<IProps> = props => {
  const [Name, setName] = useState("");
  const [NameError, setNameError] = useState("");
  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitResult, setSubmitResult]: [
    IRegklappt,
    (result: IRegklappt) => void
  ] = useState({ success: false, message: "" });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    validateName(e.currentTarget.value);
  };

  const validateName = (value: string): string => {
    const error = value ? "" : "Gib nen Namen ein";
    setNameError(error);
    return error;
  };

  const handleemailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setemail(e.currentTarget.value);
    validateemail(e.currentTarget.value);
  };

  const validateemail = (value: string): string => {
    const error = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
      ? ""
      : "Korrektes Format für die email benutzen: xx@yy.zz";
    setemailError(error);
    return error;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const NameValidationError = validateName(Name);
    const emailValidationError = validateemail(email);
    if (NameValidationError === "" && emailValidationError === "") {
      const result = {
        message: "Dein Passwort wurde dir per mail zugeschickt",
        success: true
      };
      setSubmitResult(result);
      setSubmitted(true);
    }
  };

  
  return (
    <div className="container text-center">
      <div className="row">
        <form noValidate={true} onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="Name">Vorname, Name</label>
            <input
              type="text"
              id="Name"
              value={Name}
              onChange={handleNameChange}
            />
            <span className="error">{NameError}</span>
          </div>

          <div className="row">
            <label htmlFor="email">e-Mail Adresse</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleemailChange}
            />
            <span className="error">{emailError}</span>
          </div>

          <div className="row">
            <button type="submit" disabled={submitted && submitResult.success}>
              Registrieren
            </button>
          </div>

          {submitted && (
            <div className="row">
              <span
                className={
                  submitResult.success ? "submit-success" : "submit-failure"
                }
              >
                {submitResult.message}
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
    
  );
};
