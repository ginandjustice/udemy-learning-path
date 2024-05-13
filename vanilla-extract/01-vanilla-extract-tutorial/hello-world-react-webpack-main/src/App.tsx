import {
    themeClass,
    menuStyle,
    menuItemsStyle,
    menuItemStyle,
    sectionStyle,
} from "./styles.css";

export const App = () => (
    <div className={themeClass}>
        <header className={menuStyle}>
            <h1 className={menuItemStyle}>Hello World!</h1>
            <ul className={menuItemsStyle}>
                <li>
                    <a className={menuItemStyle} href="#">
                        Hello
                    </a>
                </li>
                <li>
                    <a className={menuItemStyle} href="#">
                        World
                    </a>
                </li>
                <li>
                    <a className={menuItemStyle} href="#">
                        Vanilla
                    </a>
                </li>
                <li>
                    <a className={menuItemStyle} href="#">
                        Extract
                    </a>
                </li>
            </ul>
        </header>

        <section className={sectionStyle}>
            <p>Body contents here!</p>
        </section>
    </div>
);