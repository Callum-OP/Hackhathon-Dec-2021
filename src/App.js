import './App.css';
import React, {useState} from 'react'

function App() {

  const initialTalks = []
  const entry = ""
  const [currentCount, setCount] = useState(0)
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [talks, setTalks]  = React.useState(initialTalks);
  const listTalks = talks.map((talk) => (
      <div className="talks" key={talk}>
          <div className="talk">
              {talk}
          </div>
      </div>
  ))

  function handleAdd(event) {
      event.preventDefault();
      const newEntry = entry.concat(title, " taken by ", name, " at ", time, " on ", date)
      const list = talks.concat(newEntry)
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
      setDate(event.target.value)
  }
  function handleTime(event) {
    setTime(event.target.value)
  }

  return (
    <div className='techTalk'>
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
        <div>
          <h4>View Tech Talks</h4>
          <p>Number of tech talks available: {currentCount}</p>
          {listTalks}
        </div>
    </div>
  )
}

export default App;
