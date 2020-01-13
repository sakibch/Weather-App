// import preact
import { h, render, Component } from 'preact';
import style_clock from  '../clock';


export default class Clock extends Component {
	    constructor() {
	        super();
	        // set initial time:
	        this.state.time = Date.now();
	    }

	    componentDidMount() {
	        // update time every second
	        this.timer = setInterval(() => {
	            this.setState({ time: Date.now() });
	        }, 1000);
	    }

	    componentWillUnmount() {
	        // stop when not renderable
	        clearInterval(this.timer);
	    }
	
	    render(props, state) {
			var d = new Date();
			var weekday = new Array(7);
			weekday[0] =  "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";

			var n = weekday[d.getDay()];
	        let time = new Date(state.time).toLocaleTimeString();
	        return <div> { n  } </div>;
			//return <span>{ time }</span>;  --for time of day
	    }
	}    