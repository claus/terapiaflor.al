import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './TextModule.scss';

const TextModule = ({ title, text, whatsappButtonLabel, themeColor }) => {
    const theme = {
        color: themeColor,
    };
    return (
        <article className={styles.textModule}>
            <h2 style={theme}>{title}</h2>
            {documentToReactComponents(text)}
            <a href="#" style={theme} className={styles.button}>
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
