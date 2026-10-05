import { useEffect } from 'react'
import { supabase } from '../services/supabase'

export default function Catalog() {
    
    useEffect(() => {
        supabase.from('products').select('*').then(result => console.log(result))
    }, [])

    return (
        <h1>Catalog Page</h1>
    );
}