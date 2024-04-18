/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import SteamDetails from "./SteamDetails";
import { getLevelByGPQ } from "./utils/getLevelByGPQ";

interface UserGitHub {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: null;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}

function App() {
    const [infoGithub, setInfoGithub] = useState<UserGitHub>();
    // const [totalCommits, setTotalCommits] = useState<number>(0)

    // You can see totalCommits in tab of activity in https://github.com/YOUR_USERNAME?tab=overview&from=2024-04-01&to=2024-12-31
    const totalCommits = 4239;

    const userGitHub = "igaaoo";
    // const accessToken = import.meta.env.GITHUB_API_TOKEN;
    const subnick = "igaaoo";

    // BlueLight
    const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/570/c6a479fae8979bc9c1a02378e488e3ce06b52cb1.png";
    // Cuttie 
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2855140/4324f3a8e05e1c110fad71443d61c7ba82c4e474.png"
    // Halloween 
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2603600/ba1ce3d28ef75329afe4e784b1b6f9fe863cfae4.png";
    // Fire
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/322330/beaee5e90d93bfafa5f5f55acb23abfd28ad180c.png"

    const flag = "br";

    // Year of your birthday
    const birthday = 2002;

    // since your are developer
    const sinceExperience = 2020;
    const infoSubTitle = "Apaixonado por Tecnologia";

    const badgeTitle = "Desenvolvedor Full Stack";
    const badgeEXP = "50,649";
    const badgeIcon = "https://community.cloudflare.steamstatic.com/public/images/badges/30_steamawardnominations/level04_80.png";
    // Default
    // const badgeIcon = "/badge_icon.png"

    const twitterLink = "https://www.linkedin.com/in/igor-neves-8ba5a8215/";
    // Default
    // const awardIconLink = "/award_icon.svg"
    const perfilIconLink = "https://www.linkedin.com/in/igor-neves-8ba5a8215/";



    useEffect(() => {
        fetch("https://api.github.com/users/igaaoo")
            .then(response => response.json())
            .then(data => {
                setInfoGithub(data);
            });

        // getTotalCommits(userGitHub, accessToken)
        //     .then(totalCommits => console.log('Total de commits:', totalCommits))
        //     .catch(error => console.error('Erro ao obter total de commits:', error));
    }, []);

    const urlAvatar = "https://github.com/" + userGitHub + ".png";
    const nickname = infoGithub?.name;
    const location = infoGithub?.location;
    const infoTitle = infoGithub?.bio;
    const githubLink = "https://github.com/" + userGitHub;

    return (
        <SteamDetails>
            <div className="background"></div>

            <div className="content">
                <div className="header">
                    <div className="avatar">
                        <img src={urlAvatar} alt="" />
                        <img className="border" src={avatarBorder} alt="" />
                    </div>

                    <div className="nickname">
                        <h2>{nickname}</h2>

                        <div className="subnick">
                            <p>{subnick}</p>
                            <p className="city"><img src={"https://community.cloudflare.steamstatic.com/public/images/countryflags/" + flag + ".gif"} /> {location}</p>
                        </div>

                        <div className="info">
                            <p>{infoTitle}</p>
                            <i>{infoSubTitle}</i>
                            <a href={githubLink} target="_blank">Acessar Github</a>
                        </div>
                    </div>

                    <div className="level">
                        <h2>Nível <span>{new Date().getFullYear() - birthday}</span></h2>

                        <div className="badge">
                            <div className="leftContent">
                                <img src={badgeIcon} alt="BadgeIcon" />
                            </div>

                            <div className="rightContent">
                                <h4>{badgeTitle}</h4>
                                <p>{badgeEXP} XP</p>
                            </div>
                        </div>

                        <div className="buttons">
                            <button onClick={() => window.open(twitterLink, '_blank')}>Ver Perfil LinkedIn</button>
                            <a href={perfilIconLink} target="_blank" rel="noreferrer" title="LinkedIn">
                                <img className="avatar" src="/linkedin.png" alt="" />
                            </a>
                            <button type="button">...</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="subgroups">
                    <div className="group">
                        <h3><img src="https://github.com/tairosonloa/tairosonloa/blob/main/assets/wave.gif?raw=true" width="15px" /> DESENVOLVEDOR FULL STACK</h3>
                        <p> Desenvolvedor com habilidades em diversos recursos de programação. Com foco na
                            simplicidade e efetividade dos recursos. <strong> Aptidão em Next.js, React, Typescript, Node.js, Git,
                                Linux.</strong></p>

                        <h3>Tecnologias</h3>
                        <div className="groupDetails">
                            <div className="badges">
                                <img src="/js.png" alt="BadgeIcon" title="Javascript Developer" />
                                <img src="/ts.png" alt="BadgeIcon" title="Typescript Developer" />
                                <img src="/nodejs.png" alt="BadgeIcon" title="NodeJS Developer" />
                                <img src="/reactjs.png" alt="BadgeIcon" title="React Developer" />
                                <img src="/nextjs.png" alt="BadgeIcon" title="React Developer" />
                                <img src="/firebase.png" alt="BadgeIcon" title="Firebase Experience" />
                                <button title="See more on Github" onClick={() => window.location.href = githubLink}>+15</button>
                            </div>
                        </div>

                        <h3>Certificados</h3>
                        <div className="groupDetails">
                            <a href="https://cert.efset.org/CfdQLo" target="_blank" rel="noreferrer">× EF SET English Certificate ( C1 Advanced )</a>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <h2>Mais Informações</h2>

                    <div className="links">
                        <a href="">Ambientes</a>

                        <div className="badges">
                            <img src="/windows.png" alt="BadgeIcon" title="Windows" />
                            <img src="/linux.png" alt="BadgeIcon" title="Linux" />

                            <img src={"https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears" + (new Date().getFullYear() - sinceExperience) + "_54.png"} alt="BadgeIcon" title="Years of Experience" />

                            {
                                getLevelByGPQ(totalCommits)
                            }
                        </div>

                        <a href={githubLink} target="_blank" rel="noreferrer">Repositórios <span>{infoGithub?.public_repos}</span></a>
                        <a href={githubLink} target="_blank" rel="noreferrer">Seguidores <span>{infoGithub?.followers}</span></a>
                        <a href={githubLink} target="_blank" rel="noreferrer">Seguindo <span>{infoGithub?.following}</span></a>
                    </div>

                    <h2 className="title">Top Repositórios</h2>

                    <div className="links">
                        <a href="https://github.com/igaaoo/Next-Template" className="link" target="_blank" rel="noreferrer">Template Nextjs</a>
                        <a href="https://github.com/igaaoo/on-stock-front" className="link" target="_blank" rel="noreferrer">On Stock</a>
                        <a href="https://github.com/igaaoo/api-games-currency" className="link" target="_blank" rel="noreferrer">Games Currency</a>
                        <a href="https://github.com/igaaoo/calctose" className="link" target="_blank" rel="noreferrer">Calctose</a>
                        <a href="https://galeriacastro.vercel.app/" className="link" target="_blank" rel="noreferrer">Galeria Castro</a>
                        <a href="https://simnautilus.vercel.app/" className="link" target="_blank" rel="noreferrer">Simulador Nautilus</a>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <a href="https://github.com/Yagasaki7K" target="_blank" rel="noreferrer">© {new Date().getFullYear()} Igor Neves </a>
            </div>
        </SteamDetails>
    );
}

export default App;
