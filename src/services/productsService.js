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

export async function create(payload) {
    const { data, error } = await supabase
        .from('products')
        .insert(payload)
        .select()
        .single()

    if (error) throw error
    return data
}

export async function update(productId, payload) {
    const { data, error } = await supabase
        .from('products')
        .update(payload)
        .eq('id', productId)
        .select()
        .single()
    
    if (error) throw error
    return data
}

export async function remove(productId) {
    const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId1)
    
    if (error) throw error
}