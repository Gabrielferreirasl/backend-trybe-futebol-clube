import { createMatch } from '../interfaces/matchsInterfaces';
import Clubs from '../models/clubs';
import Matchs from '../models/matchs';
import ServerCodes from '../utils/serverCodes';

export default class MatchsServices {
  public static async getAll(inProgress: string) {
    let where = {};

    if (inProgress === 'true' || inProgress === 'false') {
      where = { inProgress: inProgress === 'true' };
    }

    const allMatchs = await Matchs.findAll({
      include: [
        { model: Clubs, as: 'homeClub', attributes: [['club_name', 'clubName']] },
        { model: Clubs, as: 'awayClub', attributes: [['club_name', 'clubName']] },
      ],
      where,
    });

    return {
      response: allMatchs,
      code: ServerCodes.RECEIVED,
    };
  }

  public static async create(objMatch: createMatch) {
    delete objMatch.userId;

    if (objMatch.awayTeam === objMatch.homeTeam) {
      return { response:
        { message: 'It is not possible to create a match with two equal teams' },
          code: ServerCodes.TOKEN_OR_FIELD_BAD_REQUEST }
    }
    const { id } = await Matchs.create(objMatch);

    return {
      response: { id, ...objMatch },
      code: ServerCodes.CREATED,
    }
  }
}
