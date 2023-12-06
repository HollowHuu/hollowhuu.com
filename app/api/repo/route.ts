'use server';
import { headers } from 'next/headers'

export async function GET() {
    const name = headers().get('name')
    if(!name) throw new Error('No name provided');
    if(!process.env.GITHUB_TOKEN) throw new Error('No Github Token');
    let res = await fetch(`https://api.github.com/repos/hollowhuu/${name}`, {
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        }
    }).then(res => res.json());

    return Response.json({
        name: res.name,
        description: res.description,
        html_url: res.html_url,
        language: res.language
    })
}
