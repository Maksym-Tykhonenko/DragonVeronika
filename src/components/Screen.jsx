import { ImageBackground } from "react-native"

const Screen = ({ child, full, middle, plain, intro }) => {

    const image = full ? require('../assets/upgr/bg.png')
        : middle ? require('../assets/upgr/bg.png')
            : plain ? require('../assets/upgr/bg.png')
                : intro ? require('../assets/upgr/bg.png')
                    : null;
    
    return (
        <ImageBackground source={image} style={{ flex: 1 }}>
            {child}
        </ImageBackground>
    )
};

export default Screen;