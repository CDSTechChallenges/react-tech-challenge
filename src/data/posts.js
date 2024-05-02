const posts = [
  {
    id: 'a27f172e-c50d-453e-9b46-5c1d7d626bb3',
    image: 'https://scontent.cdninstagram.com/v/t51.29350-15/315421201_807764067197371_4579060934345113623_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=umHAnCXmLegQ7kNvgHJaM4p&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk3MTU3NzQ3OTkyNzc4OTY0OQ%3D%3D.2-ccb7-5&oh=00_AfCL90sHPQIwyim38_YY9pMIUuuRqxVbyYz3PXhF1mh9OQ&oe=663715EE&_nc_sid=10d13b',
    user: {
      profilePicture: 'https://scontent.cdninstagram.com/v/t51.2885-19/175200008_211028110433120_2018508692039643273_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=9sg-G7AQgSQQ7kNvgHI8INg&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAbuhtUIMjHD9uZxlJ4XE-ajpskPt7he-Q-fB05ns_jpw&oe=66371741&_nc_sid=10d13b',
      name: 'codigodelsur'
    },
    comments: [
      {
        id: '1710e171-7873-4c48-ad5a-eb502a880617',
        user: {
          profilePicture: 'https://scontent.cdninstagram.com/v/t51.2885-19/175200008_211028110433120_2018508692039643273_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=9sg-G7AQgSQQ7kNvgHI8INg&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAbuhtUIMjHD9uZxlJ4XE-ajpskPt7he-Q-fB05ns_jpw&oe=66371741&_nc_sid=10d13b',
          name: 'codigodelsur'
        },
        text: "Do you know what a drone is? Probably you've heard about drones a lot of times in the last couple of years. But, do you know what they are?",
        date: '2024-02-10T20:42:21+0000'
      }
    ],
    likeCount: 1,
    date: '2024-02-10T20:42:21+0000'
  },
  {
    id: 'b27f172e-c50d-453e-9b46-5c1d7d626bb3',
    image: 'https://scontent.cdninstagram.com/v/t51.29350-15/315421201_807764067197371_4579060934345113623_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=umHAnCXmLegQ7kNvgHJaM4p&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk3MTU3NzQ3OTkyNzc4OTY0OQ%3D%3D.2-ccb7-5&oh=00_AfCL90sHPQIwyim38_YY9pMIUuuRqxVbyYz3PXhF1mh9OQ&oe=663715EE&_nc_sid=10d13b',
    user: {
      profilePicture: 'https://scontent.cdninstagram.com/v/t51.2885-19/175200008_211028110433120_2018508692039643273_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=9sg-G7AQgSQQ7kNvgHI8INg&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAbuhtUIMjHD9uZxlJ4XE-ajpskPt7he-Q-fB05ns_jpw&oe=66371741&_nc_sid=10d13b',
      name: 'codigodelsur'
    },
    comments: [
      {
        id: '2710e171-7873-4c48-ad5a-eb502a880617',
        user: {
          profilePicture: 'https://scontent.cdninstagram.com/v/t51.2885-19/175200008_211028110433120_2018508692039643273_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=9sg-G7AQgSQQ7kNvgHI8INg&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAbuhtUIMjHD9uZxlJ4XE-ajpskPt7he-Q-fB05ns_jpw&oe=66371741&_nc_sid=10d13b',
          name: 'codigodelsur'
        },
        text: "Do you know what a drone is? Probably you've heard about drones a lot of times in the last couple of years. But, do you know what they are?",
        date: '2024-02-10T20:42:21+0000'
      }
    ],
    likeCount: 1,
    date: '2024-02-10T20:42:21+0000'
  },
  {
    id: 'c27f172e-c50d-453e-9b46-5c1d7d626bb3',
    image: 'https://scontent.cdninstagram.com/v/t51.29350-15/315421201_807764067197371_4579060934345113623_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=umHAnCXmLegQ7kNvgHJaM4p&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk3MTU3NzQ3OTkyNzc4OTY0OQ%3D%3D.2-ccb7-5&oh=00_AfCL90sHPQIwyim38_YY9pMIUuuRqxVbyYz3PXhF1mh9OQ&oe=663715EE&_nc_sid=10d13b',
    user: {
      profilePicture: 'https://scontent.cdninstagram.com/v/t51.2885-19/175200008_211028110433120_2018508692039643273_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=9sg-G7AQgSQQ7kNvgHI8INg&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAbuhtUIMjHD9uZxlJ4XE-ajpskPt7he-Q-fB05ns_jpw&oe=66371741&_nc_sid=10d13b',
      name: 'codigodelsur'
    },
    comments: [
      {
        id: '3710e171-7873-4c48-ad5a-eb502a880617',
        user: {
          profilePicture: 'https://scontent.cdninstagram.com/v/t51.2885-19/175200008_211028110433120_2018508692039643273_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=9sg-G7AQgSQQ7kNvgHI8INg&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAbuhtUIMjHD9uZxlJ4XE-ajpskPt7he-Q-fB05ns_jpw&oe=66371741&_nc_sid=10d13b',
          name: 'codigodelsur'
        },
        text: "Do you know what a drone is? Probably you've heard about drones a lot of times in the last couple of years. But, do you know what they are?",
        date: '2024-02-10T20:42:21+0000'
      }
    ],
    likeCount: 1,
    date: '2024-02-10T20:42:21+0000'
  },
]

export default posts;
