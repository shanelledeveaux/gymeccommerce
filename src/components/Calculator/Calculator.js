import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      age: "",
      height: "",
      weight: "",
      goal: "",
      deficit: "",
      activity: "",
      intensity: ""
    };
  }

  render() {
    return (
      <div>
        <form className="calculator">
          <div>
            Gender:
            <input type="radio" name="gender" value="male" checked />
            Male
            <input type="radio" name="gender" value="female" />
            Female
          </div>
          <div>
            Age:
            <input />
          </div>
          <div>
            Height:
            <input />
          </div>
          <div>
            Weight:
            <input />
          </div>
          <div>
            Goal:
            <input type="radio" name="goal" value="loss" /> Weight Loss
            <input type="radio" name="goal" value="gain" /> Weight Gain
          </div>
          <div>
            Calorie Deficit:
            <select name="deficit">
              <option value="20%">20% Suggested</option>
              <option value="25%">25% Aggressive</option>
              <option value="30%">30% Intense</option>
            </select>
          </div>
          <div className="select">
            Describe your normal Daily Activity:
            <div>
              <input type="radio" name="activity" value="sedentary" /> Sedentary
              - Desk Job
            </div>
            <div>
              <input type="radio" name="activity" value="lightly active" />
              Lightly Active - Climb Stairs A Few Times Per Day
            </div>
            <div>
              <input type="radio" name="activity" value="moderately active" />
              Moderately Active - Teacher, Salesman, Etc.
            </div>
            <div>
              <input type="radio" name="activity" value="very active" /> Very
              Active - Carpenter, Mailman, Etc.
            </div>
            <div>
              <input type="radio" name="activity" value="extremely active" />
              Extremely Active - Soldier, Boxer, Etc.
            </div>
          </div>
          <div className="select">
            How Intense Is Your Excercise:
            <div>
              <input type="radio" name="intensity" value="none" /> None - Couch
              Potato
            </div>
            <div>
              <input type="radio" name="intensity" value="light" /> Light -
              Goofing Around At The Gym
            </div>
            <div>
              <input type="radio" name="intensity" value="moderate" /> Moderate
              - Occational Sight Seeing In The Gym
            </div>
            <div>
              <input type="radio" name="intensity" value="difficult" />
              Difficult - Less than 30 Seconds Between Sets
            </div>
            <div>
              <input type="radio" name="intensity" value="intense" /> Intense -
              Watch Out For My Sweat
            </div>
          </div>
          <button className="submitcalc">CALCULATE</button>
        </form>
      </div>
    );
  }
}

export default Calculator;
