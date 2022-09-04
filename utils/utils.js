function formatAsCurrency(int) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 10,
  });
  return formatter.format(int);
}

function getCurrentUser(context) {
  const [currentUser] = context.users.filter(
    (user) => user.id === context.currentUser
  );
  return currentUser;
}

function currencyToInt(string) {
  // TODO: Account for decimal inputs
  const numAsString = string
    .replace('$', '')
    .replace(',', '')
    .replace('.00', '');
  return Number(numAsString);
  // }
}
console.log(typeof currencyToInt(formatAsCurrency(888)));
