function Kittens(props) {
  return (
    <div className="contact--card">
      <img src={props.img} alt="kitten-image" />
      <h3>{props.name}</h3>
      <div className="info--group">
        <img src="./images/phone-icon.png" alt="phone-logo" />
        <p>{props.phone}</p>
      </div>
      <div className="info--group">
        <img src="./images/mail-icon.png" alt="emai-logo" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Kittens;
