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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form className="calculator">
          <div>
            Gender:
            <input
              type="radio"
              name="gender"
              value="male"
              checked
              onChange={this.handleChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
            />
            Female
          </div>
          <div>
            Age:
            <input name="age" onChange={this.handleChange} />
          </div>
          <div>
            Height:
            <input name="height" onChange={this.handleChange} />
          </div>
          <div>
            Weight:
            <input name="weight" onChange={this.handleChange} />
          </div>
          <div>
            Goal:
            <input
              type="radio"
              name="goal"
              value="loss"
              onChange={this.handleChange}
            />
            Weight Loss
            <input
              type="radio"
              name="goal"
              value="gain"
              onChange={this.handleChange}
            />
            Weight Gain
          </div>
          <div>
            Calorie Deficit:
            <select name="deficit" onChange={this.handleChange}>
              <option value="20%">20% Suggested</option>
              <option value="25%">25% Aggressive</option>
              <option value="30%">30% Intense</option>
            </select>
          </div>
          <div className="select">
            Describe your normal Daily Activity:
            <div>
              <input
                type="radio"
                name="activity"
                value="sedentary"
                onChange={this.handleChange}
              />
              Sedentary - Desk Job
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="lightly active"
                onChange={this.handleChange}
              />
              Lightly Active - Climb Stairs A Few Times Per Day
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="moderately active"
                onChange={this.handleChange}
              />
              Moderately Active - Teacher, Salesman, Etc.
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="very active"
                onChange={this.handleChange}
              />
              Very Active - Carpenter, Mailman, Etc.
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="extremely active"
                onChange={this.handleChange}
              />
              Extremely Active - Soldier, Boxer, Etc.
            </div>
          </div>
          <div className="select">
            How Intense Is Your Excercise:
            <div>
              <input
                type="radio"
                name="intensity"
                value="none"
                onChange={this.handleChange}
              />
              None - Couch Potato
            </div>
            <div>
              <input
                type="radio"
                name="intensity"
                value="light"
                onChange={this.handleChange}
              />
              Light - Goofing Around At The Gym
            </div>
            <div>
              <input
                type="radio"
                name="intensity"
                value="moderate"
                onChange={this.handleChange}
              />
              Moderate - Occational Sight Seeing In The Gym
            </div>
            <div>
              <input
                type="radio"
                name="intensity"
                value="difficult"
                onChange={this.handleChange}
              />
              Difficult - Less than 30 Seconds Between Sets
            </div>
            <div>
              <input
                type="radio"
                name="intensity"
                value="intense"
                onChange={this.handleChange}
              />
              Intense - Watch Out For My Sweat
            </div>
          </div>
          <button className="submitcalc">CALCULATE</button>
        </form>
        <div>{this.state.age >= 20 ? <div>ADULT</div> : <div>CHILD</div>}</div>
      </div>
    );
  }
}

export default Calculator;
