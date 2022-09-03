function Login() {
  const ctx = React.useContext(UserContext);
  const { userName } = ctx;
  return (
    <BankForm
      // showName
      showEmail
      showPassword
      // showBalance
      // showAmount
      handler
      color="primary"
      title="Login"
    />

    // <Card
    //   bgColor="primary"
    //   header="Create Account"
    //   status={1}
    //   body={
    //     <>
    //       Name
    //       <br />
    //       <input
    //         type="input"
    //         className="form-control"
    //         id="name"
    //         placeholder="Enter name"
    //         value={name}
    //         onChange={(e) => setName(e.currentTarget.value)}
    //       />
    //       Email
    //       <br />
    //       <input
    //         type="input"
    //         className="form-control"
    //         id="email"
    //         placeholder="Enter email"
    //         value={email}
    //         onChange={(e) => setEmail(e.currentTarget.value)}
    //       />
    //       Password
    //       <br />
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="password"
    //         placeholder="Enter password"
    //         value={password}
    //         onChange={(e) => setPassword(e.currentTarget.value)}
    //       />
    //       <button
    //         type="submit"
    //         className="btn btn-light"
    //         onClick={handleCreate}
    //       >
    //         Create Account
    //       </button>
    //     </>
    //   }
    // />
  );
}
