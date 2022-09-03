function Deposit() {
  return (
    <BankForm
      showName={false}
      showEmail={false}
      showPassword={false}
      showBalance={true}
      showAmount={true}
      handler={true}
      color="warning"
      title="Deposit"
    />
  );
}
