import React,{useState} from 'react';
import './App.css';

function App(){
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [phone,setPhone]=useState('');
   const [bloodgroup,setBloodGroup]=useState('');
   const [address,setAddress]=useState('');

   const[tableData,setTable]=useState('');

   
    
   const handleSubmit=()=>{
      if (name === '' || email === '' || phone === '' || bloodgroup === '' || address === '') {
         alert('Missing fields')
         return;
       }
       if(phone.length!==10){
         alert('Phone Number must be at least 10 characters');
         return;
       }
       const emailRegex = /\S+@\S+\.\S+/;
       if (!emailRegex.test(email)) {
         alert('Invalid email format');
         return;
       }
       
       
      const newUser={
         name,
         email,
         phone,
         bloodgroup,
         address,
      }
      
      setTable([...tableData,newUser])

      setName('');
      setEmail('');
      setPhone('');
      setBloodGroup('');
      setAddress('');
   }
   const handleKeypress=(e)=>{
      if(e.keycode===13){
         handleSubmit();
      }
   };
  return (
    <div className="App">
      <header className="App-header">
       <div className="wrapper">
       <h1>Details of the users</h1>

     {tableData.length>0 && (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>BloodGroup</th>
        <th>Address</th>
      </tr>
      </thead>
      <tbody>
         {
            // tableData.map((row, idx) =>(
            //    <tr key={idx}>
            //        <td data-cell="name">{row.name}</td>
            //        <td data-cell="email">{row.email}</td>
            //        <td data-cell="phone">{row.phone}</td>
            //        <td data-cell="bloodgroup">{row.bloodgroup}</td>
            //        <td data-cell="address">{row.Address}</td>
            //    </tr>
            // ))    
         
            (()=>{
               const values=[];
               for(let i=0;i<tableData.length;i++){
                  const row=tableData[i];
                  values.push(
                     <tr key={i}>
                        <td data-cell="name">{row.name}</td>
                        <td data-cell="email">{row.email}</td>
                        <td data-cell="phone">{row.phone}</td>
                        <td data-cell="bloodgroup">{row.bloodgroup}</td>
                        <td data-cell="Address">{row.address}</td>
                     </tr>
                  );
               }
               return values;
            })()
       
            }   
    </tbody>
    </table>
     )}
    <div class="container">
      <h2>Add a user:</h2>
      <form>
      <label>Name:</label>
      <br/>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
      <br/>

      <label>Email:</label><br/>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <br/>

      <label>Phone:</label><br/>
      <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      <br/>

      <label>BloodGroup:</label><br/>
      <input type="text" value={bloodgroup} onChange={(e)=>setBloodGroup(e.target.value)} />
      <br/>

      <label>Address:</label><br/>
      <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={handleSubmit} onKeyPress={handleKeypress}>Submit</button>
      </form>

    </div>
    </div>
    


     


      </header>
    </div>
  );
}

export default App;
