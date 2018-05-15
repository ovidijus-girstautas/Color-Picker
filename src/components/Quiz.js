import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
// import classNames from 'classnames';


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

    toggleClass = (i, color) => {
        let newActive = this.state.isActiveCorrect.slice()
        if(color !== this.state.activeColor){
            newActive[i] = true
            this.setState({ isActiveCorrect: newActive })
        }
    };

    setActive = () =>{
        this.setState({
            active: true
        })
    };

    setColor = (color, r, g, b) =>{
        this.setState(prevState => ({
            activeColor: color,
            r: (r + this.state.level),
            g: (g + this.state.level),
            b: (b + this.state.level)
        }));
    };
    

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

    // setLevel = () =>{
    //     this.setState({ level: this.state.level - 1 });
    // };

    resetMistakes = () =>{
        this.setState({ 
            correct: 0,
            mistake: 0,
            isActiveCorrect: Array(60).fill(false),
            isActiveMistake: Array(60).fill(false)
        });
    };

    resetLevel = () => {
        this.setState({ 
            level: 25,
            correct: 0,
            mistake: 0
         });
    };

    setPlayColor = () =>{
        this.setState({
            r: this.state.r -1,
            g: this.state.g -1,
            b: this.state.b -1,
            level: this.state.level - 1
        });
    };

    checkColor = (color, i) =>{
        if(this.state.activeColor !== color && this.state.isActiveCorrect[i] === false){
            this.setState({
                correct: this.state.correct + 1
            })
        } else if (this.state.activeColor !== color && this.state.isActiveCorrect[i] === true) {
            ;
        }else{
            if (this.state.mistake <= 3 && this.state.isActiveCorrect[i] === false) {
                this.setState({
                    mistake: this.state.mistake + 1
                })
            }else{
                this.setState({
                    active: false,
                    isActiveCorrect: Array(49).fill(false),
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

        // const squareClass = {
        //     if(){
                
        //     }
        // }

        const squares = this.state.squares.map((item, i) =>{
            return(
                <div 
                    key={item.key} 
                    className={this.state.isActiveCorrect[i] ? "quiz border" : item.props.className} 
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
                    {/* {squares} */}
                    {/* {(this.state.mistake === 2) ? <h1>LOST! Pick a color!</h1>: null} */}
                    {(this.state.correct >= 5 ? <button onClick={() => { this.setPlayColor(); this.resetMistakes(); this.displayForm() }}>Next Level!</button> : null)}
                    
                </div>

            </div>
        );
    }
}

export default Quiz;
