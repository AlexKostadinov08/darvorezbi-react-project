import { supabase } from "./supabase";

export async function getLikes(productId, signal) {
    const { data, error } = await supabase
        .from('likes')
        .select('*')
        .eq('product_id', productId)
        .abortSignal(signal)

    if (error) throw error
    return data
}

export async function like(productId) {
    const { data, error } = await supabase
        .from('likes')
        .insert({productId})

    if (error) throw error
    return data
}

export async function unlike(productId, userId) {
    const { error } = await supabase
        .from('likes')
        .delete()
        .eq('product_id', productId)
        .eq('user_id', userId)

    if (error) throw error
}