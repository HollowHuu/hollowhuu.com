interface Repos {
    name: string;
}

// Return all repos from my Github account
export async function GET() {
    let res = await fetch(`https://api.github.com/users/hollowhuu/repos`, {
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        }
    }).then(res => res.json()) as Repos[];

    let repos = res.map((repo) => ({
        name: repo.name,
    }))

    console.log({repos});
    return Response.json(repos)
}