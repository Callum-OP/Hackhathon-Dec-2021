import React, {useState} from 'react'

function Attend() {

  const initialAttendees = []
  const entry = ""
  const [currentCount, setCount] = useState(0)
  const [name, setName] = useState("")
  const [attendees, setAttendee]  = React.useState(initialAttendees);
  const listTalks = talks.map((talk) => (
      <div className="talks" key={talk}>
          <div className="talk">
              {talk}
          </div>
      </div>
  ))

  function handleAdd(event) {
      event.preventDefault();
      const newEntry = entry.concat(name)
      const list = talks.concat(newEntry)
      setAttendees(list)
      setCount(currentCount + 1)
      setName("")
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