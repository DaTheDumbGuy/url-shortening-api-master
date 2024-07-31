import { useState } from 'react';
import styles from './shortenSection.module.scss';
import { Item } from '../../../types/types';
export default function ShortenSection() {
    const [items, setItems] = useState<string[]>([]);
    const [item, setItem] = useState<Item>({link:"", shortenedLink:""});
    const [error, setError] = useState<string | null>(null);
    function handleShortenLink() {
        // Simple example of link shortening logic; replace with actual logic
        if (!item.link) {
          setError("Please add a link");
          return;
        }
        
        setError(null);
        const shortened = `short.url/${btoa(item.link)}`; // Placeholder for shortening logic
        setItem({ link: item.link, shortenedLink: shortened });
        setItems([...items, shortened]);
      }
      console.log(error);
      console.log(item, items);
    return (
        <>
            <section className={styles['b-shortenSection']}>
                <div className={styles['b-shortenSection__inputContainer']}>
                    <input type="text" placeholder="Shorten a link here..." value={item.link} onChange={(e)=> setItem({...item, link: e.target.value })}/>
                    <button onClick={handleShortenLink}>Shorten It!</button>
                    <p>{error}</p>
                </div>
            </section>
            <div>
                <ul>

                </ul>
            </div>
        </>
    );
}
