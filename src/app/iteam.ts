export interface ITeam {
    id: number,
    ranking: number,
    name: string,
    logo: string,
    players: [
        {
            fullname: string,
            image: string,
            nickname: string,
            country: {
                name: string,
                flag: string
            }
        }
    ]
}

