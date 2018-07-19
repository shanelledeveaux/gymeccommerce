import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      age: 0,
      feet: 0,
      inches: 0,
      weight: 0,
      goal: "",
      deficit: 0.2,
      activity: 0,
      intensity: "",
      calculate: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCalc = e => {
    this.setState({ calculate: !this.state.calculate });
  };

  render() {
    //BMR CALC
    var weightInKg = this.state.weight * 0.453592;
    var heightInIn = this.state.feet * 12 + parseInt(this.state.inches);
    var heightInCm = heightInIn * 2.54;
    var age = this.state.age;
    var femBMR = 655 + 9.6 * weightInKg + 1.8 * heightInCm - 4.7 * age;
    var maleBMR = 66 + 13.7 * weightInKg + 5 * heightInCm - 6.8 * age;

    //TDEE
    var femTdee = femBMR * this.state.activity;
    var maleTdee = maleBMR * this.state.activity;

    //SURPLUS OR DEFICIT CALC

    var gainMultiplier = 1 + this.state.deficit;
    var lossMultiplier = 1 - this.state.deficit;

    var femLoss = femTdee * lossMultiplier;
    var femGain = femTdee * gainMultiplier;

    var maleLoss = maleTdee * lossMultiplier;
    var maleGain = maleTdee * gainMultiplier;

    //MACRO CACLULATION
    var protein = this.state.weight;
    var fat = this.state.weight * 0.3;

    var proteinCal = protein * 4;
    var fatCal = fat * 9;

    var calBeforeCarbs = proteinCal + fatCal;

    return (
      <div className="calc_page">
        <div className="calculator">
          <div className="calc_input">
            <div className="calc_title">Gender:</div>
            <input
              type="radio"
              name="gender"
              value="male"
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
            <div className="calc_title">Age:</div>
            <input name="age" onChange={this.handleChange} />
          </div>
          <div>
            <div className="calc_title">Height</div>
            Feet: <input name="feet" onChange={this.handleChange} />
            Inches: <input name="inches" onChange={this.handleChange} />
          </div>
          <div>
            <div className="calc_title">Weight</div>
            <input name="weight" onChange={this.handleChange} />
          </div>
          <div className="select">
            <div className="calc_title">
              Describe Your Normal Daily Activity:
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="1.2"
                onChange={this.handleChange}
              />
              Sedentary - Desk Job
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="1.375"
                onChange={this.handleChange}
              />
              Lightly Active - Climb Stairs A Few Times Per Day
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="1.55"
                onChange={this.handleChange}
              />
              Moderately Active - Teacher, Salesman, Etc.
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="1.725"
                onChange={this.handleChange}
              />
              Very Active - Carpenter, Mailman, Etc.
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="1.9"
                onChange={this.handleChange}
              />
              Extremely Active - Soldier, Boxer, Etc.
            </div>
          </div>
          <div>
            <div className="calc_title">Goals</div>
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
          {this.state.goal === "loss" ? (
            <div>
              Calorie Deficit:
              <select name="deficit" onChange={this.handleChange}>
                <option value=".2">20% Suggested</option>
                <option value=".25">25% Aggressive</option>
                <option value=".3">30% Intense</option>
              </select>
            </div>
          ) : (
            <div>
              Calorie Surplus:
              <select name="deficit" onChange={this.handleChange}>
                <option value=".2">20% Suggested</option>
                <option value=".25">25% Aggressive</option>
                <option value=".3">30% Intense</option>
              </select>
            </div>
          )}
        </div>
        <div className="calc_results">
          <div>
            <div className="calc_title">BMR</div>
            {this.state.gender === "female" ? (
              <div>{Math.round(femBMR)}</div>
            ) : (
              <div>{Math.round(maleBMR)}</div>
            )}
          </div>
          <div>
            <div className="calc_title">TDEE:</div>
            {this.state.gender === "female" ? (
              <div>{Math.round(femTdee)}</div>
            ) : (
              <div>{Math.round(maleTdee)}</div>
            )}
          </div>
          <div>
            {this.state.goal === "loss" && this.state.gender === "female" ? (
              <div className="calc_">
                <div className="calc_title">Weight Loss Calories:{femLoss}</div>
                <div>
                  <div className="calc_title">Suggested Macros:</div>
                  <div>Protein: {protein}g/day</div>
                  <div>Fat: {fat}g/day</div>
                  <div>
                    Carbs: {Math.round((femLoss - calBeforeCarbs) / 4)}g/day
                  </div>
                </div>
              </div>
            ) : this.state.goal === "gain" && this.state.gender === "female" ? (
              <div>
                <div className="calc_title">
                  Weight Gain Calories: {Math.round(femGain)}
                </div>
                <div>
                  <div className="calc_title">Suggested Macros:</div>
                  <div>Protein: {protein}g/day</div>
                  <div>Fat: {fat}g/day</div>
                  <div>
                    Carbs: {Math.round((femGain - calBeforeCarbs) / 4)}g/day
                  </div>
                </div>
              </div>
            ) : this.state.goal === "loss" && this.state.gender === "male" ? (
              <div>
                <div className="calc_title">
                  Weight Loss Calories: {Math.round(maleLoss)}
                </div>
                <div>
                  <div className="calc_title">Suggested Macros:</div>
                  <div>Protein: {protein}g/day</div>
                  <div>Fat: {fat}g/day</div>
                  <div>
                    Carbs: {Math.round((maleLoss - calBeforeCarbs) / 4)}g/day
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="calc_title">
                  Weight Gain Calories: {Math.round(maleGain)}
                </div>
                <div>
                  <div className="calc_title">Suggested Macros:</div>
                  <div>Protein: {protein}g/day</div>
                  <div>Fat: {fat}g/day</div>
                  <div>
                    Carbs: {Math.round((maleGain - calBeforeCarbs) / 4)}g/day
                  </div>
                </div>
              </div>
            )}
            <button className="submitcalc" onClick={this.handleCalc}>
              SAVE TO PROFILE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
