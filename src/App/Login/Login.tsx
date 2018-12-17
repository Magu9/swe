
import * as React from "react";
import { SFC, ChangeEvent, FormEvent, useState } from "react";
import { Link } from 'react-router-dom';

export interface ILogDaten {
  Passwort: string;
  email: string;
}
export interface ILogKlappt {
  success: boolean;
  message: string;
}

interface IProps {
  onLogin: (data: ILogDaten) => ILogKlappt;
}

export const Login: SFC<IProps> = props => {
  const [Passwort, setPasswort] = useState("");
  const [PasswortError, setPasswortError] = useState("");
  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitResult, setSubmitResult]: [
    ILogKlappt,
    (result: ILogKlappt) => void
  ] = useState({ success: false, message: "" });

  const handlePasswortChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswort(e.currentTarget.value);
    validatePasswort(e.currentTarget.value);
  };

  const validatePasswort = (value: string): string => {
    const error = value ? "" : "Gib dein Passwort ein";
    setPasswortError(error);
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
    const PasswortValidationError = validatePasswort(Passwort);
    const emailValidationError = validateemail(email);
    if (PasswortValidationError === "" && emailValidationError === "") {
      const result = {
        message: "Erfolgreich eingeloggt",
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
            <label htmlFor="email">User email-Adresse</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleemailChange}
            />
            <span className="error">{emailError}</span>
          </div>

          <div className="row">
            <label htmlFor="Passwort">Passwort</label>
            <input
              type="text"
              id="Passwort"
              value={Passwort}
              onChange={handlePasswortChange}
            />
            <span className="error">{PasswortError}</span>
          </div>

         

          <div className="row">
            <button type="submit" disabled={submitted && submitResult.success}>
              Login
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
