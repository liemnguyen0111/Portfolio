const { model, Schema } = require("mongoose");

const Me = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  about: 
    {
      info: String,
      about : String
    },
    featured: [
        {
          pType: String,
          name: String,
          date: String,
          description: String,
          techList: String,
          image: [
              { type: String }
          ]
        },
      ],
  projects: [
    {
      pType: String,
      name: String,
      date: String,
      description: String,
      techList: String,
      link: String
    },
  ],
  experiences: [
    {
        name: String,
        sName: String,
        range: String,
        subOpening : String,
        description: [
            {
                type : String
            }
        ],
        link: String
    },
  ],
  achivements: [
    {
       image : String,
       link : String
    }],
    messages : [
        {
            firstName : String,
            lastName : String,
            company : String,
            mobile : String,
            message : String
        }
    ]
});


module.exports = model("Me", Me);