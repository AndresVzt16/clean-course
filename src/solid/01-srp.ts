(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    private products: Product[] = [];

    getProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }
    saveProduct(product: Product) {
      // Realiza un proceso para guardar el producto
      console.log("Guardando en base de datos", product);
    }
  }

  class MailerService {
    private masterMail: string = 'mail"@google.com';
    private emailList: string[] = [];

    sendEmail(emailList: String[], template: "to-clients" | "to-admin") {
      { 
        console.log("Enviando correo a los clientes", template, emailList);
      }
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailerService: MailerService;

    constructor(productService: ProductService, mailerService: MailerService) {
      // Inyectamos las dependencias, pero si no se inyectan, se crean nuevas instancias
      this.productService = productService;
      this.mailerService = mailerService;
    }

    loadProduct(id: number) {
      // Realiza una petición para cargar el producto
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }

    notifyClients() {
      this.mailerService.sendEmail(['test@test.com'], 'to-clients');
      console.log("Enviando correo a los clientes");
    }
  }

  class CartBloc {
    private itemsCart: Object[] = [];
    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService = new ProductService();
  const mailerService = new MailerService();
  // Inyectamos las dependencias
  const productBloc = new ProductBloc(productService, mailerService);
  // Inyectamos las dependencias
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
