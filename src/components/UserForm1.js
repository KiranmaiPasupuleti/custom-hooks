import React from 'react'
import UseInput from '../hooks/UseInput'

function UserForm1() {
    const [firstName, bindFirstName, resetFirstName] = UseInput('')
    const [lastName, bindLastName,resetLastName] = UseInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input
                 {...bindFirstName} 
                 type="text" />
            </div>
            <div>
                <label>Last Name</label>
                <input {...bindLastName} type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UserForm1