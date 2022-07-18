import React from "react"
import OrgDetails from "./OrgDetails"

function OrgList({currentUser, orgs, setAllOrgs,joinOrg}){

    return(<div>
{orgs.map((org) => <OrgDetails key={org.id} setAllOrgs={setAllOrgs} org={org} joinOrg={joinOrg}/> )}
        </div>)
}

export default OrgList;