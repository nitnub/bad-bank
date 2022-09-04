function Deposit() {
  const ctx = React.useContext(UserContext);
  const handler = (context) => {
    const entry = document.getElementById('amount');
    const amount = entry.value;
    const [currentUser] = ctx.users.filter(
      (user) => user.id === ctx.currentUser
    );

    console.log('ctx', ctx);
    console.log(currentUser.balance);
    console.log(amount);

    console.log(ctx.users[ctx.currentUser].balance);
    ctx.users[ctx.currentUser].balance += Number(amount);

    alert(
      `Transaction complete. ${formatAsCurrency(
        // currentUser.balance
        amount
      )} has been deposited into your account.`
    );
  };
  console.log('ctx', ctx);

  return (
    <BankForm
      // showName={false}
      // showEmail={false}
      // showPassword={false}
      showBalance
      showAmount
      handler={handler}
      color="warning"
      title="Deposit"
    />
  );
}
