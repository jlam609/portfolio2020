import React, { useState } from "react";
import { IconButton, TextField, Tooltip, Typography } from "@material-ui/core";
import { Element } from "react-scroll";
import EmailIcon from "@material-ui/icons/Email";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs, { init } from "emailjs-com";
init("user_lw12oTK6jtgR5nTgqg1Ny");

toast.configure()

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("service_43blxwz", "template_kk4oh2s", {
        name,
        subject,
        email,
        message,
      })
      .then((response) => {
        if (response.status == 200) {
          toast("Email Sent Succesfully!", { type: "success" });
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
        }
      })
      .catch((e) => console.error(e));
  };
  return (
    <Element name="Contact">
      <div className="contact">
        <Typography variant="h3">Contact Me!</Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Tooltip title="Send Email">
          <IconButton size="medium" onClick={(e) => sendEmail(e)}>
            Send <br /> <EmailIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>
    </Element>
  );
};

export default Contact;
