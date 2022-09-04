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
  const [amount, setAmount] = React.useState('0');
  const ctx = React.useContext(UserContext);

  // const currentUser = getCurrentUser(ctx);
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
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setAmount(0);
    setShow(true);
  }

  function onSubmit(e) {
    e.preventDefault();
    // TODO: Check form validation
    handler(ctx);
    clearForm();
  }

  return (
    <Card
      bgColor={color}
      header={title}
      status={status}
      body={
        <form onSubmit={(e) => onSubmit(e)}>
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
              <h3>{formatAsCurrency(getCurrentUser(ctx).balance)}</h3>
            </>
          )}
          {showAmount && (
            <>
              {`${title} Amount`}
              <br />
              <input
                type="number"
                className="form-control amount"
                id="amount"
                placeholder={`${title} Amount`}
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.currentTarget.value)}
              />
              <div className="form-spacer" />

              {/*  */}

              <div className="input-group mb-3">
                <span className="input-group-text currency">$</span>
                <input
                  type="text"
                  className="form-control amount"
                  id="amount"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder={`${title} Amount`}
                  min="0"
                  value={formatAsCurrency(amount)}
                  onChange={(e) => setAmount(e.currentTarget.value)}
                />
                <span className="input-group-text decimal">.00</span>
              </div>

              {/*  */}
            </>
          )}

          {handler && (
            <>
              <div className="modal-dialog modal-dialog-centered">qsqs</div>
              <button
                type="submit"
                className="btn btn-light"
                disabled={amount === '0'}
              >
                {title}
              </button>
            </>
          )}
        </form>
      }
    />
  );
}
