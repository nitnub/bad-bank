function BankForm(props) {
  const {
    showName,
    showEmail,
    showPassword,
    showAmount,
    showBalance,
    handler,
    color,
    title,
  } = props;
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus(`Error: ${label}`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    ctx.users.push({ name, email, password, balane: 100 });
    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgColor={color}
      header={title}
      status={status}
      body={
        <>
          {showName && (
            <>
              Name1
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <div className="form-spacer" />
            </>
          )}
          {showEmail && (
            <>
              Email
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <div className="form-spacer" />
            </>
          )}
          {showPassword && (
            <>
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <div className="form-spacer" />
            </>
          )}
          {showBalance && (
            <>
              <h2>Balance</h2>
              <h3>{ctx.balance}</h3>
            </>
          )}
          {showAmount && (
            <>
              {`${title} Amount`}
              <br />
              <input
                type="number"
                className="form-control"
                id="amount"
                placeholder={`${title} Amount`}
                value={amount}
                onChange={(e) => setAmount(e.currentTarget.value)}
              />
              <div className="form-spacer" />
            </>
          )}

          {handler && (
            <>
              <button type="submit" className="btn btn-light" onClick={handler}>
                {title}
              </button>
            </>
          )}
        </>
      }
    />
  );
}
