import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core';

const Contact:React.FC = () => {
    const [name,setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    return (
      <div className="contact">
      <TextField
        label = 'Name'
        value = {name}
        onChange = {(e) => setName(e.target.value)}
      />
       <TextField
        label = 'Subject'
        value = {subject}
        onChange = {(e) => setSubject(e.target.value)}
      />
       <TextField
        label = 'Email'
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
      />
       <TextField
        label = 'Message'
        value = {message}
        onChange = {(e) => setMessage(e.target.value)}
      />
      <Button>
      Send Message
      </Button>
      </div>
    )
  }
  
  export default Contact