import { Item } from "../../../../types/types";

export default function ItemCard({link, shortenedLink}: Item){
    return(
        <li>
            <span>{link}</span>
            <a href="#">{shortenedLink}</a>
            <button>Copy</button>
        </li>
    )
}