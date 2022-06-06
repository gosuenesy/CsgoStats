export interface IResult {
    event: {
        name: string,
        logo: string
    },
    maps: string,
    time: Date,
    teams: [
        {
            name: string,
            logo: string,
            result: number
        }
    ],
    matchId: number
}
