function EditOrgForm({currentUser, org}){

    function editUserOrg(){

    }
    return(<div>
  <h3>Edit Organization</h3>
<form onSubmit={editUserOrg}>
    <label htmlFor="name">Organization Name</label>
    <input type="text" name="name" value={`${org.name}`} onChange={editUserOrg}></input>
    <br></br>
    <label htmlFor="hourly_rate">Hourly Rate</label>
    <input type="text" name="hourly_rate" value={`${org.hourly_rate}`} onChange={editUserOrg}></input>
    <br/>
   <button type="submit">Update</button>
</form>
        <button>Delete</button>
    </div>)
}

export default EditOrgForm;