function AllData() {
  const ctx = React.useContext(UserContext);
  console.log(ctx.users);
  return (
    <table className="table">
      <thead>
        <tr>
          {/* <th scope="col">#</th> */}
          <th scope="col">Email</th>
          <th scope="col">Name</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
        {ctx.users.map((user) => {
          return (
            <tr>
              {/* <th scope="row">1</th> */}
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.password}</td>
            </tr>
          );
        })}

      </tbody>
    </table>
  );
}

{
  /* <div>
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
          </div> */
}

{
  /* <ul>
            <li key={user.id}>
              <div>{`ID: ${user.id} || User: ${user.name} || Email: ${user.email} || Password: ${user.password}`}</div>
            </li>
          </ul> */
}
// </>
// ))}
{
  /* </div> */
}
