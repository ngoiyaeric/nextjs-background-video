import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.contents}>
                <h1>Quality Computer Experiences</h1>
                <div className={styles.buttons}>
                    <button>Mission</button>
                    <button>Waitlist</button>
                </div>
            </div>
            <video
                src={require("../../public/video.mp4")}
                autoPlay
                muted
                loop
                className={styles.video}
            />
        </main>
    );
}
