import { useState, useEffect, useDebugValue } from 'react';

class GithubCard {
    name: string;
    description: string;
    html_url: string;
    language: string;
    color: string;
    constructor(props: GithubCardProps) {
        this.name = props.name;
        this.description = props.description;
        this.html_url = props.html_url;
        this.language = props.language;
        this.color = LanguageColors.get(props.language) || '#fff';
    }
}

interface GithubCardProps {
    name: string;
    description: string;
    html_url: string;
    language: string;
}

const LanguageColors = new Map<string, string>([
    ['JavaScript', '#f1e05a'],
    ['TypeScript', '#2b7489'],
    ['HTML', '#e34c26'],
    ['Rust', '#dea584'],
    ['C#', '#178600'],
])

export default function GithubCards({ id }: { id: string }) {
    const [mounted, setMounted] = useState(false);
    const [repo, setRepo] = useState<GithubCard>();

    useEffect(() => {
        setMounted(true)

        async function SetRepo() {
            let data = await fetch(`/api/repo`, {
                headers: {
                    name: id
                }
            }).then(res => res.json());
            
            if(!data.name) return;

            setRepo(new GithubCard(data))
        }

        if(!repo) SetRepo();
        

    }, [id, repo]);

    if(!repo) return
    if(!mounted) return
    return (
        <div>
            <svg key={repo?.name} width={400} height={120}>
                <rect x={0} y={0} width={400} height={120} className='fill-slate-900 stroke-1 stroke-white z-1'/>
                <g transform='translate(25,30)'>
                    <g transform='translate(-10, -10) scale(1.5)'>
                    <svg>
                        <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" className='fill-green-500' d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                    </svg>
                    </g>
                </g>
                <g transform='translate(70, 40) scale(1.5)'>
                    <text fill='#fff' className='fill-white font-3xl block' x={0} y={0}><a className='text-white fill-white' href={repo?.html_url}>{repo?.name}</a></text>
                </g>
                {/* Description */}
                <g transform='translate(20, 80) scale(.8)'>
                    <text className='fill-slate-200 block' x={0} y={0}>{repo?.description}</text>
                </g>
                {/* Lang */}
                <g transform='translate(20, 110) scale(.8)'>
                    <circle cx={0} cy={-5} r={6} style={{fill: repo?.color}}></circle>
                    <text x={15} className='fill-slate-200'>{repo?.language}</text>
                </g>
            </svg>
        </div>
    )
}