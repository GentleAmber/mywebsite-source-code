const projects = [
  {
    id: 1,
    title: 'Dober Island',
    category: 'Stickers',
    shortDes: 'Digital drawing, 2025',
    headImage: './../assets/illu-stickers/doberland-0.png',
    contentImage: generateResources('./../assets/illu-stickers/doberland-', '.png', 24)
  },
  {
    id: 2,
    title: 'Scenic Couplet',
    category: 'Home deco',
    shortDes: 'Digital drawing, printed, 2023',
    headImage: './../assets/illu-couplet/couplet-0.jpg',
    contentImage: generateResources('./../assets/illu-couplet/couplet-', '.jpg', 4)
  },
  {
    id: 3,
    title: 'Chased',
    category: 'Comic design',
    shortDes: 'Digital drawing, 2023',
    headImage: './../assets/illu-chased/chased-0.jpg',
    contentImage: generateResources('./../assets/illu-chased/chased-', '.jpg', 6)
  },
]

function generateResources(prefix, suffix ,num) {
  const resources = [];
  for (let i = 1; i <= num; i++) {
    resources.push(prefix + i + suffix);
  }

  return resources;
}

export default projects