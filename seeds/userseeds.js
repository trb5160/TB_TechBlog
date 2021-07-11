const { User } = require('../models');

const userData = [
    {
        username: "Geralt_Rivia",
        twitter: "GeraltR",
        github: "geraltr",
        email: "geralt_r@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "yennefer_v",
        twitter: "yenneferv",
        github: "yenv",
        email: "yen_v@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "ciri_c",
        twitter: "ciri",
        github: "ciri",
        email: "ciri_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "triss_m",
        twitter: "trissmerigold",
        github: "trissmerigold",
        email: "triss_merigold.com",
        password: "p@ssword4"
    },
    {
        username: "regis_t",
        twitter: "regist",
        github: "regisoftoussaint",
        email: "regis_of_toussaint@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "tomb",
        twitter: "tom_b",
        github: "trb5160",
        email: "trb5160@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;