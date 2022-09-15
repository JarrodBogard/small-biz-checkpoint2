const state = {
  user: {
    username: "user1",
    email: "user1@test.com",
    password: "password",
  },
  listings: [
    {
      id: 1,
      name: "Romero's",
      description:
        "Come in for the best Italian food in town. Located in the heart of Dallas, we have the best views and the best pasta sauce. See you soon.",
      hours: "11am - 10pm",
      address: "1045 Buckmore Ave, Dallas, TX 75087",
    },
    {
      id: 2,
      name: "Brick House",
      description:
        "Best Pizza in West Dallas. Our specialties are classic pepperoni and supreme pies. Our sauce was voted #1 in all of Texas 7 years in a row. Don't miss out on our Friday BOGO deals.",
      hours: "12pm - 12am",
      address: "111 Whitimer St, Dallas, TX 75206",
    },
    {
      id: 3,
      name: "Crepe Town",
      description:
        "If you're looking for the best brunch in town you have found the spot. Known for our great crepes and coffee, you won't be disappointed. Come join us for our weekend specials.",
      hours: "10am - 9pm",
      address: "1717 Circle Ct, Dallas, TX 75207",
    },
  ],
  map: {},
  isLogged: false,
  detailsList: [],
};

export default state;

// {
//   id: 3,
//   name: "Crepe Town",
//   description:
//     "If you're looking for the best brunch in town you have found the spot. Known for our great crepes and coffee, you won't be disappointed. Come join us for our weekend specials.",
//   hours: {
//     open: "10am",
//     close: "9pm",
//   },
//   address: {
//     street: "1717 Circle Ct",
//     city: "Dallas",
//     state: "TX",
//     zip: 34567,
//   },
// },
