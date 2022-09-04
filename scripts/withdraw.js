function Withdraw() {
  const ctx = React.useContext(UserContext);
  const handler = (context) => {
    const entry = document.getElementById('amount');
    const amount = entry.value;
    const [ currentUser ] = ctx.users.filter((user) => user.id === ctx.currentUser )
    
    console.log('ctx', ctx)
    console.log(currentUser.balance);
    console.log(amount);

    if (currentUser.balance >= amount) {
      console.log(ctx.users[ctx.currentUser].balance);
      ctx.users[ctx.currentUser].balance -= amount;
    }
    console.log('ctx', ctx)
  }

  return (
    <>
      <h1 className="section-header">Withdraw</h1>
      <BankForm
        // showName={false}
        // showEmail={false}
        // showPassword={false}
        showBalance
        showAmount
        handler={handler}
        color="success"
        title="Withdraw"
      />
    </>
  );
}
