import { Item } from "../../../../types/types";
import styles from "../shortenSection.module.scss";

export default function ItemCard({link, shortenedLink}: Item){
    return(
        <li className={styles['b-linkCards__container__card']}>
            <span>{link}</span>
            <div className={styles['b-linkCards__container__card__body']}>
                <a href={shortenedLink} target="_blank">{shortenedLink}</a>
                <button>Copy</button>
            </div>
        </li>
    )
}