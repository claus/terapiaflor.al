import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './TextModule.scss';

const TextModule = ({ title, text, whatsappButtonLabel, themeColor }) => {
    const theme = {
        color: themeColor,
    };
    return (
        <article style={theme} className={styles.textModule}>
            <div className={styles.textContainer}>
                <h2 className={styles.headline}>{title}</h2>
                {documentToReactComponents(text)}
            </div>
            <a href="#" className={styles.button}>
                {whatsappButtonLabel}
            </a>
        </article>
    );
};

TextModule.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.object.isRequired,
    whatsappButtonLabel: PropTypes.string.isRequired,
    themeColor: PropTypes.string.isRequired,
};

export default TextModule;
