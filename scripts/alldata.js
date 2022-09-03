function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h1>AllData</h1>
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
          </div>

          {/* <ul>
            <li key={user.id}>
              <div>{`ID: ${user.id} || User: ${user.name} || Email: ${user.email} || Password: ${user.password}`}</div>
            </li>
          </ul> */}
        </>
      ))}
    </div>
  );
}
