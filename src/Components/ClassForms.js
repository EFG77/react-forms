import React, { Component } from 'react';

 class ClassForms extends Component {

  constructor(props){
    super(props)

    this.state={
      students:[
        {
        fullName:"David",
        gen:23,
      },
      {
        fullName:"Mark",
        gen:23,
      },
      {
        fullName:"Sally",
        gen:23,
      },
      {
        fullName:"Lisa",
        gen:23,
      },
      {
        fullName:"Stanley",
        gen:23,
      },
    ],


    fullName:'',

    gen:0,

    };
  }

handleChange= (e) => {

e.preventDefault()

this.setState({
 [e.target.name]:e.target.value 
});

};

handleSubmit= (e) => {
  e.preventDefault()

  const newStudent= {
    fullName: this.state.fullName,

    gen:this.state.gen
  }

  this.setState({
    students:[...this.state.students,newStudent],
    fullName:'',
    gen:0,
  })

}

  render() {
    return (
         <div> 
        

        <form onSubmit={this.handleSubmit}>
        <h1>Name</h1>
        <input type='text' placeholder='name' onChange={this.handleChange} value={this.state.fullName} name='fullName'/>

        <h1>Gen</h1>
        <input type='number' placeholder='gen' onChange={this.handleChange} value={this.state.gen} name='gen'/>
        <input type='submit'/>

        </form>
         

          {
          this.state.students.map((item,index)=>{

           return(
              <div key={index}>
              <h1>Name: {item.fullName}</h1>
              <br/>
              <h3>Gen: {item.gen}</h3>
              <hr/>
              </div>
           )


          })

          }
         </div>
    );
  }
}

export default ClassForms;


