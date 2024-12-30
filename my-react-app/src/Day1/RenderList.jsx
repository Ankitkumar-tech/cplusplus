import React from 'react'

export const RenderList = () => {

    const employees = [
        { id: 1, name: "John Doe", designation: "Software Engineer" },
        { id: 2, name: "Jane Smith", designation: "UI/UX Designer" },
        { id: 3, name: "Alice Johnson", designation: "Project Manager" }
    ];
    
  return (
    <>
      <p>Employees</p>
      {employees?.map((e)=>
      <div key={e.id} style={{border:"10px Solid Red"}}>
        <p >{e?.name} +{" "}+ {e?.designation}</p>
      </div>
    )}
    </>
  )
}
