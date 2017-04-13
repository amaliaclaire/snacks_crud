exports.seed = (knex) => {
  return knex('snacks').del()
    .then(() => {
      return knex('snacks').insert([
        {
          id: 1,
          name: 'Indomie',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/91mvKnma2vL._SX522SX522_SY378_CR,0,0,522,378_PIbundle-30,TopRight,0,0_SX522_SY378_CR,0,0,522,378_SH20_.jpg',
          review_description: "Indomie Mi Goreng is an instant noodles product line made under the Indomie brand by the Indofood company, the world's largest instant noodle manufacturer, located in Indonesia",
          my_rating: 5
        },
        {
          id: 2,
          name: 'Kopiko',
          image_url: "https://images-na.ssl-images-amazon.com/images/I/71p4HabSpnL._SY679_.jpg",
          review_description: "Individually wrapped coffee candy to fullfil you coffee crave.",
          my_rating: 5
        },
        {
          id: 3,
          name: 'Cheetos',
          image_url: 'http://www.fritolay.com/images/default-source/blue-bag-image/cheetos-crunchy-cheese.png?sfvrsn=2',
          review_description: 'it is yummy',
          my_rating: 5
        }
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks));"
      )
    })
}
