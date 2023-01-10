import './ZodiacCard.css';

export default function ZodiacCard(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <h2>{props.name}</h2>
    </div>
  );
}
