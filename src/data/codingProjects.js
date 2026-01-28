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
import indexArt from './../assets/web-public-api/public-api-index.png'
import searchArt from './../assets/web-public-api/public-api-search.png'

// By default, images in array images will be used in thumbnail according to their index. Relevant 
// logic is written in components/ImageBox.jsx
const projects = [
  {
    id: 1,
    slug: 'tank-game',
    title: 'Tank Game',
    category: ['2D Game Development'],
    skills: ['OOP design', 'Graphics', 'Multithreaded Programming', 'File I/O'],
    techStack: ['Java', 'JPanel'],
    thumbnailDes: 'A demo tank game where the player controls a tank to fight multiple enemy tanks. Supports save and load. Modules: Player Control; Enemy AI (randomly moves and shoots); Collision Detection; Rendering (with JPanel); Game State Management; Animation; Event Handling; Thread Management. ',
    fullDes: '',
    images: [game, gameLog, structureInfo_1, structureInfo_2],
    headImgNum: 2
  },
  {
    id: 2,
    slug: 'instant-message-system',
    title: 'Instant Message System',
    category: ['Network Programming'],
    skills: [],
    techStack: ['Java', 'Socket'],
    thumbnailDes: '',
    fullDes: '',
    images: [
      imsystem_1, imsystem_2, imsystem_client_1, imsystem_client_2, imsystem_client_3,
      imsystem_client_4, imsystem_client_5, imsystem_client_6
    ],
    headImgNum: 3
  },
  {
    id: 3,
    slug: 'art-for-your-day',
    title: 'Art For Your Day',
    category: ['Full-stack Web Development'],
    skills: ['API Integration', 'Dynamic Pagination'],
    techStack: ['Node.js', 'Express.js', 'EJS'],
    thumbnailDes: '',
    fullDes: '',
    images: [indexArt, searchArt],
    headImgNum: 2
  },
  {
    id: 4,
    slug: 'my-book-notes',
    title: 'My Book Notes',
    category: ['Full-stack Web Development'],
    skills: ['User Authentication', 'Relational Database Design & Integration'],
    techStack: ['Next.js', 'React.js', 'postgreSQL'],
    thumbnailDes: '',
    fullDes: '',
    images: [],
    headImgNum: 0
  }
]

export default projects