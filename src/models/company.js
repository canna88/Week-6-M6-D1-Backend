// {
//     "_id": "5f032c758d3953498aea3eb5",
//     "index": 1,
//     "guid": "c0d5d104-70b2-454e-934b-97f2da72a5ba",
//     "isActive": true,
//     "balance": "$1,607.68",
//     "picture": "http://placehold.it/32x32",
//     "age": 31,
//     "eyeColor": "blue",
//     "name": {
//       "first": "Dena",
//       "last": "Whitfield"
//     },
//     "company": "SATIANCE",
//     "email": "dena.whitfield@satiance.me",
//     "phone": "+1 (876) 551-3836",
//     "address": "679 Visitation Place, Hayes, Illinois, 8752",
//     "about": "Deserunt sit consectetur officia sint do commodo. Cupidatat ad eiusmod do dolor velit consectetur amet incididunt pariatur. Enim esse ex non aliqua dolor reprehenderit. Exercitation minim ullamco ut proident excepteur labore.",
//     "registered": "Wednesday, March 6, 2019 9:06 PM",
//     "latitude": "-49.832011",
//     "longitude": "-64.983138",
//     "tags": ["sit", "officia", "eu", "aliqua", "ea"],
//     "range": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     "friends": [
//       {
//         "id": 0,
//         "name": "Vang Cochran"
//       },
//       {
//         "id": 1,
//         "name": "Marilyn Ellis"
//       },
//       {
//         "id": 2,
//         "name": "Cobb Bond"
//       }
//     ],
//     "greeting": "Hello, Dena! You have 10 unread messages.",
//     "favoriteFruit": "banana"
//   }

import { model, Schema } from "mongoose";

const CompanySchema = new Schema({
  _id: { type: String },
  index: { type: Number },
  guid: { type: String },
  isActive: { type: Boolean },
  balance: { type: String },
  picture: { type: String },
  age: { type: Number },
  eyeColor: { type: String },
  name: { first: { type: String }, last: { type: String } },
  company: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  about: { type: String },
  registered: { type: String },
  latitude: { type: String },
  longitude: { type: String },
  tags: [{ type: String }],
  range: [{ type: Number }],
  friends: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  greeting: {
    type: String,
    required: true,
  },
  favoriteFruit: {
    type: String,
    required: true,
  },
});

export const Company = model("Company", CompanySchema, "companies");
