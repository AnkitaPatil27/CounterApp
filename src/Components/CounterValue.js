import "./CounterValue.css";

function CounterValue(props){
    const {count} = props;
 return <div className="counterValue">
            <h5 className="heading">Counter value</h5>
            <p>{count}</p>
        </div>
}
export default CounterValue;