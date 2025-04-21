type Size = "xs" | "s" | "m" | "l" | "xl" | "";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady() {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw new Error(`${key} is required`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0)
            throw new Error(`${key} is required`);
          break;
      }
    }
    return true;
  }
  toString() {
    /* 
    NO DRY
    if (this.name.length <= 0) throw new Error("Name is required");
    if (this.price <= 0) throw new Error("Price is required");
    if (this.size.length <= 0) throw new Error("Size is required");
    const stringProperties = ['name', 'size', 'price']; */

    /*  DRY */
    if(!this.isProductReady) return;
    return `${this.name} - ${this.price}  - ${this.size}`;
  }
}
(() => {
  const bluePants = new Product();
  console.log(bluePants.toString());
})();
