
export const GridItem = (img) => {

  // console.log(img);
  return (
    <div className="card">
     <img  src={img.url} alt={img.title} />
     <p>
      {img.title}
      
      </p>
    </div>
                 
  )
}
