import { ItemCardProps } from "../../../../types/types";
import styles from "../shortenSection.module.scss";

export default function ItemCard({link, shortenedLink, isCopy, onCopy}: ItemCardProps){

    const handleCopy = () => {
        onCopy()
        navigator.clipboard.writeText(shortenedLink);
    } 

    return(
        <li className={styles['b-shortenContainer__linkCards__container__card']}>
            <span>{link}</span>
            <div className={styles['b-shortenContainer__linkCards__container__card__body']}>
                <a href={shortenedLink} target="_blank">{shortenedLink}</a>
                <button
                className={`${styles['b-shortenContainer__linkCards__container__card__body__copyButton']} ${isCopy ? styles['b-shortenContainer__linkCards__container__card__body__copyButton--active'] : ''}`}
                onClick={handleCopy}
                >
                    {isCopy ? "Copied!" : "Copy"}
                </button>
            </div>
        </li>
    )
}