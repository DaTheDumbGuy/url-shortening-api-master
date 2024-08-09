import { useState } from 'react';
import styles from './shortenSection.module.scss';
import { Item } from '../../../types/types';
import ItemCard from './Item/ItemCard';

export default function ShortenSection() {
    const [link, setLink] = useState<string>("");
    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null); 
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(error) setError(null);
        setLink(e.target.value);
    }

    const handleShortenLink = async () => {
        if (!link) {
          setError("Please add a link");
          return;
        }
      
        setError(null);
      
        // Generate a SHA-256 hash from the link
        const encoder = new TextEncoder();
        const data = encoder.encode(link);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      
        // Convert the hash to a base64 string
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashBase64 = btoa(String.fromCharCode(...hashArray));
      
        // Truncate the hash to the first 10 characters
        const shortened = `https://rel.ink/${hashBase64.substring(0, 10)}`;
      
        const newItem = { link, shortenedLink: shortened };
      
        setItems([...items, newItem]);
    };

    return (
        <article className={styles['b-shortenContainer']}>
            <section className={styles['b-shortenContainer__shortenSection']}>
                <div className={styles['b-shortenContainer__shortenSection__inputContainer']}>
                    <input
                        className={error ? styles.error : ''}
                        type="text"
                        placeholder="Shorten a link here..."
                        value={link}
                        onChange={handleInput}
                    />
                    {error && <p className={styles.error}>{error}</p>}
                </div>
                    <button onClick={handleShortenLink}>Shorten It!</button>
            </section>
            <section className={styles['b-shortenContainer__linkCards']}>
                <ul className={styles['b-shortenContainer__linkCards__container']}>
                    {items.map((item, index) => (
                        <ItemCard
                         key={index} 
                         link={item.link} 
                         shortenedLink={item.shortenedLink}
                         isCopy={copiedIndex === index} // Pass down the state
                         onCopy={() => setCopiedIndex(index)}
                         />
                    ))}
                </ul>
            </section>
        </article>
    );
}
