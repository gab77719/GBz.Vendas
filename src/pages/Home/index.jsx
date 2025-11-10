import './Home.css'
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import { useState } from 'react';

export default function Page() {
    return (
        <div>
            <Categories />
        </div>
    )
}
