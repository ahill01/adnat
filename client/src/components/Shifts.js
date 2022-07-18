import React, {useState, useEffect} from "react"

function Shifts({currentUser, org, shifts,setShifts}){
const [shiftInfo, setShiftInfo]=useState({date:Date.now(),start:Date.now(),finish:Date.now(),break_length:0})


function handleChange(e){
        setShiftInfo({...shiftInfo,[e.target.name]:e.target.value})
}

function createShift(){
    let start_date=new Date(shiftInfo.date.toString()+"T"+shiftInfo.start.toString())
    let finish_date=new Date(shiftInfo.date.toString()+"T"+shiftInfo.finish.toString())
    debugger;
    fetch('/shifts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            start:start_date,
            finish:finish_date,
            break_length:parseInt(shiftInfo.break_length),
            organization_id:org.id,
            user_id:currentUser.id}) 
   })
   .then(res=> {
    if(!res.ok) throw new Error(res.status);
    else return res.json();
   })
   .then((new_shift) => {
      setShifts([...shifts,new_shift])
      debugger;
    })
    .catch((error) =>{
        console.log('error: '+error)
    })


}
    return(
<table>
    <thead>
        <th>Employee Name</th>
        <th>Shift Date</th>
        <th>Start Time</th>
        <th>Finish Time</th>
        <th>Break Length (minutes)</th>
        <th>Hours Worked</th>
        <th>Shift Cost</th>
    </thead>
  <tbody>
    {shifts[0] ? shifts.map((shift) => {
        return<tr>
        <td>{shift.employee_name}</td>
        <td>{shift.date}</td>
        <td>{shift.start_time}</td>
        <td>{shift.finish_time}</td>
        <td>{shift.break_length}</td>
        <td>{shift.hours_worked}</td>
        <td>{`$${shift.shift_cost}`}</td>
        </tr>
        }):null}
        <tr>
            <td>{currentUser.name}</td>
            <td><input type="date" name="date" value={shiftInfo.date} onChange={handleChange}></input></td>
            <td><input type="time" name="start" value={shiftInfo.start} onChange={handleChange}></input></td>
            <td><input type="time" name="finish" value={shiftInfo.finish} onChange={handleChange}></input></td>
            <td><input type="text" name="break_length" value={shiftInfo.break_length} onChange={handleChange}></input></td>
            <td><button onClick={createShift}>create shift</button></td>
        </tr>
        </tbody>
</table>)
}

export default Shifts;