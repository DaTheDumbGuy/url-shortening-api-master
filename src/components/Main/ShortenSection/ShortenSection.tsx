import { useState, useEffect } from 'react';
import styles from './shortenSection.module.scss';
import { Item } from '../../../types/types';
import ItemCard from './Item/ItemCard';

export default function ShortenSection() {
    const [link, setLink] = useState<string>("");
    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleShortenLink = () => {
      if (!link) {
        setError("Please add a link");
        return;
      }
  
      setError(null);
      const shortened = `rel.ink/${btoa(link)}`;
      const newItem = { link, shortenedLink: shortened };
      setItems([...items, newItem]);  // Add the new item to the items array
    };

    // Move the console.log statement inside a useEffect to only log when items change
    useEffect(() => {
      console.log(items);
    }, [items]);

    return (
        <article className={styles['b-shortenContainer']}>
            <section className={styles['b-shortenContainer__shortenSection']}>
                <div className={styles['b-shortenContainer__shortenSection__inputContainer']}>
                    <input
                        className={error ? styles.error : ''}
                        type="text"
                        placeholder="Shorten a link here..."
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                    {error && <p className={styles.error}>{error}</p>}
                    <button onClick={handleShortenLink}>Shorten It!</button>
                </div>
            </section>
            <section className={styles['b-shortenContainer__linkCards']}>
                <ul className={styles['b-shortenContainer__linkCards__container']}>
                    {items.map((item, index) => (
                        <ItemCard key={index} link={item.link} shortenedLink={item.shortenedLink} />
                    ))}
                </ul>
            </section>
        </article>
    );
}
