import { createTransport } from 'nodemailer';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {

    require('dotenv').config()

    const transporter = createTransport({
      port: 465,     
      host: "smtp.gmail.com",  
      secure: true,
         auth: {
              user: process.env.NEXT_PUBLIC_MAIL_USER,
              pass: process.env.NEXT_PUBLIC_MAIL_PASS,
           },
    });

  const mailData = {
        from: process.env.NEXT_PUBLIC_MAIL_USER,
        to: `${req.body.email}`,
        subject: `お問い合わせありがとうございました ${req.body.name}様`,
        text: `お問い合わせを受け付けました。回答をお待ちください。`,
        html: `<div>お問い合わせを受け付けました。回答をお待ちください。<br>原文:<br>${req.body.message}</div><p>送信元: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success') 
    
  }   