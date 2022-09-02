function Home() {
  return (
    <Card
      bgColor="info"
      txtColor="white"
      header="BadBank Landing Page"
      title="Welcome to the bank"
      text="You can use this bank"
      body={
        <img
          src="../img/bank.png"
          className="img-fluid"
          alt="Responsive Bank"
        />
      }
    />
  );
}
