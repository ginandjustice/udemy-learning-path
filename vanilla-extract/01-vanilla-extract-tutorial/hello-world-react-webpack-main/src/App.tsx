import * as styles from "./styles.css";
import { atoms } from "./sprinkles.css";

export const App = () => (
  <main>
    <header className={styles.menu}>
      <h1 className={styles.menuItem}>Hello World!</h1>
      <ul className={styles.menuItems}>
        <li>
          <a className={styles.menuItem} href="#">
            Hello
          </a>
        </li>
        <li>
          <a className={styles.menuItem} href="#">
            World
          </a>
        </li>
        <li>
          <a className={styles.menuItem} href="#">
            Vanilla
          </a>
        </li>
        <li>
          <a className={styles.menuItem} href="#">
            Extract
          </a>
        </li>
      </ul>
    </header>

    <section
      className={atoms({
        display: "block",
        marginTop: {
          desktop: "1/5",
          mobile: "1/2",
        },
        textAlign: "center",
      })}
    >
      <p>Body contents here!</p>
    </section>
  </main>
);

/* import {
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
); */