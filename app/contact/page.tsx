import styles from './page.module.css';
import ContactForm from '@/app/_components/ContactForm';

export default function Page() {
  return (
    <div className={styles.container}>
        <p className={styles.text}>
            ご質問等がございましたら、下記フォームよりお問い合わせください。
            <br />
            内容確認後、担当者よりご連絡いたします。
        </p>
        <ContactForm />
    </div>
  );
}