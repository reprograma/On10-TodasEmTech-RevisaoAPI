import React from 'react';

import './styles.css';

import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

export default function Home(){
    return(
        <section>
            <Sidebar />
            <main>
                <Card />
                <Card />
            </main>
        </section>
    );
}