import React from 'react'
import StatisticsLine from './StatisticsLine'

const Statistics = (props) => {

  let total = () => {
    return props.good + props.bad + props.neutral
  }

  let avg = () => {
    return total() === 0 ? 0 : ((props.good - props.bad) / total()).toFixed(2)
  }

  let positive = () => {
    return total() === 0 ? '0%' : ((props.good / total()) * 100).toFixed(2) + '%'
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text="Good" value={props.good}/>
        <StatisticsLine text="Bad" value={props.bad}/>
        <StatisticsLine text="Neutral" value={props.neutral}/>
        <StatisticsLine text="All" value={total()}/>
        <StatisticsLine text="Average" value={avg()}/>
        <StatisticsLine text="Positive" value={positive()}/>
      </tbody>
    </table>
  )
}

export default Statistics
