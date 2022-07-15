import React, {useState, useEffect} from "react"

function Shifts({currentUser, shifts}){

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
    {shifts.map((shift) => {
        return<tr>
        <td>{shift.employee_name}</td>
        <td>{shift.date}</td>
        <td>{shift.start_time}</td>
        <td>{shift.finish_time}</td>
        <td>{shift.break_length}</td>
        <td>{shift.hours_worked}</td>
        <td>{`$${shift.shift_cost}`}</td>
        </tr>
        })}
        <tr>
            <td>{currentUser.name}</td>
            <td><input type="text" name="date"></input></td>
            <td><input type="text" name="start"></input></td>
            <td><input type="text" name="finish"></input></td>
            <td><input type="text" name="break_length"></input></td>
            <td><button>create shift</button></td>
        </tr>
        </tbody>
</table>)
}

export default Shifts;