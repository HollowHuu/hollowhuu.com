interface Repo {
    name: string;
}

// Return all repos from my Github account
export async function GET() {
    let res = await fetch(`https://api.github.com/users/hollowhuu/repos`, {
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        }
    }).then(res => res.json()) as Repo[];

    // Vercel complains about this, works fine locally.
    // let repos = res.map((repo) => ({
    //     name: repo.name,
    // }))

    // trying same thing with foreach
    if(!Array.isArray(res)) return;
    let repos: Repo[] = [];
    res.forEach((repo) => {
        repos.push({name: repo.name});
    });

    console.log({repos});
    return Response.json(repos)
}