function Withdraw() {
  return (
    <BankForm
      // showName={false}
      // showEmail={false}
      // showPassword={false}
      showBalance
      showAmount
      handler
      color="success"
      title="Withdraw"
    />
  );
}
