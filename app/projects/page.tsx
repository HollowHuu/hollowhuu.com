"use client";

import GithubCards from "@/components/githubCards";
import { useEffect, useState } from "react";

export default function Projects() {

    const [mounted, setMounted] = useState(false);
    const [repos, setRepos] = useState<string[]>([]);

    useEffect(() => {
        setMounted(true);
        document.title = "Projects | HollowHuu";

        if(repos.length > 0) return;

        // Fetch repos from api/user endpoint
        async function FetchRepos() {
            let data = await fetch(`/api/user`).then(res => res.json());
            if (data.error) return console.error(data.error);
            let repoList = data.map((repo: any) => repo.name);
            setRepos(repoList);
        }
        FetchRepos();
    }, [repos.length])

    if(!mounted) return (<div></div>)
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mt-2">Projects</h1>
            <p className="text-xl mb-10">Here are some of my projects.</p>
            <div className="flex flex-col justify-center items-center border-2 border-red-500 p-3 rounded bg-black/50">
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