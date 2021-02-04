import React from 'react'
import ProductService from '../Services/ProductService'

class ProductComponent extends React.Component{

        constructor(props){
            super(props)
            this.state={
                products:[],
            };
        }

componentDidMount(){
    ProductService.getProducts().then((response)=>{
        this.setState({products:response.data})
    });
}   

render(){
        return(

            <div>

                <h1 className="text-center">Product List</h1>
                <table className="table-table-striped">
                    <thead>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </thead>

                    <tbody>
                        {
                            this.state.products.map((products)=>(
                                <tr key={products.prdId}>
                                    <td>{products.prdId}</td>
                                    <td>{products.prdName}</td>
                                    <td>{products.prdPrice}</td>

                                </tr>
                               
                            ))
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}
export default ProductComponent;






