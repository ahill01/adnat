import React, {useState, useEffect} from "react"

function Shifts({currentUser, shifts}){

    return(
<table>
    <tr>
        <th>Employee Name</th>
        <th>Shift Date</th>
        <th>Start Time</th>
        <th>Finish TIme</th>
        <th>Break Length</th>
        <th>Hours Worked</th>
        <th>Shift Cost</th>
    </tr>
    <tbody>
    {shifts.map((shift) => {
        {console.log(shift)}
        <tr>
        <td>{shift.date}</td>
        <td>{shift.start_time}</td>
        <td>{shift.finish_time}</td>
        <td>{shift.break_length}</td>
        <td>{shift.hours_worked}</td>
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