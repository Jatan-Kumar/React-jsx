export default function TabButton (props){
    console.log({props}, 'props in comp');
 return <li><button>{props.children}</button></li>
}