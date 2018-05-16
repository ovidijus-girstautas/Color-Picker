import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class Quiz extends React.Component {

    state = {
        colors: [
            { color: '#F34512', id: 'red', r: 243, g: 69, b: 18},
            { color: '#FF9900', id: 'orange', r: 255, g: 153, b: 0},
            { color: '#DFC110', id: 'yellow', r: 223, g: 193, b: 16},
            { color: '#41A40B', id: 'green', r: 65, g: 164, b: 11},
            { color: '#0E7CEF', id: 'blue', r: 14, g: 124, b: 239},
            { color: '#7108BD', id: 'indigo', r: 113, g: 8, b: 189},
            { color: '#C26EC2', id: 'violet', r: 194, g: 110, b: 194}
        ],
        active: false,
        activeColor: '',
        r: '',
        g: '',
        b: '',
        level: 25,
        correct: 0,
        mistake: 0,
        isActiveCorrect: Array(60).fill(false),
        isActiveMistake: Array(60).fill(false),
        squares: []
    }

    //Sets the array true/false for either wrong or correct answer - used for classNames
    toggleClass = (i, color) => {
        if(this.state.correct === 5){
            ;
        }else{
            let newActiveCorrect = this.state.isActiveCorrect.slice()
            let newActiveMistake = this.state.isActiveMistake.slice()
            if (color !== this.state.activeColor) {
                newActiveCorrect[i] = true
                this.setState({ isActiveCorrect: newActiveCorrect })
            } else {
                newActiveMistake[i] = true
                this.setState({ isActiveMistake: newActiveMistake })
            }
        }
    };

    // Turns the game square ON/OFF
    setActive = () =>{
        this.setState({
            active: true
        })
    };

    // Initial game start
    setColor = (color, r, g, b) =>{
        this.setState(prevState => ({
            activeColor: color,
            r: (r + this.state.level),
            g: (g + this.state.level),
            b: (b + this.state.level),
            isActiveCorrect: Array(60).fill(false),
            isActiveMistake: Array(60).fill(false)
        }));
    };
    
    // Generates 10x6 square field where the game is played.
    displayForm(color) {
        setTimeout(() => {
            const divs = [];
            for (let i = 55; i < 60; i++) {
                divs.push(
                    <div
                        key={i}
                        id={"square" + i}
                        className={"quiz"}
                        style={{ backgroundColor: "rgb(" + this.state.r + "," + this.state.g + "," + this.state.b + ")" }}
                    ></div>)
            }
            for (let i = 0; i < 55; i++) {
                divs.push(<div key={i} id={"square" + i} className="quiz" style={{ backgroundColor: this.state.activeColor }}></div>)
            }
            const shuffledDIv = _.shuffle(divs).slice(0);
            this.setState({
                squares: shuffledDIv
            })
        }, 10);
    };

    //Used for next level button, to make sure states are cleared before next level starts.
    resetMistakes = () =>{
        this.setState({ 
            correct: 0,
            mistake: 0,
            isActiveCorrect: Array(60).fill(false),
            isActiveMistake: Array(60).fill(false)
        });
    };

    //Used to make sure state is ready when the color is picked for game start **WILL GET DELETED
    resetLevel = () => {
        this.setState({ 
            level: 25,
            correct: 0,
            mistake: 0
         });
    };

    // Makes sure the game gets harder as the level progresses
    setPlayColor = () =>{
        this.setState({
            r: this.state.r -1,
            g: this.state.g -1,
            b: this.state.b -1,
            level: this.state.level - 1
        });
    };

    //Checks if the color is either wrong or right, increases the mistakes and correct answer states
    //In case of too much mistakes, disabled the playfield
    //if all correct answers are checked, allows to progress to next round
    checkColor = (color, i) =>{
        if(this.state.correct === 5){
            ;
        } else if(this.state.activeColor !== color && this.state.isActiveCorrect[i] === false){
            this.setState({
                correct: this.state.correct + 1
            })
        } else if (this.state.activeColor !== color && this.state.isActiveCorrect[i] === true) {
            ;
        } else if (this.state.activeColor === color && this.state.isActiveMistake[i] === true) {
            ;
        }else{
            if (this.state.mistake <= 2) {
                this.setState({
                    mistake: this.state.mistake + 1
                })
            }else{
                this.setState({
                    active: false,
                    isActiveCorrect: Array(60).fill(false),
                    isActiveMistake: Array(60).fill(false),
                    mistakes: 0
                })
            }
        }
    };
    


    render() {

        const color = this.state.colors.map((item, i) => {
            return (
                <Link to={"/quiz/" + item.id} key={i} onClick={() => { this.setColor(item.color, item.r, item.g, item.b); this.resetLevel(); this.setActive(); this.displayForm()}}>
                    <div key={i}
                        
                        className={"/quiz/" + item.id === this.props.location.pathname ? "active-color" : "color"}
                        id={item.hat}
                        style={{ backgroundColor: item.color, height: 30, width: 120, display: "inline-block" }}>
                    </div>
                </Link>
            )
        });

        const squares = this.state.squares.map((item, i) =>{

            let squareClass;
            if (this.state.isActiveCorrect[i] === true) {
                squareClass = "quiz border"
            } else if (this.state.isActiveMistake[i] === true) {
                squareClass = "quiz error"
            }else{
                squareClass = "quiz"
            };

            return(
                <div 
                    key={item.key} 
                    className={squareClass} 
                    style={item.props.style}
                    onClick={() => { this.checkColor(item.props.style.backgroundColor, i); this.toggleClass(i, item.props.style.backgroundColor) }}></div>
            )
        });


        return (
            <div>
                {(this.state.active) ? null : <h1>Pick a color!</h1>}
                {(this.state.active) ? null : color}
                {(this.state.active) ? <h1>Level: {26 - this.state.level }</h1> : null }
                
                <div className="square">
                    {(this.state.active) ? squares : null}
                    {(this.state.correct >= 5 ? <button onClick={() => { this.setPlayColor(); this.resetMistakes(); this.displayForm() }}>Next Level!</button> : null)}
                </div>

            </div>
        );
    }
}

export default Quiz;
