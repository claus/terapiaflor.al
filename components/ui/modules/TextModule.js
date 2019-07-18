import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './TextModule.scss';

const TextModule = ({ title, text, whatsappButtonLabel }) => {
    return (
        <div className={styles.textModule}>
            <h3>{title}</h3>
            {documentToReactComponents(text)}
            <button>{whatsappButtonLabel}</button>
        </div>
    );
};

TextModule.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.object.isRequired,
    whatsappButtonLabel: PropTypes.string.isRequired,
};

export default TextModule;
