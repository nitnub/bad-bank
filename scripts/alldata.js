function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h1>AllData</h1>
      {ctx.users.map((user) => (
        <div>{`User: ${user.name} || Email: ${user.email} || Password: ${user.password}`}</div>
      ))}
    </>
  );
}
