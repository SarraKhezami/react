
import './App.css';
import { Button, Form, FormGroup,FormLabel, FormControl} from 'react-bootstrap';
const firstName = prompt("type your first name");

 function App() {
   return (
     <div>
       <p> Hello {firstName || "Anonymous"} </p>
       <p> It looks like you {firstName ? "have" : "don’t have"} a name</p>
       {!firstName && (
         <form>
           <p> Type your name here </p>
           <input type="text" />
         </form>
       )}
     </div>
   );
 }
export default App;
