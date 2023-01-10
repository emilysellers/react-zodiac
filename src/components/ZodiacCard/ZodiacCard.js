import './ZodiacCard.css';

export default function ZodiacCard(props) {
  return (
    <div className="card">
      <img src={`${process.env.PUBLIC_URL}/${props.name}.png`} />
      <h2>{props.name}</h2>
    </div>
  );
}
