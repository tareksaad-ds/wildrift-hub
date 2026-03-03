import "./ChampionCard.css";

type ChampionType = "Mage" | "Fighter" | "Tank";

interface ChampionCardProps {
  name: string;
  type: ChampionType;
  imageUrl: string;
}

/**
 * Displays a champion's splash image, name, and role type badge.
 * Image is sourced from Riot's Data Dragon CDN.
 */
export default function ChampionCard({ name, type, imageUrl }: ChampionCardProps) {
  return (
    <div className="champ-card">
      <div className="champ-image-wrapper">
        <img
          className="champ-image"
          src={imageUrl}
          alt={`${name} splash art`}
          loading="lazy"
        />
        <span className={`champ-type champ-type--${type.toLowerCase()}`}>
          {type}
        </span>
      </div>
      <div className="champ-info">
        <span className="champ-name">{name}</span>
      </div>
    </div>
  );
}
