export default {
    matchsWithoutFilter: [
        {
          id: 1,
          homeTeam: 16,
          homeTeamGoals: 1,
          awayTeam: 8,
          awayTeamGoals: 1,
          inProgress: false,
          homeClub: {
            clubName: 'São Paulo'
          },
          awayClub: {
            clubName: 'Grêmio'
          }
        },
        {
          id: 41,
          homeTeam: 16,
          homeTeamGoals: 2,
          awayTeam: 9,
          awayTeamGoals: 0,
          inProgress: true,
          homeClub: {
            clubName: 'São Paulo'
          },
          awayClub: {
            clubName: 'Internacional'
          }
        },
      ],
      matchsWithProgressTrue: [
        {
          "id": 41,
          "homeTeam": 16,
          "homeTeamGoals": 2,
          "awayTeam": 9,
          "awayTeamGoals": 0,
          "inProgress": true,
          "homeClub": {
            "clubName": "São Paulo"
          },
          "awayClub": {
            "clubName": "Internacional"
          }
        },
        {
          "id": 42,
          "homeTeam": 6,
          "homeTeamGoals": 1,
          "awayTeam": 1,
          "awayTeamGoals": 0,
          "inProgress": true,
          "homeClub": {
            "clubName": "Ferroviária"
          },
          "awayClub": {
            "clubName": "Avaí/Kindermann"
          }
        }
      ],
      matchsWithProgressFalse: [
        {
          "id": 1,
          "homeTeam": 16,
          "homeTeamGoals": 1,
          "awayTeam": 8,
          "awayTeamGoals": 1,
          "inProgress": false,
          "homeClub": {
            "clubName": "São Paulo"
          },
          "awayClub": {
            "clubName": "Grêmio"
          }
        },
        {
          "id": 2,
          "homeTeam": 9,
          "homeTeamGoals": 1,
          "awayTeam": 14,
          "awayTeamGoals": 1,
          "inProgress": false,
          "homeClub": {
            "clubName": "Internacional"
          },
          "awayClub": {
            "clubName": "Santos"
          }
        }
      ],
      matchToBeAdded: {
        "homeTeam": 16,
        "awayTeam": 8,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
        "inProgress": true,
      },
      matchToBeAddedEqualTeams: {
        "homeTeam": 8,
        "awayTeam": 8,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
        "inProgress": true,
      },
      matchFinished: {
        "id": 1,
        "homeTeam": 16,
        "awayTeam": 8,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
        "inProgress": false,
      },
      editMatch: {
        "homeTeamGoals": 3,
        "awayTeamGoals": 1
      },
      allMatchs: [
        {
          "id": 1,
          "homeTeam": 16,
          "homeTeamGoals": 1,
          "awayTeam": 8,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 16,
          "away_team": 8,
          "homeClub": {
            "clubName": "São Paulo"
          },
          "awayClub": {
            "clubName": "Grêmio"
          }
        },
        {
          "id": 2,
          "homeTeam": 9,
          "homeTeamGoals": 1,
          "awayTeam": 14,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 9,
          "away_team": 14,
          "homeClub": {
            "clubName": "Internacional"
          },
          "awayClub": {
            "clubName": "Santos"
          }
        },
        {
          "id": 3,
          "homeTeam": 4,
          "homeTeamGoals": 3,
          "awayTeam": 11,
          "awayTeamGoals": 0,
          "inProgress": false,
          "home_team": 4,
          "away_team": 11,
          "homeClub": {
            "clubName": "Corinthians"
          },
          "awayClub": {
            "clubName": "Napoli-SC"
          }
        },
        {
          "id": 4,
          "homeTeam": 3,
          "homeTeamGoals": 0,
          "awayTeam": 2,
          "awayTeamGoals": 0,
          "inProgress": false,
          "home_team": 3,
          "away_team": 2,
          "homeClub": {
            "clubName": "Botafogo"
          },
          "awayClub": {
            "clubName": "Bahia"
          }
        },
        {
          "id": 5,
          "homeTeam": 7,
          "homeTeamGoals": 1,
          "awayTeam": 10,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 7,
          "away_team": 10,
          "homeClub": {
            "clubName": "Flamengo"
          },
          "awayClub": {
            "clubName": "Minas Brasília"
          }
        },
        {
          "id": 6,
          "homeTeam": 5,
          "homeTeamGoals": 1,
          "awayTeam": 13,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 5,
          "away_team": 13,
          "homeClub": {
            "clubName": "Cruzeiro"
          },
          "awayClub": {
            "clubName": "Real Brasília"
          }
        },
        {
          "id": 7,
          "homeTeam": 12,
          "homeTeamGoals": 2,
          "awayTeam": 6,
          "awayTeamGoals": 2,
          "inProgress": false,
          "home_team": 12,
          "away_team": 6,
          "homeClub": {
            "clubName": "Palmeiras"
          },
          "awayClub": {
            "clubName": "Ferroviária"
          }
        },
        {
          "id": 8,
          "homeTeam": 15,
          "homeTeamGoals": 0,
          "awayTeam": 1,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 15,
          "away_team": 1,
          "homeClub": {
            "clubName": "São José-SP"
          },
          "awayClub": {
            "clubName": "Avaí/Kindermann"
          }
        },
        {
          "id": 9,
          "homeTeam": 1,
          "homeTeamGoals": 0,
          "awayTeam": 12,
          "awayTeamGoals": 3,
          "inProgress": false,
          "home_team": 1,
          "away_team": 12,
          "homeClub": {
            "clubName": "Avaí/Kindermann"
          },
          "awayClub": {
            "clubName": "Palmeiras"
          }
        },
        {
          "id": 10,
          "homeTeam": 2,
          "homeTeamGoals": 0,
          "awayTeam": 9,
          "awayTeamGoals": 2,
          "inProgress": false,
          "home_team": 2,
          "away_team": 9,
          "homeClub": {
            "clubName": "Bahia"
          },
          "awayClub": {
            "clubName": "Internacional"
          }
        },
        {
          "id": 11,
          "homeTeam": 13,
          "homeTeamGoals": 1,
          "awayTeam": 3,
          "awayTeamGoals": 0,
          "inProgress": false,
          "home_team": 13,
          "away_team": 3,
          "homeClub": {
            "clubName": "Real Brasília"
          },
          "awayClub": {
            "clubName": "Botafogo"
          }
        },
        {
          "id": 12,
          "homeTeam": 6,
          "homeTeamGoals": 0,
          "awayTeam": 4,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 6,
          "away_team": 4,
          "homeClub": {
            "clubName": "Ferroviária"
          },
          "awayClub": {
            "clubName": "Corinthians"
          }
        },
        {
          "id": 13,
          "homeTeam": 8,
          "homeTeamGoals": 2,
          "awayTeam": 5,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 8,
          "away_team": 5,
          "homeClub": {
            "clubName": "Grêmio"
          },
          "awayClub": {
            "clubName": "Cruzeiro"
          }
        },
        {
          "id": 14,
          "homeTeam": 14,
          "homeTeamGoals": 2,
          "awayTeam": 16,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 14,
          "away_team": 16,
          "homeClub": {
            "clubName": "Santos"
          },
          "awayClub": {
            "clubName": "São Paulo"
          }
        },
        {
          "id": 15,
          "homeTeam": 10,
          "homeTeamGoals": 0,
          "awayTeam": 15,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 10,
          "away_team": 15,
          "homeClub": {
            "clubName": "Minas Brasília"
          },
          "awayClub": {
            "clubName": "São José-SP"
          }
        },
        {
          "id": 16,
          "homeTeam": 11,
          "homeTeamGoals": 0,
          "awayTeam": 7,
          "awayTeamGoals": 0,
          "inProgress": false,
          "home_team": 11,
          "away_team": 7,
          "homeClub": {
            "clubName": "Napoli-SC"
          },
          "awayClub": {
            "clubName": "Flamengo"
          }
        },
        {
          "id": 17,
          "homeTeam": 1,
          "homeTeamGoals": 2,
          "awayTeam": 8,
          "awayTeamGoals": 3,
          "inProgress": false,
          "home_team": 1,
          "away_team": 8,
          "homeClub": {
            "clubName": "Avaí/Kindermann"
          },
          "awayClub": {
            "clubName": "Grêmio"
          }
        },
        {
          "id": 18,
          "homeTeam": 12,
          "homeTeamGoals": 4,
          "awayTeam": 5,
          "awayTeamGoals": 2,
          "inProgress": false,
          "home_team": 12,
          "away_team": 5,
          "homeClub": {
            "clubName": "Palmeiras"
          },
          "awayClub": {
            "clubName": "Cruzeiro"
          }
        },
        {
          "id": 19,
          "homeTeam": 11,
          "homeTeamGoals": 2,
          "awayTeam": 2,
          "awayTeamGoals": 2,
          "inProgress": false,
          "home_team": 11,
          "away_team": 2,
          "homeClub": {
            "clubName": "Napoli-SC"
          },
          "awayClub": {
            "clubName": "Bahia"
          }
        },
        {
          "id": 20,
          "homeTeam": 7,
          "homeTeamGoals": 0,
          "awayTeam": 9,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 7,
          "away_team": 9,
          "homeClub": {
            "clubName": "Flamengo"
          },
          "awayClub": {
            "clubName": "Internacional"
          }
        },
        {
          "id": 21,
          "homeTeam": 6,
          "homeTeamGoals": 3,
          "awayTeam": 13,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 6,
          "away_team": 13,
          "homeClub": {
            "clubName": "Ferroviária"
          },
          "awayClub": {
            "clubName": "Real Brasília"
          }
        },
        {
          "id": 22,
          "homeTeam": 4,
          "homeTeamGoals": 3,
          "awayTeam": 3,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 4,
          "away_team": 3,
          "homeClub": {
            "clubName": "Corinthians"
          },
          "awayClub": {
            "clubName": "Botafogo"
          }
        },
        {
          "id": 23,
          "homeTeam": 15,
          "homeTeamGoals": 2,
          "awayTeam": 16,
          "awayTeamGoals": 3,
          "inProgress": false,
          "home_team": 15,
          "away_team": 16,
          "homeClub": {
            "clubName": "São José-SP"
          },
          "awayClub": {
            "clubName": "São Paulo"
          }
        },
        {
          "id": 24,
          "homeTeam": 10,
          "homeTeamGoals": 2,
          "awayTeam": 14,
          "awayTeamGoals": 2,
          "inProgress": false,
          "home_team": 10,
          "away_team": 14,
          "homeClub": {
            "clubName": "Minas Brasília"
          },
          "awayClub": {
            "clubName": "Santos"
          }
        },
        {
          "id": 25,
          "homeTeam": 2,
          "homeTeamGoals": 0,
          "awayTeam": 6,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 2,
          "away_team": 6,
          "homeClub": {
            "clubName": "Bahia"
          },
          "awayClub": {
            "clubName": "Ferroviária"
          }
        },
        {
          "id": 26,
          "homeTeam": 13,
          "homeTeamGoals": 1,
          "awayTeam": 1,
          "awayTeamGoals": 0,
          "inProgress": false,
          "home_team": 13,
          "away_team": 1,
          "homeClub": {
            "clubName": "Real Brasília"
          },
          "awayClub": {
            "clubName": "Avaí/Kindermann"
          }
        },
        {
          "id": 27,
          "homeTeam": 5,
          "homeTeamGoals": 1,
          "awayTeam": 15,
          "awayTeamGoals": 2,
          "inProgress": false,
          "home_team": 5,
          "away_team": 15,
          "homeClub": {
            "clubName": "Cruzeiro"
          },
          "awayClub": {
            "clubName": "São José-SP"
          }
        },
        {
          "id": 28,
          "homeTeam": 16,
          "homeTeamGoals": 3,
          "awayTeam": 7,
          "awayTeamGoals": 0,
          "inProgress": false,
          "home_team": 16,
          "away_team": 7,
          "homeClub": {
            "clubName": "São Paulo"
          },
          "awayClub": {
            "clubName": "Flamengo"
          }
        },
        {
          "id": 29,
          "homeTeam": 9,
          "homeTeamGoals": 0,
          "awayTeam": 4,
          "awayTeamGoals": 4,
          "inProgress": false,
          "home_team": 9,
          "away_team": 4,
          "homeClub": {
            "clubName": "Internacional"
          },
          "awayClub": {
            "clubName": "Corinthians"
          }
        },
        {
          "id": 30,
          "homeTeam": 3,
          "homeTeamGoals": 0,
          "awayTeam": 12,
          "awayTeamGoals": 4,
          "inProgress": false,
          "home_team": 3,
          "away_team": 12,
          "homeClub": {
            "clubName": "Botafogo"
          },
          "awayClub": {
            "clubName": "Palmeiras"
          }
        },
        {
          "id": 31,
          "homeTeam": 8,
          "homeTeamGoals": 2,
          "awayTeam": 10,
          "awayTeamGoals": 0,
          "inProgress": false,
          "home_team": 8,
          "away_team": 10,
          "homeClub": {
            "clubName": "Grêmio"
          },
          "awayClub": {
            "clubName": "Minas Brasília"
          }
        },
        {
          "id": 32,
          "homeTeam": 14,
          "homeTeamGoals": 5,
          "awayTeam": 11,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 14,
          "away_team": 11,
          "homeClub": {
            "clubName": "Santos"
          },
          "awayClub": {
            "clubName": "Napoli-SC"
          }
        },
        {
          "id": 33,
          "homeTeam": 1,
          "homeTeamGoals": 1,
          "awayTeam": 16,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 1,
          "away_team": 16,
          "homeClub": {
            "clubName": "Avaí/Kindermann"
          },
          "awayClub": {
            "clubName": "São Paulo"
          }
        },
        {
          "id": 34,
          "homeTeam": 9,
          "homeTeamGoals": 3,
          "awayTeam": 6,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 9,
          "away_team": 6,
          "homeClub": {
            "clubName": "Internacional"
          },
          "awayClub": {
            "clubName": "Ferroviária"
          }
        },
        {
          "id": 35,
          "homeTeam": 10,
          "homeTeamGoals": 1,
          "awayTeam": 5,
          "awayTeamGoals": 3,
          "inProgress": false,
          "home_team": 10,
          "away_team": 5,
          "homeClub": {
            "clubName": "Minas Brasília"
          },
          "awayClub": {
            "clubName": "Cruzeiro"
          }
        },
        {
          "id": 36,
          "homeTeam": 2,
          "homeTeamGoals": 0,
          "awayTeam": 7,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 2,
          "away_team": 7,
          "homeClub": {
            "clubName": "Bahia"
          },
          "awayClub": {
            "clubName": "Flamengo"
          }
        },
        {
          "id": 37,
          "homeTeam": 15,
          "homeTeamGoals": 0,
          "awayTeam": 13,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 15,
          "away_team": 13,
          "homeClub": {
            "clubName": "São José-SP"
          },
          "awayClub": {
            "clubName": "Real Brasília"
          }
        },
        {
          "id": 38,
          "homeTeam": 14,
          "homeTeamGoals": 2,
          "awayTeam": 4,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 14,
          "away_team": 4,
          "homeClub": {
            "clubName": "Santos"
          },
          "awayClub": {
            "clubName": "Corinthians"
          }
        },
        {
          "id": 39,
          "homeTeam": 3,
          "homeTeamGoals": 2,
          "awayTeam": 11,
          "awayTeamGoals": 0,
          "inProgress": false,
          "home_team": 3,
          "away_team": 11,
          "homeClub": {
            "clubName": "Botafogo"
          },
          "awayClub": {
            "clubName": "Napoli-SC"
          }
        },
        {
          "id": 40,
          "homeTeam": 12,
          "homeTeamGoals": 4,
          "awayTeam": 8,
          "awayTeamGoals": 1,
          "inProgress": false,
          "home_team": 12,
          "away_team": 8,
          "homeClub": {
            "clubName": "Palmeiras"
          },
          "awayClub": {
            "clubName": "Grêmio"
          }
        },
        {
          "id": 41,
          "homeTeam": 16,
          "homeTeamGoals": 2,
          "awayTeam": 9,
          "awayTeamGoals": 0,
          "inProgress": true,
          "home_team": 16,
          "away_team": 9,
          "homeClub": {
            "clubName": "São Paulo"
          },
          "awayClub": {
            "clubName": "Internacional"
          }
        },
        {
          "id": 42,
          "homeTeam": 6,
          "homeTeamGoals": 1,
          "awayTeam": 1,
          "awayTeamGoals": 0,
          "inProgress": true,
          "home_team": 6,
          "away_team": 1,
          "homeClub": {
            "clubName": "Ferroviária"
          },
          "awayClub": {
            "clubName": "Avaí/Kindermann"
          }
        },
        {
          "id": 43,
          "homeTeam": 11,
          "homeTeamGoals": 0,
          "awayTeam": 10,
          "awayTeamGoals": 0,
          "inProgress": true,
          "home_team": 11,
          "away_team": 10,
          "homeClub": {
            "clubName": "Napoli-SC"
          },
          "awayClub": {
            "clubName": "Minas Brasília"
          }
        },
        {
          "id": 44,
          "homeTeam": 7,
          "homeTeamGoals": 2,
          "awayTeam": 15,
          "awayTeamGoals": 2,
          "inProgress": true,
          "home_team": 7,
          "away_team": 15,
          "homeClub": {
            "clubName": "Flamengo"
          },
          "awayClub": {
            "clubName": "São José-SP"
          }
        },
        {
          "id": 45,
          "homeTeam": 5,
          "homeTeamGoals": 1,
          "awayTeam": 3,
          "awayTeamGoals": 1,
          "inProgress": true,
          "home_team": 5,
          "away_team": 3,
          "homeClub": {
            "clubName": "Cruzeiro"
          },
          "awayClub": {
            "clubName": "Botafogo"
          }
        },
        {
          "id": 46,
          "homeTeam": 4,
          "homeTeamGoals": 1,
          "awayTeam": 12,
          "awayTeamGoals": 1,
          "inProgress": true,
          "home_team": 4,
          "away_team": 12,
          "homeClub": {
            "clubName": "Corinthians"
          },
          "awayClub": {
            "clubName": "Palmeiras"
          }
        },
        {
          "id": 47,
          "homeTeam": 8,
          "homeTeamGoals": 1,
          "awayTeam": 14,
          "awayTeamGoals": 2,
          "inProgress": true,
          "home_team": 8,
          "away_team": 14,
          "homeClub": {
            "clubName": "Grêmio"
          },
          "awayClub": {
            "clubName": "Santos"
          }
        },
        {
          "id": 48,
          "homeTeam": 13,
          "homeTeamGoals": 1,
          "awayTeam": 2,
          "awayTeamGoals": 1,
          "inProgress": true,
          "home_team": 13,
          "away_team": 2,
          "homeClub": {
            "clubName": "Real Brasília"
          },
          "awayClub": {
            "clubName": "Bahia"
          }
        }
      ],
}