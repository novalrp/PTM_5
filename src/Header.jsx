// Import libraries
import React from 'react';

// Create component
// class Header extends React.Component {
//     render() {
//         return (
//             <h2>Ini Makanan Khas Indonesia</h2>
//         );
//     }
// }
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        judul: 'Ini judul dari state',
        dataMakanan: this.props.list, // make sure prop name matches
      };
      this.handlePesan = this.handlePesan.bind(this);
    }

    handlePesan(pesan,e){
        alert(pesan);
        alert('Hallloo world');
        
    }
  
    render() {
      return (
        <div> 
          <h2>Makanan Khas Indonesia</h2>
          <h3>{this.state.judul}</h3>
          <p>Mengakses props dari app secara langsung : {this.props.list}</p>
          <p>Mengakses props dari state: {this.state.dataMakanan}</p>
          <a href="/" onClick={(e)=>this.handlePesan('pesan dari parameter',e)}>Halaman Header</a>
        </div>
      );
    }
  }
  
  export default Header;