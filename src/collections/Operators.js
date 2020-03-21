const ImageType = {
    icon: "icon",
    posture: "posture"
};

// source https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/operators/${operator}
const getOperatorPhotoPath = (operator, type) => {
    switch(type) {
        case ImageType.icon:
            return `${process.env.PUBLIC_URL}/photos/operators/r6-operators-list-${operator.toLowerCase()}.webp`;
        case ImageType.posture:
            return `${process.env.PUBLIC_URL}/photos/operators/r6-operator-${operator.toLowerCase()}.webp`;
        default:
            return "";
    }
};

export {getOperatorPhotoPath, ImageType};