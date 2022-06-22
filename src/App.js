import './index.css';
import React, {useState} from 'react'
import Attend from './Attend'

function App() {

  const initialTalks = []

  const [month, setMonth] = useState("")
  const [week, setWeek] = useState("")

  const [currentCount, setCount] = useState(0)
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [talks, setTalks]  = React.useState(initialTalks);
  let listTalks = ''
  if (month != "") {listTalks = talks.filter(talk => (new Date(talk.date).getMonth() + 1).toString() === month).map((talk) => (
    <div className="talks" key={talk.title}>
        <div className="talk">
            {talk.title} taken by {talk.name} at {talk.time} on {talk.date}
            <Attend></Attend>
            <br></br>
        </div>
    </div>
  ))} else {
    talks.map((talk) => (
    <div className="talks" key={talk.title}>
        <div className="talk">
            <p>{talk.title} taken by {talk.name} at {talk.time} on {talk.date}</p>
            <Attend></Attend>
        </div>
    </div>
  ))}

  function handleAdd(event) {
      event.preventDefault();
      let talk = {
        title: title,
        name: name,
        time: time,
        date: date
      }
      const list = talks.concat(talk)
      setTalks(list)
      setCount(currentCount + 1)
      setTitle("")
      setName("")
      setDate("")
      setTime("")
  }

  function handleTitle(event) {
      setTitle(event.target.value)
  }
  function handleName(event) {
      setName(event.target.value)
  }
  function handleDate(event) {
      console.log(event)
      setDate(event.target.value)
  }
  function handleTime(event) {
    setTime(event.target.value)
  }
  function handleMonth(event) {
    setMonth(event.target.value)
  }
  function handleWeek(event) {
    setWeek(event.target.value)
  }

  return (
    <div className='techTalk'>
      <div className='add'>
        <h4>Add a Tech Talk</h4>
          Title:
          <input type='text' value={title} onChange={handleTitle}></input>
          <br></br>
          Name:
          <input type='text' value={name} onChange={handleName}></input>
          <br></br>
          Time:
          <input type='time' value={time} onChange={handleTime}></input>
          <br></br>
          Date:
          <input type='date' value={date} onChange={handleDate}></input>
          <br></br>
          <button onClick={handleAdd}>Add</button>
      </div>
        <div className='view'>
          <h4>View Tech Talks</h4>
          Number of tech talks available: {currentCount}
          <br></br>
          <br></br>
          View by Week:<input type='text' value={week} onChange={handleWeek}></input>
          <br></br>
          View by Month<input type='text' value={month} onChange={handleMonth}></input>
          <br></br>
          <br></br>
          {listTalks}
        </div>
    </div>
  )
}

export default App;
