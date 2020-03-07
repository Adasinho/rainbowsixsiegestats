const Type = (type) => {
    switch(type) {
        case "defender": case "d": case "D":
            return "Defender";
        case "attacker": case "A": case "a":
            return "Attacker";
        case "recruit": case "R": case "r":
            return "Recruit";
        default:
            return "";
    }
};

const Operator = (id, name, type) => {
    const fixedType = Type(type);
    return {id, name, type: fixedType};
};

const OperatorsList = {
    smoke : Operator("2:1", "Smoke", "D"),
    castle : Operator("2:2", "Castle", "D"),
    doc : Operator("2:3", "Doc", "D"),
    glaz : Operator("2:4", "Glaz", "A"),
    blitz : Operator("2:5", "Blitz", "A"),
    buck : Operator("2:6", "Buck", "A"),
    blackbeard : Operator("2:7", "Blackbeard", "A"),
    capitao : Operator("2:8", "Capitao", "A"),
    hibana : Operator("2:9", "Hibana", "A"),
    jackal : Operator("2:A", "Jackal", "A"),
    ying : Operator("2:B", "Ying", "A"),
    ela : Operator("2:C", "Ela", "D"),
    dokkaebi : Operator("2:D", "Dokkaebi", "A"),
    maestro : Operator("2:F", "Maestro", "D"),
    mute : Operator("3:1", "Mute", "D"),
    ash : Operator("3:2", "Ash", "A"),
    rook : Operator("3:3", "Rook", "D"),
    fuze : Operator("3:4", "Fuze", "A"),
    iq : Operator("3:5", "IQ", "A"),
    frost : Operator("3:6", "Frost", "D"),
    valkyrie : Operator("3:7", "Valkyrie", "D"),
    caveira : Operator("3:8", "Caveira", "D"),
    echo : Operator("3:9", "Echo", "D"),
    mira : Operator("3:A", "Mira", "D"),
    lesion : Operator("3:B", "Lesion", "D"),
    zofia : Operator("3:C", "Zofia", "A"),
    vigil : Operator("3:D", "Vigil", "D"),
    lion : Operator("3:E", "Lion", "A"),
    alibi : Operator("3:F", "Alibi", "D"),
    sledge : Operator("4:1", "Sledge", "A"),
    pulse : Operator("4:2", "Pulse", "D"),
    twitch : Operator("4:3", "Twitch", "A"),
    kapkan : Operator("4:4", "Kapkan", "D"),
    jager : Operator("4:5", "Jager", "D"),
    finka : Operator("4:E", "Finka", "A"),
    tatcher : Operator("5:1", "Tatcher", "A"),
    termite : Operator("5:2", "Termite", "A"),
    montage : Operator("5:3", "Montage", "A"),
    tachanka : Operator("5:4", "Tachanka", "D"),
    bandit : Operator("5:5", "Bandit", "D"),
    gsg9 : Operator("1:5", "GSG9", "R"),
    spetsnaz : Operator("1:4", "Spetsnaz", "R"),
    gign : Operator("1:3", "GIGN", "R"),
    fbi : Operator("1:2", "FBI", "R"),
    sas : Operator("1:1", "SAS", "R"),
    nomad : Operator("2:11", "Nomad", "A"),
    kaid : Operator("3:11", "Kaid", "D"),
    clash : Operator("3:10", "Clash", "D"),
    maverick : Operator("2:10", "Maverick", "A"),
    gridlock : Operator("2:12", "Gridlock", "A"),
    mozzie : Operator("3:12", "Mozzie", "D")
};

class Operators {
    static list = {...OperatorsList};

    static getOperatorById = id => {
        let mapOperators = Object.values(this.list);
        let ret = "";
        mapOperators.map(item => {
            if(item.id === id) ret = item;
        });

        return ret;
    };

    static getOperatorNameById = id => {
        return this.getOperatorById(id).name;
    };
}

export default Operators;