import React, {useState} from 'react'

function Attend() {

  const initialAttendees = []
  const entry = ""
  const [currentCount, setCount] = useState(0)
  const [name, setName] = useState("")
  const [attendees, setAttendees]  = React.useState(initialAttendees);
  const listNames = attendees.map((name) => (
      <div className="name" key={name}>
          <div className="name">
              {name} is attending
          </div>
      </div>
  ))

  function handleAdd(event) {
      event.preventDefault();
      const newEntry = entry.concat(name)
      const list = attendees.concat(newEntry)
      setAttendees(list)
      setCount(currentCount + 1)
      setName("")
  }

  function handleName(event) {
      setName(event.target.value)
  }

  return (
    <div className='attendees'>
        Enter Name:
        <input type='text' value={name} onChange={handleName}></input>
        <br></br>
        <button onClick={handleAdd}>Attend</button>
        <div>
          Number of attendees: {currentCount}
          {listNames}
        </div>
    </div>
  )
}

export default Attend;