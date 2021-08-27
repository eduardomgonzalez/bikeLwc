import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    @api product;

    tileClick() {
        const event = new CustomEvent('tileclick', {
            // el detalle contiene solo primitivas
            detail: this.product.fields.Id.value
        });
        // Dispara el evento desde c-tile
        this.dispatchEvent(event);
    }
}
