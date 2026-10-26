import { supabase } from "./supabase";

export async function getComments(productId, signal) {
    const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('product_id', productId)
        .abortSignal(signal)
        .order('created_at')

    if (error) throw error
    return data
}

export async function createComment(productId, text, authorName) {
    const { data, error } = await supabase
        .from('comments')
        .insert({ product_id: productId, content: text, author_name: authorName })
        .select().single()

    if (error) throw error
    return data
}