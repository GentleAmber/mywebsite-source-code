const images = import.meta.glob(
  './../assets/illu-*/**/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default',
  }
)

function getImagesByPrefix(folder, prefix) {
  return Object.entries(images)
    .filter(([path]) => path.includes(folder) && path.includes(prefix))
    .sort((a, b) => {
      const numA = parseInt(a[0].match(/-(\d+)/)?.[1] || 0);
      const numB = parseInt(b[0].match(/-(\d+)/)?.[1] || 0);
      return numA - numB;
    })
    .map(([, src]) => src);
}

const doberImages = getImagesByPrefix(
  'illu-stickers',
  'doberland-'
)
const chasedImages = getImagesByPrefix(
  'illu-chased',
  'chased-'
)
const coupletImages = getImagesByPrefix(
  'illu-couplet',
  'couplet-'
)
const fyogImages = getImagesByPrefix(
  'illu-yourowngood',
  'yog-'
)
const sogaiImages = getImagesByPrefix(
  'illu-seasons',
  'sogai-'
)
const otherWImages = getImagesByPrefix(
  'illu-various',
  'various-'
)

const projects = [

  /*
    id: ,
    slug: ,
    category: ,
    shortDes: ,
    headImage: getImagesByPrefix(
      'illu-',
      ''
    )[0],
    contentImage:getImagesByPrefix(
      'illu-',
      ''
    )
  */
  {
    id: 1,
    slug: 'dober-island',
    title: 'Dober Island',
    category: 'Stickers',
    shortDes: 'Digital drawing, 2025',
    headImage: doberImages[0],
    contentImage: doberImages.slice(1)
  },
  {
    id: 2,
    slug: 'scenic-couplet',
    title: 'Scenic Couplet',
    category: 'Home deco',
    shortDes: 'Digital drawing, printed, 2023',
    headImage: coupletImages[0],
    contentImage: coupletImages.slice(1)
  },
  
  {
    id: 3,
    slug: 'chased',
    title: 'Chased',
    category: 'Comic design',
    shortDes: 'Digital drawing, 2023',
    headImage: chasedImages[0],
    contentImage: chasedImages.slice(1)
  },
  {
    id: 4,
    slug: 'for-your-own-good!',
    title: 'For Your Own Good!',
    category: 'Illustraions',
    shortDes: 'Digital drawing, 2022',
    headImage: fyogImages[2],
    contentImage: fyogImages
  },
  {
    id: 5,
    slug: 'seasons-of-glass-and-iron',
    title: 'Seasons Of Glass And Iron',
    category: 'Comic design',
    shortDes: 'Gouache, Mixed materials, 2022',
    headImage: sogaiImages[0],
    contentImage: sogaiImages
  },
  {
    id: 6,
    slug: 'other-works',
    title: 'Other Works',
    category: 'Other works',
    shortDes: 'Mainly digital drawing, some done with gouache',
    headImage: otherWImages[0],
    contentImage: otherWImages
  },
]


export default projects