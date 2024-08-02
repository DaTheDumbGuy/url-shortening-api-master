import { useState } from 'react';
import styles from './shortenSection.module.scss';
import { Item } from '../../../types/types';
import ItemCard from './Item/ItemCard';
export default function ShortenSection() {
    const [items, setItems] = useState<Item[]>([]);
    const [item, setItem] = useState<Item>({link:"", shortenedLink:""});
    const [error, setError] = useState<string | null>(null);

    function handleShortenLink() {
        // Simple example of link shortening logic; replace with actual logic
        if (!item.link) {
          setError("Please add a link");
          return;
        }
        
        setError(null);
        const shortened = `rel.ink/${btoa(item.link)}`; // Placeholder for shortening logic
        setItem({ link: item.link, shortenedLink: shortened });
        setItems([...items, item]);
      }
      console.log(error);
      console.log(item, items);
    return (
        <>
            <section className={styles['b-shortenSection']}>
                <div className={styles['b-shortenSection__inputContainer']}>
                    <input type="text" placeholder="Shorten a link here..." value={item.link} onChange={(e)=> setItem({...item, link: e.target.value })}/>
                    <p>{error}</p>
                    <button onClick={handleShortenLink}>Shorten It!</button>
                </div>
            </section>
            <div>
                <ul>
                    {items?.map((item)=>(
                        <ItemCard link={item.link} shortenedLink={item.shortenedLink}/>
                    ))}
                </ul>
            </div>
        </>
    );
}
