import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';


const BeastByHorns = ({handleFilter}) => {
    const [filterByHorns, setFilterByHorns] = useState('all');

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setFilterByHorns(selectedValue);
        handleFilter(selectedValue);
    };
    return (
        <Form.Select aria-label="Filter by Number of Horns" onChange={handleChange} value={filterByHorns}>
        <option value="all">All</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="100">Hundred</option>
        </Form.Select>
    );
}


export default BeastByHorns;

