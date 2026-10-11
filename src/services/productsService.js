import { supabase } from "./supabase";

export async function getAll(signal) {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })
        .abortSignal(signal)

    if (error) throw error
    return data
}

export async function getOne(productId, signal) {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .abortSignal(signal)
        .single()

    if (error) throw error
    return data
}