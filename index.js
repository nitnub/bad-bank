function Spa() {
  return (
    <>
      <h1>Welcome to Bad Bank</h1>
      <NavBar />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Spa />);

