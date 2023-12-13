import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import"./feed.css";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { CgProfile } from "react-icons/cg";
import Footer from '../Footer'

export default function Feedback() {

    const [feed,setfeed]=useState([
      {feedback:"amzing",userId:9856},
      {feedback:"incredible",userId:6423},
      {feedback:"i love it",userId:1607}
    ]);
    const [msg,setmsg]=useState("");
    const sendmsg = () => {
      setfeed([...feed, { feedback: msg, userId: Math.floor(Math.random() * 10000) + 1 }]);
      setmsg("");
    };
  return (
    <div className='aa'>
        <div className=' fback justify-content-center'>
      <h1>Comment</h1>
        {
                feed.map((s,l)=>{
                    return (<Alert className=' text-center justify-content-center   cmnt' key='secondary'  value={s} variant="secondary"> 
                    <CgProfile className='profile' />
                    <div>
                    <h6>user {s.userId} </h6>
                    <h3>{s.feedback} </h3>
                    </div>
                    </Alert>)
                })}
        </div>
        
        <Form.Group className="  msg stiky-bottom mx-5 px-5 " controlId="exampleForm.ControlTextarea1">
        <Form.Label>your opinion:</Form.Label>
        <Form.Control value={msg} onChange={(e)=>{setmsg(e.target.value)}} as="textarea" rows={1} />
        <Button onClick={sendmsg} type="submit">send</Button>
      </Form.Group>

      <Footer className="stiky-bottom ff " />
    </div>
  )
}
