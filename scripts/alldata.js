function AllData() {
  const ctx = React.useContext(UserContext);
  console.log(ctx.users)
  return (


<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>




    
  );
}



{/* <div>
      <h1 className="section-header">All Data</h1>
      {ctx.users.map((user) => (
        <>
          <div className="card">
            <div className="card-body">
              <h5>{user.name}</h5>

              <table className="table">
                <tbody>
                  <tr>
                    <td className="text-success font-weight-bold">Customer ID:</td>
                    <td>{user.id}</td>
                  </tr>
                  <tr>
                    <td className="text-success font-weight-bold">Account Balance:</td>
                    <td>{formatAsCurrency(user.balance)}</td>
                  </tr>
                  <tr>
                    <td className="text-success font-weight-bold">Email:</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td className="text-success font-weight-bold">Password:</td>
                    <td>{user.password}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}

          {/* <ul>
            <li key={user.id}>
              <div>{`ID: ${user.id} || User: ${user.name} || Email: ${user.email} || Password: ${user.password}`}</div>
            </li>
          </ul> */}
        // </>
      // ))}
    {/* </div> */}