export default function ShortenSection() {
    return (
        <section>
            <div>
                <input type="text" placeholder="Shorten a link here..."/>
                <button>Shorten It!</button>
                <p>Please add a link</p>
            </div>
            <div>
                <ul>
                    <li>
                        <span>https://www.frontendmentor.io</span>
                        <a href="#">https://rel.ink/k4lKyK</a>
                        <button>Copy</button>
                    </li>
                    <li>
                        <span>https://twitter.com/frontendmentor</span>
                        <a href="#">https://rel.ink/gxOXp9</a>
                        <button>Copy</button>
                    </li>
                    <li>
                        <span>https://www.linkedin.com/company/frontend-mentor</span>
                        <a href="#">https://rel.ink/gob3X9</a>
                        <button>Copy</button>
                    </li>
                </ul>
            </div>
        </section>
    );
}
