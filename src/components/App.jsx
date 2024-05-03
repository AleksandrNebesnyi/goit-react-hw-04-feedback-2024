import { Component } from 'react'
import { Title } from './Title';
import css from './App.module.css'


export class App extends Component {
state ={
  good: 0,
  neutral: 0,
  bad: 0
};

onBtnClick =e=>{
const keyName=e.currentTarget.name;
this.setState(prevState=>{
  return {
    [keyName]:prevState[keyName]+1
  }
})
};

 makeButton =(options)=>{
  return options.map(option=>(
  <button key={option} className={css.button}type='button' name={option} onClick={this.onBtnClick}>{option}</button>))
 };


 countTotalFeedback=()=>{
  return Object.values(this.state).reduce((acc,currentItem)=>acc+currentItem,0)
 };
 countPositiveFeedbackPercentage=()=>{
  const { good } = this.state;
    if (good === 0) return 0;
    return Math.floor((good / this.countTotalFeedback()) * 100);

 }

render() { 
 const  {good,neutral,bad}=this.state; 
 const  options = Object.keys(this.state);

return(
<div className={css.container} >

<Title text='Please leave fidback'>
  <div className={css.btnContainer}>
  {this.makeButton(options)}  
  </div>
</Title> 

<Title text='Statistics'>
<div>
{this.countTotalFeedback()<=0 ? <p>No feedback given</p> : <>
<p className={css.statisticItem}>Good:{good}</p>
  <p className={css.statisticItem}>Neutral:{neutral}</p>
  <p className={css.statisticItem}>Bad:{bad}</p>
  <p className={css.statisticItem}>Total:{(this.countTotalFeedback())}</p>
  <p className={css.statisticItem}>Positiv Feedback:{this.countPositiveFeedbackPercentage()}</p>
</>}
   
  </div>
</Title>
  </div>
)

}
};