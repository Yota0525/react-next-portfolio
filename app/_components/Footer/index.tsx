import styles from "./index.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <a href="/career">キャリア</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/explanation">説明</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/contact">お問い合わせ</a>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>© 2024 Music Saves The World.</p>
        </footer>
    );
}