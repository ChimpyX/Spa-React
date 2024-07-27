
export const HomePage = () => {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://images3.alphacoders.com/790/790559.png" alt="Dragon Ball" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://images7.alphacoders.com/972/972951.jpg" alt="Chicago" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/originals/db/b4/9e/dbb49e4b3796c4a74ac6395e865e8701.jpg" alt="New York" className="d-block w-100" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  )
}
