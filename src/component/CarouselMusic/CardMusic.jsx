const CardMusic = ({ item }) => {
  return (
    <>
    <div className="card">
      <div className="card-image">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="card-content">
        <h3>{item.title}</h3>
      </div>
    </div>
    </>
  )
}
export default CardMusic;