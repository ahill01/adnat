import React from "react"
function OrgDetails({currentUser, org}){

    return(<div>
<p>{org.name}</p>
<button>edit</button>
<button>join</button>
    </div>)
}

export default OrgDetails;