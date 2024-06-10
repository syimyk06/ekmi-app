import { useEffect, useState } from 'react';
import { getCatalog } from '../../api/catalog.api';
import './Catalog.scss'
import { Card } from '../Card/Card';

export const Catalog = () => {

    const [catalog, setCatalog] = useState([])

    const getCatalogData = async () => {
        const data = await getCatalog()
        console.log(data);
        setCatalog(data)
    }

    useEffect(() => {
        getCatalogData()
    }, []);


    return (
        <>
            <section className="catalog">
                <div className="container grid grid__col-2">
                    {
                    catalog.slice(0, 10).map((c) => (
                        <Card key={c.id} product={c} />
                    ))
                   } 
                </div>
            </section>
        </>
    )
}