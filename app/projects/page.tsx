
export default function Projects() {

    return (
        <main className="">
            <h1 className="m-5 text-2xl text-center">Projects</h1>
            <div className="my-5 min-w-min max-w-[50vh] p-[20px] bg-[#ff7b7b37] align-center items-center text-center m-auto border-2 border-slate-300 rounded-lg"> 
                <p className="text-xl mb-2" >hollowhuu.com</p>
                <p className="text-lg text-slate-300">Portfolio website (this website)</p>                
            </div>
            <div className="my-5 min-w-min max-w-[50vh] p-[20px] bg-[#ff7b7b37] align-center items-center text-center m-auto border-2 border-slate-300 rounded-lg"> 
                <p className="text-xl mb-2">valorant.aesirdev.tech</p>
                <p className="text-lg text-slate-300">Website used to connect Discord account with Lunar Discord bot</p>
                <img className="m-auto" src="https://cdn.discordapp.com/attachments/702085428185923586/1171538885302550709/image.png?ex=655d0b9c&is=654a969c&hm=d0b6ce14ce8ae7fb3ef70efa3f97626e12ccf395f0b627278bdec2b9e82baf5d&" alt="" />
                <div className="flex text-sm mt-2 justify-evenly">
                    
                    <span><a href="https://github.com/HollowHuu/valorant.aesirdev.tech" target="_blank">GitHub</a></span>
                    <span><a href="https://valorant.aesirdev.tech" target="_blank">Website</a></span>
                    
                </div>
            </div>
            <div className="my-5 min-w-min max-w-[50vh] p-[20px] bg-[#ff7b7b37] align-center items-center text-center m-auto border-2 border-slate-300 rounded-lg"> 
                <p className="text-xl mb-2">Lunar Discord Bot</p>
                <p className="text-lg text-slate-300">Discord Bot that goes with above website</p>
                <img className="m-auto" src="https://cdn.discordapp.com/attachments/702085428185923586/1171537947309391914/image.png?ex=655d0abc&is=654a95bc&hm=ef55229c8c2274c87cb38b9ade6cee7863f3fc9f352ca2c5ec52b9fc31189352&" alt="" />
            </div>
        </main>
    )

}