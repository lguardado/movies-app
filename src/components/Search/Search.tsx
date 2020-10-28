import React from 'react';
import Input from '../../shared/ui/Input/Input';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ onChange }) => (
    <>
        <label>Search</label>
        <Input
            placeholder="Enter a movie to search"
            onChange={onChange}
        />
    </>
)


export default Search;