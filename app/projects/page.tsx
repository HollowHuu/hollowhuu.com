"use client";

import GithubCards from "@/components/githubCards";
import { use, useEffect, useState } from "react";

export default function Projects() {

    const [mounted, setMounted] = useState(false);
    const [repos, setRepos] = useState<string[]>([]);

    const testRepos = ["hollowhuu.com", "valorant.aesirdev.tech", "lunar-web", "lunar-bot", "ScoreFeedJS"]

    useEffect(() => {
        setMounted(true);
        document.title = "Projects | HollowHuu";

        if(repos.length > 0) return;
        async function FetchRepos() {
            let data = await fetch(`/api/user`).then(res => res.json());
            let repoList = data.repos.map((repo: any) => repo.name);
            console.log({data})
            setRepos(repoList);
            console.log({repoList})
        }
        FetchRepos();
    }, [])

    if(!mounted) return (<div></div>)
    return (
        <div> 
            {repos.map(repo => {
                return (
                    <main key={repo} className="flex m-auto justify-center mt-2">
                        <GithubCards id={repo}/>
                    </main>
            )
        })}
        </div>

    )

}