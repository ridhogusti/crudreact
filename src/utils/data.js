const users = [
  {
    id: 1,
    name: "Admin",
    username: "admin",
    password: "admin",
    role: "admin"
  },
  {
    id: 2,
    name: "Customer",
    username: "customer",
    password: "customer",
    role: "customer"
  }
];

const stock = [
  {
    _id: "5d2b639d93998c42dcb12e0e",
    guid: "b3227f0f-4647-402a-8ffb-f33b8490e393",
    isActive: false,
    warna: "mocha",
    kategori: "celana",
    ukuran: "m",
    name: "Buck Marks"
  },
  {
    _id: "5d2b639d47c763e6465a7664",
    guid: "245e2561-8f65-4c3c-8c9a-74640b261092",
    isActive: false,
    warna: "hitam",
    kategori: "celana",
    ukuran: "xl",
    name: "Mills Yang"
  },
  {
    _id: "5d2b639de815a53a177d1a9e",
    guid: "325391cf-8369-4d35-ac35-794f8ce0dbc0",
    isActive: true,
    warna: "hitam",
    kategori: "jaket",
    ukuran: 28,
    name: "Gwendolyn Bryant"
  },
  {
    _id: "5d2b639d7b8c95fe2a6ec9bc",
    guid: "7064921c-3026-4cba-a61f-a5a51a3ba4e5",
    isActive: false,
    warna: "mocha",
    kategori: "celana",
    ukuran: 30,
    name: "Rush Atkins"
  },
  {
    _id: "5d2b639d8c7eb0cfdf6566f9",
    guid: "b058f77a-d838-4159-a23f-77a9c7ea22da",
    isActive: false,
    warna: "hitam",
    kategori: "jaket",
    ukuran: "m",
    name: "Jennings Howe"
  },
  {
    _id: "5d2b639dc43f333553db032a",
    guid: "761105d1-f47d-4234-9388-d1b1522578a5",
    isActive: false,
    warna: "mocha",
    kategori: "jaket",
    ukuran: 27,
    name: "Rosario Hood"
  },
  {
    _id: "5d2b639d1c31a53114406932",
    guid: "47cf9724-8c2c-488a-b6c3-546353a31ddf",
    isActive: false,
    warna: "cream",
    kategori: "jaket",
    ukuran: "xl",
    name: "Juana Cabrera"
  },
  {
    _id: "5d2b639d1f82c19048a9af5d",
    guid: "e22c7229-d93a-404e-bdd4-8308b588bd53",
    isActive: false,
    warna: "cream",
    kategori: "kaos",
    ukuran: "m",
    name: "Weeks Carson"
  },
  {
    _id: "5d2b639da4a6815bf3bf5e72",
    guid: "54c39006-8ca5-427b-b85d-33a87bf09ae7",
    isActive: false,
    warna: "hitam",
    kategori: "kaos",
    ukuran: "m",
    name: "Maura Barber"
  },
  {
    _id: "5d2b639d2cb6989d7ea36290",
    guid: "01ee19df-a11d-47d3-855e-691a4c4697b2",
    isActive: true,
    warna: "cream",
    kategori: "celana",
    ukuran: "m",
    name: "Maryann Webb"
  },
  {
    _id: "5d2b639d98fab173c6670772",
    guid: "65f32408-3eb9-43b2-ae1e-708c34637f9c",
    isActive: true,
    warna: "cream",
    kategori: "kaos",
    ukuran: 27,
    name: "Hayes Gray"
  },
  {
    _id: "5d2b639dafaff69fa7b4e649",
    guid: "c2088cf5-632b-4f4a-ac0e-b61eb800e4f5",
    isActive: false,
    warna: "hitam",
    kategori: "kaos",
    ukuran: 30,
    name: "Ivy Kelly"
  },
  {
    _id: "5d2b639d311ac2dc18a8f5ab",
    guid: "42dd8a34-2587-4feb-b7be-dc9fe9270be7",
    isActive: true,
    warna: "cream",
    kategori: "kaos",
    ukuran: "xl",
    name: "Geneva Harmon"
  },
  {
    _id: "5d2b639def1036fefc9034ef",
    guid: "6c464675-98e2-40e1-b5ca-ddf24e91729b",
    isActive: true,
    warna: "mocha",
    kategori: "kaos",
    ukuran: "xl",
    name: "Huffman Barnes"
  },
  {
    _id: "5d2b639d4df4563eb2cb89a4",
    guid: "f85c7a5a-d41b-4308-81ea-9caf66a45ce4",
    isActive: true,
    warna: "hitam",
    kategori: "kaos",
    ukuran: 28,
    name: "Melton Boone"
  },
  {
    _id: "5d2b639d59155a09b734660e",
    guid: "d63ba9f6-f6ec-4a04-a69a-30a251c6671c",
    isActive: false,
    warna: "hitam",
    kategori: "celana",
    ukuran: "s",
    name: "Robbins Beasley"
  },
  {
    _id: "5d2b639df4a2dac62bcd8171",
    guid: "1e7a988f-0f0b-4a6b-a135-dcae0c8f5855",
    isActive: true,
    warna: "mocha",
    kategori: "jaket",
    ukuran: 27,
    name: "Solis Booth"
  },
  {
    _id: "5d2b639da9228de5ac482217",
    guid: "d983edad-0e12-40e0-bdb9-b26ce7d8dbc7",
    isActive: false,
    warna: "mocha",
    kategori: "jaket",
    ukuran: "xl",
    name: "Jackson Rosales"
  },
  {
    _id: "5d2b639d916525f5dad1a7c7",
    guid: "624452d8-d232-4fa8-9e41-2ce7ca7f6faf",
    isActive: true,
    warna: "mocha",
    kategori: "kaos",
    ukuran: "xl",
    name: "Yvette Baldwin"
  },
  {
    _id: "5d2b639d32b33cf1f0ef0f04",
    guid: "cdd16407-0380-4fbb-90ef-b8aeb1e38985",
    isActive: false,
    warna: "hitam",
    kategori: "kaos",
    ukuran: "m",
    name: "Barker Solis"
  },
  {
    _id: "5d2b639d4a593c8bc3efa913",
    guid: "0b81ccdf-6b97-463d-82d2-c0343eb30310",
    isActive: true,
    warna: "mocha",
    kategori: "jaket",
    ukuran: 27,
    name: "Kelly Whitfield"
  },
  {
    _id: "5d2b6424018f3c8840f4d113",
    guid: "8e589574-4378-4feb-aad8-61129cf7a00e",
    isActive: true,
    warna: "mocha",
    kategori: "jaket",
    ukuran: "s",
    name: "Fran Livingston"
  },
  {
    _id: "5d2b6424f2611275383390f5",
    guid: "4a820489-a43c-4c61-8b94-e980740f496b",
    isActive: true,
    warna: "cream",
    kategori: "kaos",
    ukuran: 30,
    name: "Copeland Flynn"
  },
  {
    _id: "5d2b6424350619b8424fe1f5",
    guid: "7a001fbe-b513-4d50-8e12-a8d5a97b729f",
    isActive: true,
    warna: "cream",
    kategori: "kaos",
    ukuran: 27,
    name: "Holcomb Tyson"
  },
  {
    _id: "5d2b6424fcb985b681422d96",
    guid: "da7e9dbe-4108-469d-8122-6f203b0fa5b0",
    isActive: true,
    warna: "hitam",
    kategori: "kaos",
    ukuran: "s",
    name: "Marisa Schwartz"
  },
  {
    _id: "5d2b64244f17e2e54a7c5b4a",
    guid: "d62a7a2d-a2ee-48f6-91a3-74e64c28ecab",
    isActive: false,
    warna: "hitam",
    kategori: "celana",
    ukuran: "m",
    name: "Stuart Delacruz"
  }
];

export { users, stock };
