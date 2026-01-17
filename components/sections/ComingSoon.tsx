import React from 'react';
import Link from 'next/link';
import styles from './ComingSoon.module.css';

interface ComingSoonProps {
    title?: string;
    description?: string;
    backLink?: string;
    backText?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
    title = "Coming Soon",
    description = "We're currently working on creating something fantastic. We'll be here soon with our new awesome site, subscribe to be notified.",
    backLink = "/",
    backText = "Back to Home"
}) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{description}</p>
                <div className={styles.buttonContainer}>
                    <Link href={backLink} className={styles.button}>
                        {backText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
