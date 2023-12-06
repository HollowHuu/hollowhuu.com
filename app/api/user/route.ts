interface Repo {
    name?: string;
    message?: string;
}

// Return all repos from my Github account
export async function GET() {
    let res = await fetch(`https://api.github.com/users/hollowhuu/repos`, {
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        }
    }).then(res => res.json());

    if (!res) return Response.json({error: 'no repos found'});
    if (res.message) return Response.json({error: res.message});
    

    // Vercel doesn't like me, but I don't like it either
    if(!Array.isArray(res)) return Response.json({error: 'not an array'}); // this is never hit locally, but is on vercel
    let repos: Repo[] = [];
    res.forEach((repo) => {
        repos.push({name: repo.name});
    });

    return Response.json(repos)
}