import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUsername] = useState(""); //set userName to empty string
  //this is a react hook. It accesses the core features of React,
  //such as state, without having to use classes.
  //enteredUserName is the current state of the userName
  //setEnteredUsername is the method to allow us to update it
  const [enteredAge, setEnteredAge] = useState(""); //set age to empty string
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault(); //stops submission from showing new page.
    console.log("addUserHandler function, submit Clicked!");
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("Please input name and age!");
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (not empty)!",
      });
      return;
    }
    if (+enteredAge < 1) {
      {
        setError({
          title: "Invalid Input",
          message: "Please enter a valid age (greater than 0)!",
        });
        console.log("Please enter valid age (greater than 0)!");
        return;
        /**by putting the '+' it forces a conversion to ensure that it is a number */
      }
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* passes through the addUserHandler function upon submitting */}
          {/* htmlFor is JSX syntax for linking a label with an input box (for ="idName" in html) */}
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
