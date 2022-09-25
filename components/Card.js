import Image from "next/image";
import styles from "../styles/Cards.module.css";

export default function Card(props) {
    const { character } = props;
    console.log(character);
    return (
        <div className={styles.container}>
            {character.amiibo.map((amb, idx) => {
                return (
                    <div key={amb.head + "_" + idx} className={styles.card}>
                        <h1 className={styles.title}>{amb.character}</h1>
                        <Image
                            src={amb.image}
                            alt="character"
                            width="100%"
                            height="100%"
                            layout="responsive"
                            placeholder="blur"
                            blurDataURL={amb.image}
                        />
                        <div className={styles.subtitle}>Name: {amb.name}</div>
                        <div>Amiibo series: {amb.amiiboSeries}</div>
                        <div>Game series: {amb.gameSeries}</div>
                        <div className={styles.subtitle}>Realese dates:</div>
                        <div className={styles.releases}>
                            {Object.entries(amb.release).map(([key, value]) => {
                                return (
                                    <div key={key} className={styles.release}>
                                        {key}: {value}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
