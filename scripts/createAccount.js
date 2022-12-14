function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus(`Error: ${label}`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  const handler = () => {
    console.log(name, email, password);
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    ctx.users.push({
      id: ctx.users.length,
      name,
      email,
      password,
      balance: 100,
    });
    setShow(false);
  };

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <>
      <h1 className="section-header">Create Account</h1>
      {show ? (
        <BankForm
          showName
          showEmail
          showPassword
          // showBalance
          // showAmount
          handler={handler}
          color="warning"
          title="Deposit"
        />
      ) : (
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>
            Add another account
          </button>
        </>
      )}
    </>
  );
}
