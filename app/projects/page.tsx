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
            if (data.error) return console.error(data.error);
            let repoList = data.map((repo: any) => repo.name);
            setRepos(repoList);
            console.log({repoList})
        }
        FetchRepos();
    }, [])

    if(!mounted) return (<div></div>)
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Projects</h1>
            <p className="text-xl">Here are some of my projects.</p>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center">
                        <div className="align-center m-auto grid grid-cols-2 gap-4"> 
                            {repos.map(repo => {
                                return (
                                    <GithubCards key={repo} id={repo}/>
                            )
                        }).filter((repo) => repo.props.id != "HollowHuu")}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

} 