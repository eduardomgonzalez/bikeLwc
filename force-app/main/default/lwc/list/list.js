import { LightningElement } from 'lwc';
import { bikes } from 'c/data';

export default class List extends LightningElement {
    bikes = bikes;

    handleTileClick(evt) {
        // Este componente quiere emitir un evento productselected a su padre
        const event = new CustomEvent('productselected', {
            detail: evt.detail
        });
        // Dispara el evento de c-list
        this.dispatchEvent(event);
    }
}
