

function ImageBox({ images, headImgNum }) {
  const imgBoxClass = `imgbox image-${headImgNum}`
  const standardisedImages = images.slice(0, headImgNum)

  return (
    <div className={imgBoxClass}>
      {standardisedImages.map((i, index) => 
        <img key={index} src={i} />
      )}
    </div>
  )
}

export default ImageBox

