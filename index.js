function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{userName: 'Test User!'}}>
        <Route path="/" exact component={Home} />
        <Route path="/createAccount/" exact component={CreateAccount} />
        <Route path="/login/" exact component={Login} />
        <Route path="/deposit/" exact component={Deposit} />
        <Route path="/withdrwaw/" exact component={Withdraw} />
        <Route path="/balance/" exact component={Balance} />
        <Route path="/allData/" exact component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Spa />);
