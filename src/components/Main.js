import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
    return (

    <div>

  <div className="article">
      <table className="tab">

      <h1 id="sample6"><u> WORKING WITH ITEM EVENTS</u></h1>

    <p> Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.Item events include check boxes, radio buttons, choices
      
.</p>

      <tr><h3>checkbox</h3>
      <p>The checkbox is shown as a square box that is ticked (checked) when activated.

Checkboxes are used to let a user select one or more options of a limited number of choices.
</p>
      
      <p><h4>syntax:</h4></p> <p>input type="checkbox"</p></tr>

        <tr><h3 align="left" id="sample2"> RadioButton</h3>
         <p> Radio buttons are normally presented in radio groups <br/><br/>
         (a collection of radio buttons describing a set of related options).<br/>
          Only one radio button in a group can be selected at the same time.<br/>

</p></tr>

        <tr><h3 align="left" id="sample3">Option tag</h3>
        <p> The option tag defines an option in a select list.<br/>

option elements go inside a select, optgroup, or datalist element.

Note: The option tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server on form submission.</p>
  </tr>




      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;


