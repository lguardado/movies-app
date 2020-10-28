import React from 'react';

import styles from './Input.module.css';

interface Props {
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ placeholder, onChange }) => (
    <input
        className={styles.Input}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
    />
)

export default Input;
