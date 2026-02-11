import game from './../assets/coding-tankgame/game.png'
import gameLog from './../assets/coding-tankgame/log.png'
import structureInfo_1 from './../assets/coding-tankgame/structure-info-1.png'
import structureInfo_2 from './../assets/coding-tankgame/structure-info-2.png'
import imsystem_1 from './../assets/coding-imsystem/imsystem_1.png'
import imsystem_2 from './../assets/coding-imsystem/imsystem_2.png'
import imsystem_client_1 from './../assets/coding-imsystem/imsystem_client_1.png'
import imsystem_client_2 from './../assets/coding-imsystem/imsystem_client_2.png'
import imsystem_client_3 from './../assets/coding-imsystem/imsystem_client_3.png'
import imsystem_client_4 from './../assets/coding-imsystem/imsystem_client_4.png'
import imsystem_client_5 from './../assets/coding-imsystem/imsystem_client_5.png'
import imsystem_client_6 from './../assets/coding-imsystem/imsystem_client_6.png'
import im_diagram from './../assets/coding-imsystem/im_diagram.png'
import indexArt from './../assets/web-public-api/public-api-index.png'
import searchArt from './../assets/web-public-api/public-api-search.png'
import indexNotes from './../assets/web-book-notes/index.png'
import signupNotes from './../assets/web-book-notes/signup.png'
import addbookNotes from './../assets/web-book-notes/addbook.png'



// By default, images in array images will be used in thumbnail according to their index. Relevant 
// logic is written in components/ImageBox.jsx
const projects = [
  {
    id: 1,
    slug: 'my-book-notes',
    title: 'My Book Notes',
    category: ['Full-stack Web Development'],
    skills: ['User Authentication', 'Relational Database Design'],
    techStack: ['Next.js', 'React.js', 'postgreSQL'],
    thumbnailDes: "A website with database and user systems for keeping book notes. Users can write notes for books in the library and add new books to it, subject to administrator approval.",
    images: [indexNotes, signupNotes, addbookNotes],
    link: 'https://github.com/GentleAmber/Book-notes',

  },
  {
    id: 2,
    slug: 'art-for-your-day',
    title: 'Art For Your Day',
    category: ['Full-stack Web Development'],
    skills: ['API Integration', 'Dynamic Pagination'],
    techStack: ['Node.js', 'Express.js', 'EJS'],
    thumbnailDes: "A website featuring random artwork display and a search function to find artworks based on specific criteria. The Metropolitan Museum of Art's public API is used to retrieve the data.",
    images: [indexArt, searchArt],
    link: 'https://github.com/GentleAmber/Art-of-the-day',

  },
  {
    id: 3,
    slug: 'instant-message-system',
    title: 'Instant Message System',
    category: ['Network Programming'],
    skills: ['File I/O'],
    techStack: ['Java', 'Socket'],
    thumbnailDes: "A local instant messaging system that allows multiple clients to exchange messages and transfer files.",
    images: [
      im_diagram, imsystem_1, imsystem_2, imsystem_client_1, imsystem_client_2, imsystem_client_3,
      imsystem_client_4, imsystem_client_5, imsystem_client_6
    ],
    link: 'https://github.com/GentleAmber/Instant-messaging-system',

  },
  {
    id: 4,
    slug: 'tank-game',
    title: 'Tank Game',
    category: ['2D Game Development'],
    skills: ['OOP design', 'Graphics', 'Multithreaded Programming', 'Event Management', 'File I/O'],
    techStack: ['Java', 'JPanel'],
    thumbnailDes: "A mini tank game in which the player controls a tank to battle multiple enemy tanks. Save and load functionality is supported, although it remains slightly buggy.",
    images: [game, gameLog, structureInfo_1, structureInfo_2],
    link: 'https://github.com/GentleAmber/Tank-game',
  },
]

export default projects