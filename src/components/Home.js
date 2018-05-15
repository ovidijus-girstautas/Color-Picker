import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {

    state={
        colors:[
            { color: '#F34512', id: 'red', desc: 'Red, the color of blood and fire, is associated with meanings of love, passion, desire, heat, longing, lust, sexuality, sensitivity, romance, joy, strength, leadership, courage, vigor, willpower, rage, anger, danger, malice, wrath, stress, action, vibrance, radiance, and determination.'},
            { color: '#ED870D', id: 'orange', desc: 'Orange is the color of joy and creativity. Orange promotes a sense of general wellness and emotional energy that should be shared, such as compassion, passion, and warmth. Orange will help a person recover from disappointments, a wounded heart, or a blow to one’s pride.'},
            { color: '#DFC110', id: 'yellow', desc: 'Yellow, the color of sunshine, hope, and happiness, has conflicting associations. On one hand yellow stands for freshness, happiness, positivity, clarity, energy, optimism, enlightenment, remembrance, intellect, honor, loyalty, and joy, but on the other, it represents cowardice and deceit.'},
            { color: '#41A40B', id: 'green', desc: 'Green, the color of life, renewal, nature, and energy, is associated with meanings of growth, harmony, freshness, safety, fertility, and environment. Green is also traditionally associated with money, finances, banking, ambition, greed, jealousy, and wall street.'},
            { color: '#0E7CEF', id: 'blue', desc: 'Blue represents both the sky and the sea, and is associated with open spaces, freedom, intuition, imagination, expansiveness, inspiration, and sensitivity. Blue also represents meanings of depth, trust, loyalty, sincerity, wisdom, confidence, stability, faith, heaven, and intelligence.'},
            { color: '#7108BD', id: 'indigo', desc: "The color meaning of indigo reflects great devotion, wisdom and justice along with fairness and impartiality. It is a defender of people's rights to the end."},
            { color: '#C26EC2', id: 'violet', desc: 'The color violet inspires unconditional and selfless love, devoid of ego, encouraging sensitivity and compassion. Violet can be sensitive to all the different forms of pollution in the world today, whether it be air pollution, noise pollution, visual pollution or the pollution in our food chain.'}
        ],
        active: 'none'
    }

    switchActive = (id) => {
        this.setState({
            active: id
        })
        console.log(this.props);
    };

    render() {

        const color = this.state.colors.map((item, i)=>{
            return(
                <Link to={"/color/" + item.id} key={i}>
                <div key={i}
                    className={"/color/"+item.id === this.props.location.pathname ? "active-color" : "color"}
                    id={item.hat} 
                    style={{backgroundColor: item.color, height: Math.random()*100+200}}>

                    <p  key={i} 
                        className={"/color/" +item.id === this.props.location.pathname ? "color-text" : "color-text-none"}                    >
                        {item.desc}
                    </p>

                </div>
                </Link>
            )
        })

        return (
            <div>
                <div className="colorPicker">

                    <h1 className={this.props.location.pathname !== "/" ? "upper-active" : "upper"}>
                        Color
                    </h1>

                    <h1 className={this.props.location.pathname !== "/" ? "bottom-active" : null }>
                        Picker
                    </h1>

                    {color}
                </div>

            </div>
        );
    }
}

export default Home;
