import TicketNm from "./ticketNm";
import './ticket.css'
export default function Ticket({ticketf}){
  return (
    <div className="ticket">
      {ticketf.map((num,idx)=>{
          return<TicketNm num={num} key={idx}/>
       })}
    </div>
  )
}