import { LightningElement, api } from 'lwc';
import { bikes } from 'c/data';


export default class Detail extends LightningElement {

    // Asegúrese de que los cambios sean reactivos cuando se actualice el producto
    product;

    // Var privada para rastrear @api productId
    _productId = undefined;

    // Use set y procese el valor cada vez que sea solicitado al cambiar entre productos
    // value: En este caso viene desde "title.js" (detail: this.product.fields.Id.value)
    set productId(value) {
        this._productId = value;
        // Me traigo el objeto completo 
        //comparando lo que viene del evento con lo que esta en la data
        this.product = bikes.find(bike => bike.fields.Id.value === value);
    }
    
    // getter para productId
    @api get productId(){
        return this._productId;
    }
}