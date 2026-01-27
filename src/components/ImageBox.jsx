

function ImageBox({ images }) {
  const { imgBoxClass, l } = getImgBoxClass(images)
  var standardisedImages
  
  if (l > 3) {
    standardisedImages = images.slice(0, 3)
  } else {
    standardisedImages = images

  }
  return (
    <div className={imgBoxClass}>
      {standardisedImages.map((i, index) => 
        <img key={index} src={i} />
      )}
    </div>
  )
}

export default ImageBox


// Auxiliary function that returns String `imgbox image-[n]`, 0 <= n <= 3
function getImgBoxClass(images) {
  var imgBoxClass = 'imgbox image-'
  
  const l = images.length
  if (l <= 3)
    imgBoxClass += l
  else 
    imgBoxClass += '3'

  return {imgBoxClass, l}
}