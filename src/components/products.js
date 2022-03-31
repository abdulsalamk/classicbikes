import React from "react";

export default class FetchCustomers extends React.Component {
  state = {
    loading: true,
    customers: []
  };

  async componentDidMount() {
    const url = "https://pxqiw9agqi.execute-api.eu-west-2.amazonaws.com/staging/products";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ products: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.customers) {
      return <div>didn't get products</div>;
    }

    return (
      <div> 
        <div><b>Name:</b>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <b>Price</b></div>
        {this.state.products.map (product =>
           <div key={product.productCode}>
              <div>{product.productName}
              &nbsp;&nbsp;| &nbsp;&nbsp;
              {product.buyPrice}</div>
           </div>
          )}        
          
        {/* <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} /> */}
      </div>
    );
  }
}