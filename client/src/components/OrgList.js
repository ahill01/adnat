import React from "react"
import OrgDetails from "./OrgDetails"

function OrgList({currentUser, orgs, setOrgs}){

    return(<div>
{orgs.map((org) => <OrgDetails key={org.id} org={org}/> )}
        </div>)
}

export default OrgList;