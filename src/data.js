export const rows = [
  {
    id: 1,
    name: "Jackqueline",
    email: "jmeaddowcroft0@shutterfly.com",
    phone: "8693252654",
  },
  {
    id: 2,
    name: "Ellerey",
    email: "efrudd1@multiply.com",
    phone: "9464865224",
  },
  {
    id: 3,
    name: "Concettina",
    email: "ctalboy2@smh.com.au",
    phone: "9926089049",
  },
  {
    id: 4,
    name: "Georg",
    email: "gkibbye3@bbb.org",
    phone: "7954434598",
  },
  {
    id: 5,
    name: "Benedick",
    email: "bloosley4@omniture.com",
    phone: "2413300630",
  },
  {
    id: 6,
    name: "Jobey",
    email: "jgoldenofireland5@epa.gov",
    phone: "4238165578",
  },
  {
    id: 7,
    name: "Ambrosio",
    email: "acork6@sfgate.com",
    phone: "9208434306",
  },
  {
    id: 8,
    name: "Ari",
    email: "apauwel7@cdbaby.com",
    phone: "7859989250",
  },
  {
    id: 9,
    name: "Marcelo",
    email: "mlyle8@blogs.com",
    phone: "4432784629",
  },
  {
    id: 10,
    name: "Ronald",
    email: "rbiggadike9@imdb.com",
    phone: "7979368143",
  },
  {
    id: 11,
    name: "Rodney",
    email: "rfairliea@gmpg.org",
    phone: "6659234674",
  },
  {
    id: 12,
    name: "Carina",
    email: "ctollemacheb@mediafire.com",
    phone: "5612073985",
  },
  {
    id: 13,
    name: "Nollie",
    email: "nlavignec@tmall.com",
    phone: "7119762657",
  },
  {
    id: 14,
    name: "Malena",
    email: "mwoolfalld@sphinn.com",
    phone: "1585079557",
  },
  {
    id: 15,
    name: "Gustaf",
    email: "gmeriote@ucoz.ru",
    phone: "4503079018",
  },
  {
    id: 16,
    name: "Othello",
    email: "oworsamf@miitbeian.gov.cn",
    phone: "7314966892",
  },
  {
    id: 17,
    name: "Barde",
    email: "bmegroffg@dailymail.co.uk",
    phone: "7099210946",
  },
  {
    id: 18,
    name: "Cloris",
    email: "cluxenh@networkadvertising.org",
    phone: "9031221012",
  },
  {
    id: 19,
    name: "Eugen",
    email: "eupstelli@cnn.com",
    phone: "7162759208",
  },
  {
    id: 20,
    name: "Katerina",
    email: "klynesj@ebay.co.uk",
    phone: "2518961204",
  },
];

export const sortTypes = {
  name: {
    up: {
      class: "sort-up",
      fn: (a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      },
    },
    down: {
      class: "sort-down",
      fn: (a, b) => {
        if (b.name < a.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0;
      },
    },
    default: {
      class: "sort",
      fn: (a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      },
    },
  },
  email: {
    up: {
      class: "sort-up",
      fn: (a, b) => {
        if (a.email < b.email) {
          return -1;
        }
        if (a.email > b.email) {
          return 1;
        }
        return 0;
      },
    },
    down: {
      class: "sort-down",
      fn: (a, b) => {
        if (b.email < a.email) {
          return -1;
        }
        if (b.email > a.email) {
          return 1;
        }
        return 0;
      },
    },
    default: {
      class: "sort",
      fn: (a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      },
    },
  },
  phone: {
    up: {
      class: "sort-up",
      fn: (a, b) => {
        if (a.phone < b.phone) {
          return -1;
        }
        if (a.phone > b.phone) {
          return 1;
        }
        return 0;
      },
    },
    down: {
      class: "sort-down",
      fn: (a, b) => {
        if (b.phone < a.phone) {
          return -1;
        }
        if (b.phone > a.phone) {
          return 1;
        }
        return 0;
      },
    },
    default: {
      class: "sort",
      fn: (a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      },
    },
  },
};
