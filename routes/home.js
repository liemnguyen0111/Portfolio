const router = require("express").Router();
const nodemailer = require("nodemailer");

const dotenv = require('dotenv').config()

router.post('/send', (req, res) =>
{

    send(req.body)
    respond(req.body)
    .then(()=>{
        
        res.sendStatus(200)
    })
})

let send = async (user) => {

    let output = `
    You have a new message from ${user.firstName} ${user.lastName}
    Contact Details: 
    
        Name: ${user.firstName}  ${user.lastName}
        Company: ${user.company}
        Email: ${user.email}
        Phone: ${user.phone}
        Date: ${new Date()}
    
     Message:
        ${user.message}
    `
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.USER, // generated ethereal user
        pass: process.env.PASS, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"${user.firstName} ${user.lastName} 👻" <${user.email}>`, // sender address
      to: `timportfolio0111@gmail.com`, // list of receivers
      subject: `New message from ${user.firstName} ${user.lastName}`, // Subject line
      text:  output, // plain text body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
  }
  

  let respond = async (user) => {
  
    let output = `
    <b>Thank you ${user.firstName} ${user.lastName} !</b>
    <p>Your message has been sent, I'll check my email and get back to you as soon as possible.</p>
    <br /> 
    <p>Thank you,</p>
    <p>Tim Nguyen</p>
    <p>Email: timportfolio0111@gmail.com</p>
    <p>Cell: (657) 206-2211</p>
    `

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.USER, // generated ethereal user
        pass: process.env.PASS // generated ethereal password
      },
    });
  
    let message = `Hi ${user.firstName}, \n I've received your message, I'll get back to you as soon as possible. \n Thank you :)`

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Tim Nguyen 👻" <${user.email}>`, // sender address
      to: `timportfolio0111@gmail.com, ${user.email}`, // list of receivers
      subject: `Tim Portfolio`, // Subject line
      text: `${user.firstName}, thank you !`, // plain text body
      html: output, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
  }
  


module.exports = router;