import React, {Component} from 'react';
import './Table.css';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

class Table extends Component {
    constructor() {
        super();
        this.tables = [
            {company: 'Alfreds Futterkiste', contact: '	Maria Anders', country: 'Germany'},
            {company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico'},
            {company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria'},
            {company: 'Island Trading', contact: 'Helen Bennett', country: 'UK'},
            {company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada'},
            {company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy'}
        ]
    }

    render() {
        return(
            <div className="Table">
                <h1>Table Contact</h1>
                <table>
                    <tr>
                        <td>Company</td><td>Contact</td><td>Country</td>
                    </tr>
                    {
                        this.tables.map((item, index) => {
                            return <tr><td>{item.company}</td><td>{item.contact}</td><td>{item.country}</td></tr>;
                        })
                    }
                </table>
            </div>
        )
    }
}

export default Table;