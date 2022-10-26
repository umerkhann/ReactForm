import './App.css';

function App() {
  return (
    <div className="Form">
      <h1>Contact Form</h1>
      <form className='form-container'>
        <input type="text" placeholder='Name'/> 
        <input type="text" placeholder='Email'/> 
        <input type="text" placeholder='Phone'/> 
        <input type="text" placeholder='Organization'/> 
        <textarea rows='8' cols='8' placeholder='Message'/>
        <button className='submit-btn'>Submit</button>
      </form>
    </div>
  );
}

export default App;
