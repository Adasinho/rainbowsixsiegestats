import Operators from "../collections/Operators";

class PlayerStats {
    init = (data) => {
        this.found = data.playerfound;
        this.updateDon = data.updatedon;
        this.favAttacker = data.favattacker;
        this.favDefender = data.favdefender;
        this.name = data.p_name;
        this.level = data.p_level;
        this.playTime = data.utime;
        this.kd = data.kd;
        this.visitors = data.p_visitors;
        this.currentRank = data.p_currentrank;
        this.currentMmr = data.p_currentmmr;
        this.maxRank = data.p_maxrank;
        this.maxMmr = data.p_maxmmr;
        this.skillRating = data.p_skillrating;

        this.ranked = data.ranked;
        this.rankedTimePlayed = data.data[0];
        this.rankedKills = data.data[1];
        this.rankedDeaths = data.data[2];
        this.rankedWins = data.data[3];
        this.rankedLosses = data.data[4];

        this.casualTimePlayed = data.data[5];
        this.casualKills = data.data[6];
        this.casualDeaths = data.data[7];
        this.casualWins = data.data[8];
        this.casualLosses = data.data[9];

        this.bombWins = data.data[10];
        this.bombLosses = data.data[11];

        this.secureWins = data.data[12];
        this.secureLosses = data.data[13];

        this.hostageWins = data.data[14];
        this.hostageLosses = data.data[15];

        this.totalBullets = data.data[16];
        this.headShots = data.data[17];
        this.totalMelees = data.data[18];
        this.totalRevives = data.data[19];
        this.totalSuicides = data.data[20];

        this.NA_wins = data.data[21];
        this.NA_losses = data.data[22];
        this.NA_abandons = data.data[23];
        this.NA_maxmmr = data.data[24];
        this.NA_maxrank = data.data[25];

        this.EU_wins = data.data[26];
        this.EU_losses = data.data[27];
        this.EU_abandons = data.data[28];
        this.EU_maxmmr = data.data[29];
        this.EU_maxrank = data.data[30];

        this.AS_wins = data.data[31];
        this.AS_losses = data.data[32];
        this.AS_abandons = data.data[33];
        this.AS_maxmmr = data.data[34];
        this.AS_maxrank = data.data[35];
    };

    getFixedTime = () => {
        return parseInt(this.rankedTimePlayed / 3600);
    }
}
export default PlayerStats;