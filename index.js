const testMode = true;
let startState = { users: [] };
if (testMode) {

  for (let i = 0; i < 10; i++) {
    startState.users.push({
      id: i,
      name: 'John Smith',
      email: 'jsmith@abc.com',
      password: 'myPass123',
      balance: 100,
    });
  }
} 

function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <div className="content-container">
        <UserContext.Provider value={startState}>
          <Route path="/" exact component={Home} />
          <Route path="/createAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/allData/" component={AllData} />
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Spa />);
