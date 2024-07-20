'use server';

import { permanentRedirect, redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function redirectArticles(id: string) {
  revalidatePath('/articles'); // Update cached posts
  permanentRedirect(`/articles/${id}`); // Navigate to the new post page
}
