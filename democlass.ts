// class creation --> just structure
import { Page, Locator } from '@playwright/test';
class Cart {
    page: Page;  // page > variable, Page > datatype
    cartItems: Locator;
    checkout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator("//div[@class='inventory_item_name']");
        this.checkout = page.locator("#checkout");
    } 
    
    async getChecked() {
        await this.cartItems.first().waitFor();
        const visible = await this.cartItems.first().isVisible();
        console.log(visible);
    }

    async onCheckout() {
        await this.checkout.click();
    }
}

export default Cart;

