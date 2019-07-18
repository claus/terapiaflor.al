import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './TextModule.scss';

const TextModule = ({ title, text, whatsappButtonLabel }) => {
    return (
        <article className={styles.textModule}>
            <h2>{title}</h2>
            {documentToReactComponents(text)}
            <button>{whatsappButtonLabel}</button>
        </article>
    );
};

TextModule.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.object.isRequired,
    whatsappButtonLabel: PropTypes.string.isRequired,
};

export default TextModule;
