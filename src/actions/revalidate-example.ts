'use server';

import {  revalidateTag } from "next/cache";

//import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateExapleAction(formData: FormData) {
    const path = formData.get('path') || '';
    console.log('Estou em uma serve action', path);

    //revalidatePath(`${path}`);
    revalidateTag('randomuser')
}

