const Table=({ tableData })=> {
    return (
      <table className="table" id="datatable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index} id={`row${index+1}`}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.password}</td>
                <td><button id={`row${index+1}-btn`} className="btn btn-danger" onClick={(e)=>{
                    let tempid = e.target.id.split("-")[0];
                    console.log(tempid);
                    document.getElementById(tempid).remove();
                }}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  export default Table;